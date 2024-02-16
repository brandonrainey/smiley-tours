import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TourSidebar from '../components/TourSidebar';

test('tours link to different pages', () => {
    render(<TourSidebar />);
    const tourLinks = screen.getAllByRole('link');
    const hrefs = tourLinks.map((link) => link.getAttribute('href'));
    const uniqueHrefs = new Set(hrefs);
    expect(uniqueHrefs.size).toBe(tourLinks.length);
  });