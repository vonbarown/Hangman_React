import React from 'react';
import './App.css';
import words from './components/words'
import Game from './components/Game'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wordArr: words,
      word: '',
      splitWord: [],
      hiddenWord: [],
      maxTries: 10,
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
  }


  render() {
    console.log('App state', this.state);
    const { splitWord, hiddenWord } = this.state

    return (
      <div className="App">
        <div className='title'>
          <h1>HangMan</h1>
        </div>
        <Game splitWord={splitWord} hiddenWord={hiddenWord} />
      </div>
    );
  }
}

export default App;
