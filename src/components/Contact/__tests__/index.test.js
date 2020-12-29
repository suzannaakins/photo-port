import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from '..'
import ContactForm from '..'

afterEach(cleanup)

//test that ContactForm is rendering properly
describe('ContactForm is rendering', () => {

    it('renders', () => {
        render(<ContactForm />);
    });
})

//snapshot test
it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm/>)
    expect(asFragment()).toMatchSnapshot()
  })

  //check h1 text content
  it('renders', () => {
    const { getByTestId } = render(<ContactForm/>)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
  })

    //check button text content
    it('renders', () => {
        const { getByTestId } = render(<ContactForm/>)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
      })