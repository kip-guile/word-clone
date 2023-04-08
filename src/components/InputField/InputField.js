import React, { useState } from 'react'

function InputField({ disabled, setGuesses, guesses }) {
  const [guess, setGuess] = useState('')
  const handlechange = (e) => {
    setGuess(e.target.value.toUpperCase())
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setGuesses([...guesses, guess])
    setGuess('')
  }
  return (
    <form onSubmit={handleSubmit} className='guess-input-wrapper'>
      <label htmlFor='guess'>Enter guess:</label>
      <input
        value={guess}
        onChange={handlechange}
        id='guess-input'
        type='text'
        pattern='\w{5,5}'
        required
        disabled={disabled}
      />
    </form>
  )
}

export default InputField
