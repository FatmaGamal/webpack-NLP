// Import the js file to test
import { checkForEmotion } from "../src/client/js/emotionChecker";

test("specific emotions should return value entered", () => {
    expect(checkForEmotion('angry')).toBe('angry');
})


test("words other than specific emotions should return false", () => {
    expect(checkForEmotion('butterflies')).toBe(false);
})

test("input value should not be empty", () => {
    expect(checkForEmotion('')).toBe(false);
})