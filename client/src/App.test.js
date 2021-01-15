import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders PRESS TO BEGIN button', () => {
  render(<App />);
  const linkElement = screen.getByText(/PRESS TO BEGIN/i);
  expect(linkElement).toBeInTheDocument();
});