import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"
import { debug } from 'webpack'

import Login from '../client/components/Login'


// Login component test
describe('<Login />', () => {
  it('Finds the submit button on screen', () => {
    render(<Login />)
    const button = screen.getByText('Submit')
    expect(button).not.toBe(undefined)
  })
})

test('Calls onClick when submit is clicked', () => {
  const handleClick = jest.fn()
  render(<button onClick={handleClick}>Submit</button>)
  fireEvent.click(screen.getByText(/Submit/))
  expect(handleClick).toHaveBeenCalledTimes(1)
})