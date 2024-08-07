import { http, HttpResponse } from 'msw';
import { mockWeatherReport } from '../mocks/weather';

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(
    'https://api.open-meteo.com/v1/forecast?latitude=35.6589&longitude=139.7066&current=temperature_2m&forecast_days=1',
    () => {
      // ...and respond to them using this JSON response.
      return HttpResponse.json(mockWeatherReport);
    }
  )
];
