import React, { useState } from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import InputField from '../InputField/InputField'
import Guesses from '../Guesses/Guesses'
import Banner from '../Banner/Banner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const happy = guesses.includes(answer)
  const sad = guesses.length === NUM_OF_GUESSES_ALLOWED
  const disabled = happy || sad
  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <InputField
        disabled={disabled}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <Banner
        guessCount={guesses.length}
        answer={answer}
        happy={happy}
        sad={sad}
      />
    </>
  )
}

export default Game
