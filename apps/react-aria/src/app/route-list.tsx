import { createBrowserRouter } from 'react-router';

import { CounterRoute } from '@/features/counter/routes/counter-route';
import { MessagesRoute } from '@/features/messages/routes/messages-route';
import { WeatherRoute } from '@/features/weather/routes/weather-route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CounterRoute />,
  },
  {
    path: '/messages',
    element: <MessagesRoute />,
  },
  {
    path: '/weather',
    element: <WeatherRoute />,
  },
]);
