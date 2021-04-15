import React from 'react'

function Avatar () {
<<<<<<< HEAD
    return (
        <div>
            <img class="ui medium circular image" src={'https://avatars.dicebear.com/api/' + gender + '/' + userInput + '.svg'}/>
        </div>
    )
||||||| b82ac6d
    return (
        <div>
            <img src={'https://avatars.dicebear.com/api/' + gender + '/' + userInput + '.svg'} />
        </div>
    )
=======
  return (
    <div>
      <img src={'https://avatars.dicebear.com/api/' + gender + '/' + name + '.svg'} />
    </div>
  )
>>>>>>> main
}

export default Avatar