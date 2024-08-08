import { http, HttpResponse } from 'msw';
import { mockWeatherReport } from '../mocks/weather';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://api.open-meteo.com/v1/forecast', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(mockWeatherReport);
  })
];
