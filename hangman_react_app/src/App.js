import React from 'react';
import './App.css';
import words from './components/words'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wordArr: words,
      word: '',
      splitWord: [],
      hiddenWord: []
    }
  }



  componentDidMount() {
    this.randomGen()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.word !== prevState.word) {
      this.underScore()
    }
  }

  randomGen = () => {
    const { wordArr } = this.state
    let generatedWord = wordArr[Math.floor(Math.random() * words.length)];
    this.setState({
      word: generatedWord,
      splitWord: generatedWord.split('')
    })

  }

  underScore = () => {
    let { splitWord } = this.state

    let wordUnderscore = []
    splitWord.forEach(el => {
      wordUnderscore.push("_")
    })

    this.setState({
      hiddenWord: wordUnderscore
    })

    // for (let i = 0; i < word.length; i++) {
    //   hiddenWord[i] = "_";
    // }
    // return hiddenWord
  }



  render() {
    console.log(this.state);

    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
