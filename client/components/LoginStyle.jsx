import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const LoginStyle = () => {
  return (
    <>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
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

export default LoginStyle
