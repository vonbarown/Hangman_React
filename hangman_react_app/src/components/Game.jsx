import React from 'react'
import Display from './Display'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            rightGuesses: [],
            wrongLetter: [],
            sound: '',
            message: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.key !== prevState.key) {
            this.validity()
        }
    }

    handleInput = e => {
        this.setState({
            key: String.fromCharCode(e.charCode)
        })
    }

    checkRightGuess = (userInput) => {
        let { rightGuesses } = this.state
        if (!rightGuesses.includes(userInput)) {
            rightGuesses.push(userInput)
        }
        this.setState({
            rightGuesses: rightGuesses
        })
    }

    validity = () => {
        const { splitWord, hiddenWord } = this.props
        let { key } = this.state

        console.log("key", splitWord)
        for (let l = 0; l < splitWord.length; l++) {
            //checking if the letter is inside of the array and the space contains an underscore
            if (splitWord[l].toLowerCase() === key.toLowerCase() && hiddenWord[l] === "_") {
                hiddenWord[l] = key.toLowerCase();
                // // this function ensures that the letter is not duplicated in the array
                this.checkRightGuess(key.toLowerCase())
                // // creating a win condition  to informs the user that they have won
                if (splitWord.join('') === hiddenWord.join('')) {
                    this.setState({
                        sound: "./2018-04-02_-_Beautiful_Village_-_David_Fesliyan.mp3",
                        message: `You won`
                    })
                }
            }
        }

    }

    render() {
        console.log('Game state', this.state);

        let { rightGuesses } = this.state
        return (
            <div className='game'>
                <input type="text" onKeyPress={this.handleInput} />
                <Display hiddenWord={this.props.hiddenWord} rightGuesses={rightGuesses} />
            </div>
        )
    }
}

export default Game