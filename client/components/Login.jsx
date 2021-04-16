import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

let userInfo = {}

function Login (props) {
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
    userInfo = formData
    props.history.push('/weather')
    return null
  }

  return (
    <>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <img className="ui medium centered image" src={`https://avatars.dicebear.com/api/${formData.gender}/${formData.name}.svg`}/>
          <Header as='h2' color='teal' textAlign='center'>
         Create your Avatar
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' name="name" value={formData.name} onChange={handleChange} />
              <Form.Input fluid icon='building' iconPosition='left' placeholder='City' name="city" value={formData.city} onChange={handleChange} />
              <select name="gender" className="ui dropdown" id="select" onChange={handleChange}>
                <option value="">Pick your Person</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='bottts'>Bottts</option>
              </select>
              <Button color='teal' fluid size='large' onClick={handleSubmit}>
            Create Avatar
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  )
}

export { Login, userInfo }

// <>
//   <div>
//     <form>
//       <div>
//         <img class="ui medium circular image" src={`https://avatars.dicebear.com/api/${formData.gender}/${formData.name}.svg`} />
//       </div>
//       <div>
//         <select name='gender' >
//           <option value='male'>Male</option>
//           <option value='female'>Female</option>
//           <option value='bottts'>Bottts</option>
//         </select>
//       </div>

//       <div>
//         <input type="text" name="name"  placeholder="Type your name"  />
//       </div>
//       <div>
//         <input type="text" name="city" value={formData.city} placeholder="Type your city" onChange={handleChange} />
//       </div>
//       <div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     </form>
//   </div>
// </>
