'use client';

import { Suspense } from 'react';
import { Calculator } from '../components/calculator/Calculator';
import { useCalculator } from '../components/calculator/useCalculator';
import { Weather } from '../components/weather/Weather';
import { Text } from 'components/ui/text';
import { Heading } from 'components/ui/heading';
import { Center, Stack, HStack } from 'styled-system/jsx';

export function Home() {
  const MAX_LENGTH = 10;
  const { equation, onButtonPressed } = useCalculator({ maxLength: MAX_LENGTH });
  return (
    <Center flex={1} w="full" minH="screen">
      <Stack alignItems="center" w="full">
        <Heading fontSize="2xl">計算機 v2.0</Heading>
        {equation.length >= MAX_LENGTH && <Text>ごめんなさい式は{MAX_LENGTH}までです</Text>}
        <HStack justifyContent="space-around" alignItems="stretch" w="full">
          <Calculator equation={equation} onButtonPressed={onButtonPressed} />
        </HStack>
        <Suspense fallback={<Text>読み込み中…</Text>}>
          <Weather />
        </Suspense>
      </Stack>
    </Center>
  );
}
