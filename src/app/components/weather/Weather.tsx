import axios from 'axios';
import { use } from 'react';
import { Text } from 'components/ui/text';
import { Center, Stack } from 'styled-system/jsx';
import type { WeatherResults } from '@/app/types/weather';
import { Heading } from 'components/ui/heading';

export function Weather() {
  const { data } = use(
    axios.get<WeatherResults>(
      'https://api.open-meteo.com/v1/forecast?latitude=35.6589&longitude=139.7066&current=temperature_2m&forecast_days=1'
    )
  );

  return (
    <Center textAlign="center">
      <Stack>
        <Heading>渋谷の天気</Heading>
        <Text>
          {data.current.temperature_2m}
          {data.current_units.temperature_2m}
        </Text>
      </Stack>
    </Center>
  );
}
