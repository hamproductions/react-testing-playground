import '@testing-library/jest-dom/vitest';
import { cleanup, configure } from '@testing-library/react';
import './src/app/index.css';

import { afterAll, afterEach, beforeAll, beforeEach, onTestFailed } from 'vitest';

import { setupServer } from 'msw/node';

import { handlers } from './src/app/__test__/msw/index';

export const server = setupServer(...handlers);

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url);
});

beforeAll(() => {
  server.listen();
  configure({
    // asyncUtilTimeout: import.meta.env.CI === true ? undefined : 5000,
  });
});

beforeEach(() => {
  // @ts-expect-error TODO:
  window.PointerEvent = MouseEvent;
  // @ts-expect-error TODO:
  delete window.location;
  // @ts-expect-error TODO:
  window.location = new URL('http://localhost/');
  window.localStorage.clear();
});

afterEach(() => {
  onTestFailed(() => {
    // debug();
    // screen.debug();
  });

  server.resetHandlers(...handlers);
  cleanup(); // clear testing data after each test run
});
afterAll(() => server.close());
