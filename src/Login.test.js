import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

describe('Login component', () => {
  it('renders login form correctly', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Ensure that the login form elements are rendered
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Register/i })).toBeInTheDocument();
  });

  it('handles login correctly with valid credentials', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Mock the navigate function
    const mockNavigate = jest.fn();

    // Mocking useState to provide initial values
    jest.spyOn(React, 'useState').mockReturnValueOnce(['abc@gmail.com', jest.fn()]); // email
    jest.spyOn(React, 'useState').mockReturnValueOnce(['12345', jest.fn()]); // password

    // Mocking the useNavigate hook
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    // Trigger login with valid credentials
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert that the navigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
  });

  it('handles login correctly with invalid credentials', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    // Mock the navigate function
    const mockNavigate = jest.fn();

    // Mocking useState to provide initial values
    jest.spyOn(React, 'useState').mockReturnValueOnce(['invalidemail@gmail.com', jest.fn()]); // email
    jest.spyOn(React, 'useState').mockReturnValueOnce(['invalidpassword', jest.fn()]); // password

    // Mocking the useNavigate hook
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    // Trigger login with invalid credentials
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    // Assert that the navigate function was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
