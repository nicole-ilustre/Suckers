import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const LoginStyle = () => {
  return (
    <>
<<<<<<< HEAD
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
||||||| b82ac6d
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
=======
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
>>>>>>> main
         Create your Avatar
<<<<<<< HEAD
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
||||||| b82ac6d
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
=======
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
>>>>>>> main
            Create Avatar
<<<<<<< HEAD
          </Button>
        </Segment>
      </Form>
      </Grid.Column>
    </Grid>
  </>
||||||| b82ac6d
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  </>
=======
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
>>>>>>> main
  )
}

export default LoginStyle
