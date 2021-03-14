import { expect, test } from "@jest/globals";
import {handleSignup} from "./form-handlers/handle-signup.js";

//These tests are incorrect, but due to lack of knowledge and structure, these are an idea of how to test these functions

// Due to random nature of auth.signUp valid generation, this test is not accurate

// window location needs to changed to not signup 
test('Valid Signup', () => {
    return handleSignup().then(() => {
        expect(window.location.href).not.toContain('signup');
    })
})

// window location needs to remain signup 
test('Valid Signup', () => {
    return handleSignup().catch(() => {
        expect(window.location.href).toContain('signup');
    })
})