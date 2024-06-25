import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the main application component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-component');
  expect(appElement).toBeInTheDocument();
});

test('renders the header component', () => {
  render(<App />);
  const headerElement = screen.getByTestId('header-component');
  expect(headerElement).toBeInTheDocument();
});

test('renders the footer component', () => {
  render(<App />);
  const footerElement = screen.getByTestId('footer-component');
  expect(footerElement).toBeInTheDocument();
});
