import type { Preview } from '@storybook/react';

import '../src/app/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {}
  }
};

export default preview;
