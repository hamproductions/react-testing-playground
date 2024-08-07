'use client';

import { ALL_BUTTONS, DISABLED_BUTTONS } from './utils';
import type { ButtonProps } from 'components/ui/button';
import { Button } from 'components/ui/button';
import { Text } from 'components/ui/text';
import { Box, Grid, Stack } from 'styled-system/jsx';

function CalculatorButton(props: ButtonProps) {
  return <Button size="xl" rounded="xl" fontSize="xl" {...props} />;
}
export function Calculator(props: { equation: string; onButtonPressed: (button: string) => void }) {
  const { equation, onButtonPressed } = props;

  return (
    <Box border="1px solid" borderColor="border.default" rounded="l1" padding="4">
      <Stack gap="4">
        <Box rounded="l2" p="1" bgColor="bg.muted">
          <Text textAlign="end" fontSize="5xl">
            {equation.replaceAll('*', '×').replaceAll('/', '÷')}
          </Text>
        </Box>
        <Grid gridTemplateColumns="repeat(4, 1fr)">
          {ALL_BUTTONS.map((i, idx) => {
            return (
              <CalculatorButton
                disabled={DISABLED_BUTTONS.includes(i.toString())}
                key={idx}
                onClick={() => onButtonPressed(i.toString())}
              >
                {i}
              </CalculatorButton>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
}
