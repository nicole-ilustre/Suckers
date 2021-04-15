import React, { useState, useEffect } from 'react'

{/* <img src="https://avatars.dicebear.com/api/male/aaron.svg" */}

function Login () {

function handleClick () {
    console.log('click!')
}

return (
    <>
    <div>
        <h2>Weather</h2>
    </div>
    <div>
        <form onSubmit="handleSubmit">
    <div>
        <select>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Bottts'>Bottts</option>
        </select>
    </div>
    <div>
        <input type="text" name="name" placeholder="Type your name" />
    </div>
    <div>
        <input type="text" name="city" placeholder="Type your city" />
    </div>
    <div>
        <button onClick={handleClick}>Submit</button>
    </div>        
    </form>
    </div>
    </>
)
}

export default Login
