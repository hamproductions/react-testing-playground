import { describe, expect, it, test } from 'vitest';

const sum = (a: any, b: any) => a + b;

describe('Test Testing', () => {
  test('Adds a and b', () => {
    expect(sum(1, 1)).toEqual(2);
  });

  it('Adds String', () => {
    expect(sum('hoge', 'fuga')).toEqual('hogefuga');
  });
});
