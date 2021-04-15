import React, { useState } from 'react'
import { getWeather } from '../apiClient'

function Login () {
  const initialData = {
    name: 'Nicole',
    gender: 'female',
    city: ''
  }

  const [formData, setFormData] = useState(initialData)

  function handleChange (e) {
    let value = e.target.value
    if (e.target.selectedIndex !== undefined) {
      value = e.target.options[e.target.selectedIndex].value
    }
    const newFormData = {
      ...formData,
      [e.target.name]: value
    }
    setFormData(newFormData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    setFormData(formData)
    getWeather(formData.city)
    return null
  }

  return (
    <>
      <div>
        <form>
          <div>
            <img src={`https://avatars.dicebear.com/api/${formData.gender}/${formData.name}.svg`} />
          </div>
          <div>
            <select name='gender' onChange={handleChange}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='bottts'>Bottts</option>
            </select>
          </div>

          <div>
            <input type="text" name="name" value={formData.name} placeholder="Type your name" onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="city" value={formData.city} placeholder="Type your city" onChange={handleChange} />
          </div>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
