import React, { useState, useEffect } from 'react'

<img src="https://avatars.dicebear.com/api/male/aaron.svg"

function Login () {
    const avatar = 'https://avatars.dicebear.com/api/' + gender + '/' + userInput + '.svg'
    const initialAvatar = 'https://avatars.dicebear.com/api/{gender}/{userInput}.svg'
    const [avatar, setAvatar] = useState()
    

function handleClick () {
    console.log('click!')
  }

  return (
      <div>
          <form onSubmit="handleSubmit">
              <select>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Bottts'>Bottts</option>
              </select>
              <input type="text" name="name" placeholder="Type your name" />
              <button onClick={handleClick}>Submit</button>
          </form>
      </div>
  )
}

export default Login
