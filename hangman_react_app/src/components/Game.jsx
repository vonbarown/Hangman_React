import React from "react";
import { toast } from "react-toastify";
import Display from "./Display";

class Game extends React.Component {
  state = {
    key: "",
    message: "",
    maxTries: 6,
    rightGuesses: [],
    wrongGuesses: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.key !== prevState.key) {
      this.validity();
    }
  }

  handleInput = (e) => {
    this.setState({
      key: String.fromCharCode(e.charCode),
    });
  };

  //keeps track of the users right guesses
  checkRightGuess = (userInput) => {
    let { rightGuesses } = this.state;
    if (!rightGuesses.includes(userInput)) {
      rightGuesses.push(userInput);
      this.setState({
        rightGuesses: rightGuesses,
      });
    }
  };

  //keeping track of the users wrong guesses
  checkWrongGuess = (userInput) => {
    let { wrongGuesses } = this.state;
    if (!wrongGuesses.includes(userInput) && userInput !== "") {
      wrongGuesses.push(userInput);
      this.setState({
        wrongGuesses: wrongGuesses,
      });
    }
  };

  validity = () => {
    const { splitWord, hiddenWord } = this.props;
    let { key, maxTries } = this.state;

    for (let l = 0; l < splitWord.length; l++) {
      //checking if the letter is inside of the array and the space contains an underscore
      if (
        splitWord[l].toLowerCase() === key.toLowerCase() &&
        hiddenWord[l] === "_" &&
        key.toLowerCase() !== ""
      ) {
        hiddenWord[l] = key.toLowerCase();
        // // this function ensures that the letter is not duplicated in the array
        this.checkRightGuess(key.toLowerCase());
        // // creating a win condition  to informs the user that they have won
        if (splitWord.join("") === hiddenWord.join("")) {
          this.setState({
            message: `Congrats! You won`,
          });
          toast.success(`Congrats! You won`);
        }
      }

      if (maxTries === 0) {
        this.setState({
          message: `You lost. Press button to restart.`,
          maxTries: 0,
        });
        return toast.error(`You lost. Press button to restart.`);
      } else {
        if (
          !splitWord.includes(key.toLowerCase()) &&
          key.toLowerCase() !== ""
        ) {
          this.setState({
            maxTries: maxTries - 1,
          });
          this.checkWrongGuess(key.toLowerCase());
        }
      }
    }
  };

  generateWord = () => {
    this.props.randomGen();
    this.setState({
      key: "",
      rightGuesses: [],
      wrongGuesses: [],
      message: "",
      maxTries: 10,
    });
  };

  render() {
    console.log("Game state", this.state);

    let { rightGuesses, wrongGuesses, maxTries, sound, message } = this.state;
    return (
      <div className="game">
        <input type="text" onKeyPress={this.handleInput} />
        <Display
          hiddenWord={this.props.hiddenWord}
          rightGuesses={rightGuesses}
          wrongGuesses={wrongGuesses}
          maxTries={maxTries}
          sound={sound}
          message={message}
          generateWord={this.generateWord}
        />
      </div>
    );
  }
}

export default Game;
