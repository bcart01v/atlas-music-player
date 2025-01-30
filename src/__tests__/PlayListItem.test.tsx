import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi, afterEach } from 'vitest';
import PlayListItem from '@/components/PlayListItem';

describe('PlayListItem Component', () => {
  const mockOnClick = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders correctly with all props', () => {
    // Arrange & Act
    const { container } = render(
      <PlayListItem
        title="Song Title"
        artist="Artist Name"
        duration="3:45"
        isPlaying={false}
        onClick={mockOnClick}
      />
    );

    // Assert
    expect(container).toMatchSnapshot();
  });

  test('applies correct styles when isPlaying is true', () => {
    // Arrange
    render(
      <PlayListItem
        title="Current Song"
        artist="Current Artist"
        duration="4:20"
        isPlaying={true}
        onClick={mockOnClick}
      />
    );

    // Act
    const listItem = screen.getByRole('option');

    // Assert
    expect(listItem.classList.contains('bg-primary')).toBe(true);
    expect(listItem.classList.contains('text-darkText')).toBe(true);
  });

  test('applies correct styles when isPlaying is false', () => {
    // Arrange
    render(
      <PlayListItem
        title="Non-Playing Song"
        artist="Artist"
        duration="3:30"
        isPlaying={false}
        onClick={mockOnClick}
      />
    );

    // Act
    const listItem = screen.getByRole('option');

    // Assert
    expect(listItem.classList.contains('bg-lightBackground')).toBe(true);
    expect(listItem.classList.contains('text-lightText')).toBe(true);
    expect(listItem.classList.contains('dark:bg-darkBackground')).toBe(true);
    expect(listItem.classList.contains('dark:text-darkText')).toBe(true);
  });

  test('calls onClick when clicked', () => {
    // Arrange
    render(
      <PlayListItem
        title="Click Test"
        artist="Click Artist"
        duration="2:30"
        isPlaying={false}
        onClick={mockOnClick}
      />
    );

    // Act
    const listItem = screen.getByRole('option');
    fireEvent.click(listItem);

    // Assert
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('renders title, artist and duration', () => {
    // Arrange
    render(
      <PlayListItem
        title="Test Song"
        artist="Test Artist"
        duration="3:00"
        isPlaying={false}
        onClick={mockOnClick}
      />
    );

    // Assert
    expect(screen.getByText('Test Song')).toBeInTheDocument();
    expect(screen.getByText('Test Artist')).toBeInTheDocument();
    expect(screen.getByText('3:00')).toBeInTheDocument();
  });
});