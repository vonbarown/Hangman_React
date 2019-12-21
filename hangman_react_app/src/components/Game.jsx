import React from 'react'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '',
            rightLetter: [],
            wrongLetter: [],
            wordProgress: []
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

    checkRightLetter = (userInput) => {
        let { rightLetter } = this.state
        // let guessedRightLetter = []
        if (!rightLetter.includes(userInput)) {
            rightLetter.push(userInput)
        }

        this.setState({
            rightLetter: rightLetter
        })
    }

    validity = () => {
        const { splitWord, hiddenWord } = this.props
        let { key } = this.state

        console.log("key", splitWord)
        for (let l = 0; l < splitWord.length; l++) {
            //checking if the letter is inside of the array and the space contains an underscore
            //the array with the underscore arg2 will be updated with the letter at the same index as in the 
            //array with the random letter
            if (splitWord[l].toLowerCase() === key.toLowerCase() && hiddenWord[l] === "_") {
                hiddenWord[l] = key.toLowerCase();
                this.setState({
                    wordProgress: hiddenWord
                })
                // // this function ensures that the letter is not duplicated in the array
                this.checkRightLetter(key.toLowerCase())
                // console.log(rightLetter);

                // docUnderScore[0].innerHTML = arg2.join(' ');
                // rightGuess[0].innerHTML = rightLetter.join(' ');
                // console.log(hiddenWord, "the hiddenWord");
                // // creating a win condition  to informs the user that they have won
                // if (arg1.join('') === arg2.join('')) {
                //     paragraph[0].innerHTML = `You won`
                //     console.log(paragraph);
                //     sound.src = "./2018-04-02_-_Beautiful_Village_-_David_Fesliyan.mp3"
                //     sound.currentTime = 5;
                //     button.style.visibility = "visible"
                //     document.removeEventListener('keypress', tester)
                // }
            }
        }

    }

    render() {
        console.log('Game state', this.state);

        return (
            <div className='game'>
                <input type="text" onKeyPress={this.handleInput} />
            </div>
        )
    }
}

export default Game