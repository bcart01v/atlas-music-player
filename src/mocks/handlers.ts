import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/v1/songs/:id', (req) => {
    const { id } = req.params;
    return HttpResponse.json({
      id,
      title: `Mock Song Title ${id}`,
      artist: `Mock Artist ${id}`,
      duration: '3:45',
    });
  }),
  http.get('/api/v1/playlist', ({ request }) => {
    if (request.headers.get('x-test-error')) {
      return HttpResponse.error();
    }
    return HttpResponse.json([
      { id: '1', title: 'Mock Song 1', artist: 'Mock Artist 1' },
      { id: '2', title: 'Mock Song 2', artist: 'Mock Artist 2' },
    ]);
  }),

  http.get('/api/v1/lyrics/:id', (req) => {
    const { id } = req.params;
    return HttpResponse.json({
      lyrics: `Mock lyrics for song ${id}`,
    });
  }),
];

export const server = setupServer(...handlers);