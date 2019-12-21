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
      hiddenWord: [],
      maxTries: 10,
      key: ''
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

  handleInput = e => {
    this.setState({
      key: String.fromCharCode(e.charCode)
    })
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <input type="text" onKeyPress={this.handleInput} />
      </div>
    );
  }
}

export default App;
