import { describe, expect, it, test } from 'vitest';

const sum = <T extends string | number>(a: T, b: T): string | number =>
  (a as unknown as string) + (b as unknown as string);

describe('Test Testing', () => {
  test('Adds a and b', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('Adds String', () => {
    expect(sum('hoge', 'fuga')).toEqual('hogefuga');
  });
});
