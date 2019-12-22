import React from 'react'
import './game.css'
const Display = (props) => {
    const { hiddenWord, rightGuesses, wrongGuesses, maxTries, message } = props


    return (<div className='display'>
        <p>You hav {maxTries} chances remaining</p>
        <p>{hiddenWord.join(' ')}</p>
        <div className='guesses'>
            <div className='right'>
                <p>Right Guesses</p>
                <p>{rightGuesses.join(' ')}</p>
            </div>
            <div className='wrong'>
                <p>Wrong Guesses</p>
                <p>{wrongGuesses}</p>
            </div>

            <p>{message}</p>
        </div>
    </div>
    )

}

export default Display