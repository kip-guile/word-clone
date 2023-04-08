import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers'

function Row({ word, index, answer }) {
  const guessStatus = checkGuess(word, answer)
  return (
    <p className='guess' key={index}>
      {guessStatus.map((letter, index) => (
        <span
          className={`cell ${letter.letter !== '_' ? letter.status : ''}`}
          key={index}
        >
          {letter.letter === '_' ? ' ' : letter.letter}
        </span>
      ))}
    </p>
  )
}

function Guesses({ guesses, answer }) {
  const myGuessesWithIds = guesses.map((guess, index) => ({
    word: guess,
    myId: index,
  }))
  const guessCount = myGuessesWithIds.length
  const emptyRows = NUM_OF_GUESSES_ALLOWED - guessCount
  return (
    <div className='guess-results'>
      {myGuessesWithIds.map(({ word, myId }) => {
        return (
          <>
            <Row word={word} index={myId} answer={answer} />
          </>
        )
      })}
      {emptyRows > 0 &&
        (() => {
          const emptyRowsArray = Array(emptyRows).fill(0)
          return emptyRowsArray.map((_, index) => (
            <Row word='_____' index={index} answer={answer} />
          ))
        })()}
    </div>
  )
}

export default Guesses
