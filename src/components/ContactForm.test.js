import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('See if it is working', () => {
    const {getByText} = render(<ContactForm/>)

})

test('testing form submit', () => {
    const {getByLabelText, getByText} = render(<ContactForm/>)
    
    const firstNameInput = getByLabelText(/First Name*/i)
    const lastNameInput = getByLabelText(/Last Name*/i)
    const emailInput =  getByText(/email/i)
    const message = getByLabelText(/message/i)
    

    expect(firstNameInput).toBeVisible();
    expect(lastNameInput).toBeVisible();
    expect(emailInput).toBeVisible();
    expect(message).toBeVisible();

})

test('Changing input values', () => {
    const {getByLabelText, getByTestId} = render(<ContactForm/>)

    const firstNameInput = getByLabelText(/First Name*/)

    fireEvent.change(firstNameInput, {target:{value: 'Ped'}});
    
    expect(firstNameInput.value).toBe('Ped');
    
    
    fireEvent.click(getByTestId(/test/i));

})