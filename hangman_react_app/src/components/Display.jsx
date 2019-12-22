import React from 'react'

const Display = (props) => {
    const { hiddenWord, rightGuesses } = props


    return (<div className={'display'}>
        <p>{hiddenWord.join(' ')}</p>
        <p>{rightGuesses.join(' ')}</p>
    </div>
    )

}

export default Display