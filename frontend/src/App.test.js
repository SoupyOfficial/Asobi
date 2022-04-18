import React from "react";
import {
  screen,
  render,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import  Register from '../src/components/Register';
require('@testing-library/jest-dom/extend-expect');
require('regenerator-runtime/runtime')

test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<Register onSubmit={handleSubmit} />)
  //const user = userEvent.setup()

  await userEvent.type(screen.getByPlaceholderText(/First Name/i), 'John')
  await userEvent.type(screen.getByPlaceholderText(/last name/i), 'Dee')
  await userEvent.type(screen.getByPlaceholderText(/JohnSmith@email.com/i), 'johndmail.com')

  await userEvent.click(screen.getByText(/submit/i))
  

  await waitFor(() =>
      //expect(screen.getByText("Email is invalid")).toBeNull()
      expect(screen.queryByTestId("emailError")).toStrictEqual(null)
  )
})

/* 
test('Fake Test', () => {
  expect(true).toBeTruthy();
});

test('Fake Two', () => {
  expect(false).toBeFalsy();
}); */
