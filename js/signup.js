import auth from "./auth/auth.js";
import {createError} from "./utility/create-error.js";

const signupForm = document.querySelector('#signup-form');
const feedbackContainer = document.querySelector('#signup-form .form-footer .feedback-container');

const signupSubmit = (event) => {
    event.preventDefault();
    feedbackContainer.classList.add('loading');
    feedbackContainer.innerHTML = "";

    auth.signUp()
    .then(() => {
        feedbackContainer.classList.remove('loading');
        window.location.replace(window.location.origin + window.location.pathname.replace('signup', ''));
    })
    .catch(() => {
        feedbackContainer.classList.remove('loading');
        feedbackContainer.appendChild(createError('There was a problem while signing up, please try again'));
    })
}

// Check for loginForm element existence and attach signup submit logic
signupForm && signupForm.addEventListener('submit', signupSubmit);