import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';

describe('Dashboard component', () => {
  it('renders dashboard correctly', async () => {
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    render(<Dashboard />);

    // Wait for the component to fetch data and render
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Currency Rates/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Upcoming IPO'S/i })).toBeInTheDocument();
      // Add more assertions as needed based on your component structure
    });
  });

  it('handles API fetch errors gracefully', async () => {
    // Mock the fetch function to simulate an error
    global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch')));

    render(<Dashboard />);

    // Wait for the component to handle the fetch error
    await waitFor(() => {
      // Add assertions for how your component handles fetch errors
      expect(console.error).toHaveBeenCalledWith('Error fetching forex data:', 'Failed to fetch');
    });
  });

  // Add more test cases to cover different scenarios based on your component functionality
});
