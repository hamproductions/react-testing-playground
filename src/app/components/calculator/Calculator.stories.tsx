import type { Meta, StoryObj } from '@storybook/react';

import { within, userEvent, expect, fn } from '@storybook/test';
import { Calculator } from './Calculator';

const meta: Meta<typeof Calculator> = {
  component: Calculator
};

export default meta;
type Story = StoryObj<typeof Calculator>;

export const Primary: Story = {
  args: {
    equation: '123020',
    onButtonPressed: fn()
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText(1));

    await expect(args.onButtonPressed).toHaveBeenCalled();
  }
};
