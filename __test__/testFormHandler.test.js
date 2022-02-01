// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";
import { isInputValid } from "../src/client/js/formHandler";

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handleSubmit() function", () => {
           expect(handleSubmit).toBeDefined();
    })

    test("input value should not be empty", () => {
        expect(isInputValid('')).toBe(false);
    })

    test("input shouldn't contain special characters", () => {
        expect(isInputValid('you are a monster')).toBe(true);
        expect(isInputValid('you are a monster!')).toBe(false);
    })
});