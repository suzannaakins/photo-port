import React from 'react';
import { render, cleanup, fireEvent, getNodeText, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach(cleanup);

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal} />)
    })
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            toggleModal={mockToggleModal} />);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {

        //Arrange: render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        //Act: simuulate the click event
        fireEvent.click(getByText('X'));

        //Assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})