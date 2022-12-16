import { isThirteen } from "./is-thirteen-core";

test('isThirteen', function() {
    expect(isThirteen(13)).toBe(true);
    expect(isThirteen(12)).toBe(false);
});