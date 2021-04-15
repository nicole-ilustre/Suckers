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
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' name="name" />
          <select name="gender" className="ui dropdown" id="select">
            <option value="">Pick your Person</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <Button color='teal' fluid size='large'>
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
