import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainContent from '../components/MainContent';

describe('MainContent', () => {
  test('renders MainContent component', () => {
    render(<MainContent />);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });

  test('renders title', () => {
    render(<MainContent />);
    const title = screen.getByText(/Tokyo Tour Guide/i);
    expect(title).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<MainContent />);
    const image = screen.getByAltText('featured miley image');
    expect(image).toBeInTheDocument();
  })

  test('renders text', () => {
    render(<MainContent />);
    const text = screen.getByText(/Hey there!/i);
    expect(text).toBeInTheDocument();
  })

});