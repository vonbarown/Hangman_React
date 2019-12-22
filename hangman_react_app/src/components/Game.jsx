import React from 'react'
import Display from './Display'


class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            rightGuesses: [],
            wrongGuesses: [],
            sound: '',
            message: '',
            maxTries: 10
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
    checkWrongGuess = (userInput) => {
        let { wrongGuesses } = this.state
        if (!wrongGuesses.includes(userInput)) {
            wrongGuesses.push(userInput)
        }
        this.setState({
            wrongGuesses: wrongGuesses
        })
    }

    validity = () => {
        const { splitWord, hiddenWord } = this.props

        let { key, maxTries } = this.state
        console.log('max', maxTries);

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
            if (!splitWord.includes(key.toLowerCase())) {
                this.setState({
                    maxTries: maxTries - 1
                })
                this.checkWrongGuess(key.toLowerCase())
                // wrongGuess[0].innerHTML = wrongLetter.join(' ')
                // remaining[0].innerHTML = `You have ${maxTries} lives remaining`
                // // calling the image function to run whenever the player makes a bad guess
                // image();

                // if (wrongLetter.includes(keyWord)) {
                //     console.log('hello');

                // }
            }
            if (maxTries === 0) {
                this.setState({
                    message: `You lost. Press button to restart.`
                })
                // loser[0].innerHTML = `You lost. Press button to restart.`;
                // docUnderScore[0].innerHTML = arg1.join(' ');
                // document.removeEventListener('keypress', tester)
                // button.style.visibility = "visible"
                // }
            }
        }

    }

    render() {
        console.log('Game state', this.state);

        let { rightGuesses, wrongGuesses } = this.state
        return (
            <div className='game'>
                <input type="text" onKeyPress={this.handleInput} />
                <Display hiddenWord={this.props.hiddenWord} rightGuesses={rightGuesses} wrongGuesses={wrongGuesses} />
            </div>
        )
    }
}

export default Game