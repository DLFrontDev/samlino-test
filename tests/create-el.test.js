import { expect, test } from "@jest/globals";
import { createEl } from "../js/utility/create-el.js";

// returned object must be an HTMLElement
// element tagName must be of the type requested
test('Test element creation', () => {
    expect(createEl('p') instanceof HTMLElement).toBeTruthy();
    expect(createEl('p').tagName).toBe('p');
})