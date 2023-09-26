export const add = (...args: number[]) => args.reduce((a, b) => a + b, 0);

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("add", () => {
    expect(add()).toBe(0);
    expect(add(1)).toBe(1);
    expect(add(1, 2, 3)).toBe(6);
  });
}