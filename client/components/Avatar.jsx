import React from 'react'

function Avatar () {
    return (
        <div>
            <img src={'https://avatars.dicebear.com/api/' + gender + '/' + userInput + '.svg'} />
        </div>
    )
}

export default Avatar