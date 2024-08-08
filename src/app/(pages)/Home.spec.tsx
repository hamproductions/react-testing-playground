import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Home } from './Home';

describe('Home Page', () => {
  describe('Calculator', () => {
    it('Match Snapshot', () => {
      const { container } = render(<Home />);
      expect(container).toMatchSnapshot();
    });

    it('Disabled Button', () => {
      const { getByText } = render(<Home />);

      expect(getByText('()')).toBeDisabled();
    });

    it('Plus', async () => {
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

    it('Minus', async () => {
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

    it('Multiplication', async () => {
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
    it('Shows Data from API', async () => {
      const { findByText } = render(<Home />);

      expect(await findByText('99°C')).toBeVisible();
    });
  });
});
