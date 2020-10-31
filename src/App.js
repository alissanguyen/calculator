import "./App.css";
import React from "react";

function App() {
  const [evaluationString, setEvaluationString] = React.useState("");

  console.log("EVALUATIONS TRING STATE", evaluationString);

  const zero = 0;
  const one = 1;
  const two = 2;
  const three = 3;
  const four = 4;
  const five = 5;
  const six = 6;
  const seven = 7;
  const eight = 8;
  const nine = 9;

  const addSymbolToEvaluationString = (symbol) => {
    setEvaluationString((prev) => {
      return prev.replace(/^0+/, "") + symbol.toString();
    });
  };

  // The last character in the evaluation string
  const lastInput = evaluationString.charAt(evaluationString.length - 1);

  const setOfOperandCharacters = new Set(["/", "+", "-", "*", "%", "="]);

  const attemptToEvaluateResult = () => {
    try {
      if (setOfOperandCharacters.has(lastInput)) {
        return eval(evaluationString.slice(0, evaluationString.length - 1));
      }
      return eval(evaluationString);
    } catch (e) {
      console.error(e);
      return NaN;
    }
  };

  const evaluatedResult = attemptToEvaluateResult();

  var stringToDisplay = setOfOperandCharacters.has(lastInput)
    ? evaluatedResult
    : lastInput;

  return (
    <React.Fragment>
      <div className="App"></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="textarea" readOnly value={stringToDisplay}></input>
        <div className="row" id="zero-row">
          <button
            className="special-operand"
            onClick={(e) => {
              setEvaluationString("0");
            }}
          >
            C
          </button>
          <button
            className="special-operand"
            onClick={(e) => {
              //TODO: FIX THIS
              addSymbolToEvaluationString(` ${-lastInput}`);
            }}
          >
            +/-
          </button>
          <button
            className="special-operand"
            onClick={(e) => {
              addSymbolToEvaluationString("/100");
              // TODO: FIX THIS
              eval(evaluationString);
            }}
          >
            %
          </button>
          <button
            className="operand"
            onClick={(e) => {
              addSymbolToEvaluationString("/");
            }}
          >
            /
          </button>
        </div>
        <div className="row" id="first-row">
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(seven);
            }}
          >
            {seven}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(eight);
            }}
          >
            {eight}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(nine);
            }}
          >
            {nine}
          </button>
          <button
            className="operand"
            onClick={(e) => {
              addSymbolToEvaluationString("*");
            }}
          >
            x
          </button>
        </div>
        <div className="row" id="second-row">
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(four);
            }}
          >
            {four}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(five);
            }}
          >
            {five}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(six);
            }}
          >
            {six}
          </button>
          <button
            className="operand"
            onClick={(e) => {
              addSymbolToEvaluationString("-");
            }}
          >
            -
          </button>
        </div>
        <div className="row" id="third-row">
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(one);
            }}
          >
            {one}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(two);
            }}
          >
            {two}
          </button>
          <button
            onClick={(e) => {
              addSymbolToEvaluationString(three);
            }}
          >
            {three}
          </button>
          <button
            className="operand"
            onClick={(e) => {
              addSymbolToEvaluationString("+");
            }}
          >
            +
          </button>
        </div>
        <div className="row" id="fourth-row">
          <button
            id="zero-button"
            onClick={(e) => {
              addSymbolToEvaluationString(zero);
            }}
          >
            {zero}
          </button>
          <button id="point">.</button>
          <button
          id="equal"
            className="operand"
            onClick={(e) => {
              addSymbolToEvaluationString("=");
            }}
          >
            =
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default App;
