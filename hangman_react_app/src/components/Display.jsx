import React from "react";
import "./game.css";

const Display = ({
  hiddenWord,
  rightGuesses,
  wrongGuesses,
  maxTries,
  message,
  generateWord,
}) => {
  return (
    <div className="display">
      <p>You hav {maxTries} chances remaining</p>
      <p className="hidden">{hiddenWord.join(" ")}</p>
      <div className="guesses">
        <div className="right">
          <p>Right Guesses</p>
          <p>{rightGuesses.join(" ")}</p>
        </div>
        <div className="wrong">
          <p>Wrong Guesses</p>
          <p>{wrongGuesses}</p>
        </div>
        <p>{message}</p>
      </div>
      <button className="restart" onClick={generateWord}>
        Restart
      </button>
    </div>
  );
};

export default Display;
