import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import CoverArt from '@/components/CoverArt';

describe('CoverArt Component', () => {
  test('renders correctly with only cover image', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    const { container } = render(<CoverArt cover={coverImage} lyrics={null} />);

    // Assert
    expect(container).toMatchSnapshot();
    expect(screen.getByRole('img', { name: /album cover/i })).toBeInTheDocument();
  });

  test('renders correctly with cover image and lyrics', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    const { container } = render(
      <CoverArt cover={coverImage} lyrics={lyrics} />
    );

    // Assert
    expect(container).toMatchSnapshot();
    expect(screen.getByRole('img', { name: /album cover/i })).toBeInTheDocument();
  });

  test('resets lyrics scroll position when lyrics change', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const { rerender } = render(<CoverArt cover={coverImage} lyrics="Initial lyrics" />);

    const coverContainer = screen.getByLabelText('Album Cover with Lyrics');
    fireEvent.mouseEnter(coverContainer);

    const lyricsDiv = screen.getByText('Initial lyrics');
    const lyricsContainer = lyricsDiv.parentElement as HTMLDivElement;
    lyricsContainer.scrollTop = 50;

    // Act
    rerender(<CoverArt cover={coverImage} lyrics="Updated lyrics" />);

    // Assert
    expect(lyricsContainer.scrollTop).toBe(0);
  });

  test('shows lyrics overlay on hover when lyrics exist', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    render(<CoverArt cover={coverImage} lyrics={lyrics} />);
    const coverContainer = screen.getByLabelText('Album Cover with Lyrics');

    expect(screen.queryByText(lyrics)).not.toBeInTheDocument();

    fireEvent.mouseEnter(coverContainer);

    // Assert
    expect(screen.getByText(lyrics)).toBeInTheDocument();
  });

  test('hides lyrics overlay when mouse leaves', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';
    const lyrics = 'Sample lyrics';

    // Act
    render(<CoverArt cover={coverImage} lyrics={lyrics} />);
    const coverContainer = screen.getByLabelText('Album Cover with Lyrics');


    fireEvent.mouseEnter(coverContainer);
    expect(screen.getByText(lyrics)).toBeInTheDocument();


    fireEvent.mouseLeave(coverContainer);


    expect(screen.queryByText(lyrics)).not.toBeInTheDocument();
  });

  test('does not show lyrics overlay on hover when no lyrics are provided', () => {
    // Arrange
    const coverImage = 'https://example.com/cover.jpg';

    // Act
    render(<CoverArt cover={coverImage} lyrics={null} />);
    const coverContainer = screen.getByLabelText('Album Cover with Lyrics');
    
    fireEvent.mouseEnter(coverContainer);

    // Assert
    expect(screen.queryByText(/Sample lyrics/i)).not.toBeInTheDocument();
  });
});