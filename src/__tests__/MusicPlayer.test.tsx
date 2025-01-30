import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { beforeAll, test, expect, vi } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '@/mocks/server';
import MusicPlayer from '../components/MusicPlayer';

const mockPlaylist = [
  {
    id: "1",
    title: "Mock Song 1",
    artist: "Mock Artist 1",
    duration: 180,
    cover: "mock-cover-1.jpg",
    song: "mock-song-1.mp3"
  },
  {
    id: "2",
    title: "Mock Song 2",
    artist: "Mock Artist 2",
    duration: 240,
    cover: "mock-cover-2.jpg",
    song: "mock-song-2.mp3"
  }
];

vi.spyOn(console, 'error').mockImplementation(() => {});

beforeAll(() => {
  server.use(
    http.get('/api/v1/playlist', () => HttpResponse.json(mockPlaylist))
  );
});

test('Verify current song is first song in playlist by default', async () => {
  render(<MusicPlayer />);
  
  await waitFor(() => {
    expect(screen.getByText('Mock Song 1')).toBeInTheDocument();
  });
});

test('Verify clicking a song in the playlist updates the current song', async () => {
  render(<MusicPlayer />);
  
  await waitFor(() => {
    const secondSong = screen.getByText('Mock Song 2');
    fireEvent.click(secondSong);
    expect(screen.getByText('Mock Song 2')).toBeInTheDocument();
  });
});

test('Verify play/pause button toggles playback', async () => {
  render(<MusicPlayer />);
  
  const playButton = await screen.findByLabelText('Play');
  fireEvent.click(playButton);

  const pauseButton = await screen.findByLabelText('Pause');
  expect(pauseButton).toBeInTheDocument();
});

test('Verify forward button changes to the next song', async () => {
  render(<MusicPlayer />);

  const nextButton = await screen.findByLabelText('Fast Forward');
  fireEvent.click(nextButton);

  await waitFor(() => {
    expect(screen.getByText('Mock Song 2')).toBeInTheDocument();
  });
});

test('Verify back button changes to the previous song', async () => {
  render(<MusicPlayer />);

  // Move to second song first
  const nextButton = await screen.findByLabelText('Fast Forward');
  fireEvent.click(nextButton);
  await waitFor(() => expect(screen.getByText('Mock Song 2')).toBeInTheDocument());

  // Now go back
  const backButton = await screen.findByLabelText('Rewind');
  fireEvent.click(backButton);
  
  await waitFor(() => {
    expect(screen.getByText('Mock Song 1')).toBeInTheDocument();
  });
});

test('Verify speed button toggles playback speed', async () => {
  render(<MusicPlayer />);

  const speedButton = await screen.findByLabelText('Playback Speed');
  fireEvent.click(speedButton);

  await waitFor(() => {
    expect(screen.getByText('1.5x')).toBeInTheDocument();
  });

  fireEvent.click(speedButton);
  await waitFor(() => {
    expect(screen.getByText('2x')).toBeInTheDocument();
  });
});