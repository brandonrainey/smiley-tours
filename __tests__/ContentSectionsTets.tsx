import { render, screen, fireEvent } from '@testing-library/react';
import SectionCarousel from '@/components/SectionCarousel';

test('displays the correct content section when either arrow is clicked', () => {
  render(<SectionCarousel />);

  const leftArrowButton = screen.getByLabelText('previous section');
  const rightArrowButton = screen.getByLabelText('next section');

  // Initially, ContentSectionOne should be displayed
  expect(screen.getByTestId('content-section-one')).toBeInTheDocument();

  // Click the right arrow button
  fireEvent.click(rightArrowButton);

  // Now, ContentSectionTwo should be displayed
  expect(screen.getByTestId('content-section-two')).toBeInTheDocument();

  // Click the left arrow button
  fireEvent.click(leftArrowButton);

  // ContentSectionOne should be displayed again
  expect(screen.getByTestId('content-section-one')).toBeInTheDocument();
});