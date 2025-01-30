// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './src/mocks/server';  // path to your server.ts

// Start server before all tests
beforeAll(() => {
  console.log('Starting MSW server...');
  server.listen({ onUnhandledRequest: 'warn' });
});

// Reset handlers after each test and do cleanup
afterEach(() => {
  server.resetHandlers();
  cleanup();
  console.log('Resetting MSW handlers and cleaning up DOM...');
});

// Close server after all tests
afterAll(() => {
  console.log('Stopping MSW server...');
  server.close();
});