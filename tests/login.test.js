import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"

import { Login } from '../client/components/Login'


//Login component test
describe('<Login />', () => {
  it('Finds the create avatar button on screen', () => {
    render(<Login />)
    const button = screen.getByText(/Create Avatar/)
    expect(button).not.toBe(undefined)
  })
})

// test('Finds the create avatar button on screen', () => {
//   render(<Login />)
//   const button = screen.getByText(/Create Avatar/)
//   expect(button).not.toBe(undefined)
// })

test('Calls onClick when submit is clicked', () => {
  const handleClick = jest.fn()
  render(<button onClick={handleClick}>Create Avatar</button>)
  fireEvent.click(screen.getByText(/Create Avatar/))
  expect(handleClick).toHaveBeenCalledTimes(1)
})