import "./App.css";
import React from "react";

function App() {
  const [currentNumber, setCurrentNumber] = React.useState();
  const [state, setState] = React.useState("");

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

  function percentage(number) {
    setCurrentNumber(number / 100);
  }

  const [result, setResult] = React.useState(null);

  function handleState(number) {
    if (state === "isDividing") {
      setResult(currentNumber / number);
      setCurrentNumber(number);
    } else if (state === "isMultiplying") {
      setResult(currentNumber * number);
      setCurrentNumber(number);
    } else if (state === "isMinusing") {
      setResult(currentNumber - number);
      setCurrentNumber(number);
    } else if (state === "isAdding") {
      setResult(currentNumber + number);
      setCurrentNumber(number);
    } else {
      setCurrentNumber(number);
    }
  }

  return (
    <React.Fragment>
      <div className="App"></div>
      <form>
        <input type="textarea" value={currentNumber}></input>
        <div className="row" id="zero-row">
          <button
            id="clear-button"
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(0);
              setState(null);
            }}
          >
            C
          </button>
          <button
            id="toggle-sign"
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(-currentNumber);
            }}
          >
            T
          </button>
          <button
            id="percentage"
            onClick={(e) => {
              e.preventDefault();
              percentage(currentNumber);
            }}
          >
            %
          </button>
          <button
            id="division"
            onClick={(e) => {
              e.preventDefault();
              setState("isDividing");
            }}
          >
            /
          </button>
        </div>
        <div className="row" id="first-row">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleState(seven);
            }}
          >
            {seven}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleState(eight);
            }}
          >
            {eight}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(nine);
            }}
          >
            {nine}
          </button>
          <button id="multiplication">x</button>
        </div>
        <div className="row" id="second-row">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(four);
            }}
          >
            {four}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(five);
            }}
          >
            {five}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(six);
            }}
          >
            {six}
          </button>
          <button id="minus">-</button>
        </div>
        <div className="row" id="third-row">
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(three);
            }}
          >
            {three}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(two);
            }}
          >
            {two}
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(one);
            }}
          >
            {one}
          </button>
          <button id="addition">+</button>
        </div>
        <div className="row" id="fourth-row">
          <button
            id="zero-button"
            onClick={(e) => {
              e.preventDefault();
              setCurrentNumber(zero);
            }}
          >
            {zero}
          </button>
          <button id="point">.</button>
          <button id="equal" onClick={(e) => {e.preventDefault(); setCurrentNumber(result)}}>
            =
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default App;
