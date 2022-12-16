import { isThirteen } from "./is-thirteen-core";

test('isThirteen with 13', () => {
    expect(isThirteen(13)).toBe(true);
});

test('isThirteen with other than 13', () => {
    expect(isThirteen(12)).toBe(false);
});