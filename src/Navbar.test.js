import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import DarkModeContextProvider from './DarkModeContext';  // assuming DarkModeContextProvider is a context provider for DarkModeContext
import Navbar from './Navbar';

describe('Navbar component', () => {
  it('renders navbar correctly', () => {
    render(
      <BrowserRouter>
        <DarkModeContextProvider>
          <Navbar />
        </DarkModeContextProvider>
      </BrowserRouter>
    );

    // Ensure that the navbar elements are rendered
    expect(screen.getByText(/iPo/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dark Mode/i })).toBeInTheDocument();
  });

  it('toggles dark mode on button click', () => {
    render(
      <BrowserRouter>
        <DarkModeContextProvider>
          <Navbar />
        </DarkModeContextProvider>
      </BrowserRouter>
    );

    // Get the dark mode button
    const darkModeButton = screen.getByRole('button', { name: /Dark Mode/i });

    // Trigger dark mode toggle
    fireEvent.click(darkModeButton);

    // Assert that the document body styles are updated based on dark mode
    expect(document.body.style.backgroundColor).toBe('#1e1e1e');
    expect(document.body.style.color).toBe('white');
  });
});
