import { expect, test } from "@jest/globals";
import {readJwt} from "../js/auth/jwt.js";

//These tests are incorrect, but due to lack of knowledge and structure, these are an idea of how to test these functions

// token needs to be set in sessionStorage
// token role needs to be user
// window location needs to be changed to login
test('Valid user login', () => {
    return loginSubmit('user', 'password').then(() => {
        expect(sessionStorage.getItem('token')).toBeTruthy();
        expect(readJwt(sessionStorage.getItem('token')).role).toBe('user');
        expect(window.location.href).toMatch(/login/);
    })
})

// token needs to be set in sessionStorage
// token role needs to be admin
// window location needs to be changed to login
test('Valid admin login', () => {
    return handleLogin('admin', 'admin').then(() => {
        expect(sessionStorage.getItem('token')).toBeTruthy();
        expect(readJwt(sessionStorage.getItem('token')).role).toBe('admin');
        expect(window.location.href).toMatch(/login/);
    })
})

// token needs to not be set in sessionStorage
// window location needs to not be changed to login
test('Invalid login', () => {
    return handleLogin('invalid', 'invalid').catch(() => {
        expect(sessionStorage.getItem('token')).not.toBeTruthy();
        expect(window.location.href).not.toMatch(/login/);
    })
})