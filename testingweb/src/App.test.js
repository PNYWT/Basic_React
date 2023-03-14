import { render, screen } from '@testing-library/react';
import App from './App';

test('renders เว็บแอพคำนวณ BMI link', () => {
  render(<App />);
  const titleText = screen.getByText(/เว็บแอพคำนวณ BMI/i);
  expect(titleText).toBeInTheDocument();
});
