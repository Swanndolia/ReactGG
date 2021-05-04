import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  render(<Header />);
  const test = screen.getByText(/Test/i);
  expect(test).toBeInTheDocument();
});
