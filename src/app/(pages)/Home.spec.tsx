import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Home } from './Home';

import '@testing-library/jest-dom/vitest';

describe('Home Page', () => {
  describe('Calculator', () => {
    it('Match Snapshot', () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });

    it('plus', () => {
      const { getByText } = render(<Home />);

      expect(getByText('()')).toBeDisabled();
    });

    it('plus', async () => {
      const { getByText } = render(<Home />);

      const user = userEvent.setup();
      const ichibotan = getByText('1');
      await user.click(ichibotan);
      await user.click(ichibotan);
      await user.click(getByText('+'));
      await user.click(ichibotan);
      await user.click(getByText('='));

      expect(getByText('12')).toBeVisible();
    });

    it('minus', async () => {
      const { getByText } = render(<Home />);

      const user = userEvent.setup();
      const ichibotan = getByText('1');
      await user.click(ichibotan);
      await user.click(ichibotan);
      await user.click(getByText('-'));
      await user.click(ichibotan);
      await user.click(getByText('='));

      expect(getByText('10')).toBeVisible();
    });

    it('minus', async () => {
      const { getByText } = render(<Home />);

      const user = userEvent.setup();
      const ichibotan = getByText('1');
      await user.click(ichibotan);
      await user.click(ichibotan);
      await user.click(getByText('×'));
      await user.click(ichibotan);
      await user.click(ichibotan);
      await user.click(getByText('='));

      expect(getByText('121')).toBeVisible();
    });
  });
  describe('Weather Report', () => {
    it('fetch', async () => {
      const { findByText } = render(<Home />);

      expect(await findByText('99°C')).toBeVisible();
    });
  });
});
