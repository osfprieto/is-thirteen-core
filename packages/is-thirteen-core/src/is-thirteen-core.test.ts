import { THIRTEEN } from "./consts";
import { isThirteen } from "./isThirteen";

test(`isThirteen with ${THIRTEEN}`, () => {
    expect(isThirteen(THIRTEEN)).toBe(true);
});

test(`isThirteen with other than ${THIRTEEN}`, () => {
    expect(isThirteen(12)).toBe(false);
});