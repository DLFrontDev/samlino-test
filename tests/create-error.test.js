import { expect, test } from "@jest/globals";
import { createError } from "../js/utility/create-error.js";

// returned object must be an HTMLElement
// element tagName must be of the type paragraph
// element innerHTML must be the same as the message passed in parameter
test('Test element creation', () => {
    expect(createError('Error message') instanceof HTMLElement).toBeTruthy();
    expect(createError('Error message').tagName).toBe('p');
    expect(createError('Error message').innerHTML).toBe('Error message');
})