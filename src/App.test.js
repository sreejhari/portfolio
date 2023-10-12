import { render, screen } from '@testing-library/react';
import { HomePage } from './pages/homePage';
import { AboutMePage } from './pages/AboutMePage';
import { PortfolioPage} from './pages/PortfolioPage';
import { TestimonialsPage } from './pages/TestimonialsPage';


test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/Frontend Developer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<PortfolioPage />);
  const linkElement = screen.getByText(/Front-End/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<AboutMePage />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<TestimonialsPage  />);
  const linkElement = screen.getByText(/Sparks Foundation/i);
  expect(linkElement).toBeInTheDocument();
});






