import { expect, test } from "@jest/globals";
import { createUserList } from "../js/utility/create-list.js";

// returned object must be an HTMLElement
// element must contain at least 1 child
test('Test list creation', () => {
    let data = fetchDummyData();
    expect(createUserList(data) instanceof HTMLElement).toBeTruthy();
    expect(createEl(createUserList(data)).childElementCount).toBeGreaterThan(0);
})

// Test createUserBlock as well?