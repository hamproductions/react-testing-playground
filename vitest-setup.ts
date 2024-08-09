import { cleanup, configure } from '@testing-library/react';
import './src/app/index.css';

import { afterAll, afterEach, beforeAll, beforeEach, onTestFailed } from 'vitest';

import { server } from './src/app/__test__/msw';

import '@testing-library/jest-dom/vitest';
import { handlers } from '@/app/__test__/msw/handlers';

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
  //@ts-expect-error
  window.PointerEvent = MouseEvent;
  //@ts-expect-error mocking
  delete window.location;
  window.location = new URL('http://localhost/') as unknown as Location;
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
