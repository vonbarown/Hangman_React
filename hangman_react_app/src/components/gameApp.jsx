import React, { Component } from "react";
import Game from "./Game";
import randomWords from "random-words";

class App extends Component {
  state = {
    word: "",
    splitWord: [],
    hiddenWord: [],
  };

  componentDidMount() {
    this.randomGen();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.word !== prevState.word) {
      this._underScore();
    }
  }

  randomGen = () => {
    let generatedWord = randomWords();
    this.setState({
      word: generatedWord,
      splitWord: generatedWord.split(""),
    });
  };

  // creating  a secret version of the word to be displayed to the screen
  //replaces letters of word with underscore
  _underScore = () => {
    let { splitWord } = this.state;

    let wordUnderscore = [];
    splitWord.forEach((el) => {
      wordUnderscore.push("_");
    });

    this.setState({
      hiddenWord: wordUnderscore,
    });
  };

  render() {
    console.log("App state", this.state);
    const { splitWord, hiddenWord } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h1>HangMan</h1>
        </div>
        <Game
          splitWord={splitWord}
          hiddenWord={hiddenWord}
          maxTries={this.props.maxTries}
          randomGen={this.randomGen}
        />
      </div>
    );
  }
}

export default App;
