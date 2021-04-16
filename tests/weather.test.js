import React from 'react'
import { render, screen, fireEvent } from "@testing-library/react"

import Weather from '../client/components/Weather'

describe('<Weather />', () => {
  it('Finds the weather information text on screen', () => {
    render(<Weather />)
    const heading = screen.getByText(/Weather Information/)
    expect(heading).not.toBe(undefined)
  })
})

// test('inputted username appears on Weather component', () => {
//   render(<Login />)
//   const input = screen.getByLabelText('')
// })