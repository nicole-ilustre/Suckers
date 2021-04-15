import React from 'react'

function Avatar () {
    return (
        <div>
            <img class="ui medium circular image" src={'https://avatars.dicebear.com/api/' + gender + '/' + name + '.svg'}/>
        </div>
    )
}

export default Avatar