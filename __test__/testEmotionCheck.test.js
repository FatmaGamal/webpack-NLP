// Import the js file to test
import { checkForValue } from "../src/client/js/emotionChecker";

test("specific emotions should return value entered", () => {
    expect(checkForValue('angry')).toBe('angry');
})

test("words other than specific emotions should return false", () => {
    expect(checkForValue('butterflies')).toBe(false);
})

test("input value should not be empty", () => {
    expect(checkForValue('')).toBe(false);
})