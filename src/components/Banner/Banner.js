import React from 'react'

function Banner({ guessCount, answer, happy, sad }) {
  if (happy) {
    return (
      <div className='happy banner'>
        <p>
          <strong>Congratulations!</strong> Got it in
          <span> </span>
          <strong> {guessCount} guesses</strong>.
        </p>
      </div>
    )
  }
  if (sad) {
    return (
      <div class='sad banner'>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    )
  }
  return null
}

export default Banner
