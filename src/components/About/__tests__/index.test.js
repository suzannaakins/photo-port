import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//ensure no leftover memory data after each test that could give false results
afterEach(cleanup);

//renders About test
describe('About component', () => {
    //First Test - verify that About component is rendering
    it('renders', () => {
        render(<About />);
    });
    //Second Test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})