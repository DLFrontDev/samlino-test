import auth from "./auth/auth.js";
import {renderError} from "./utility/create-error.js";

const signupForm = document.querySelector('#signup-form');
const feedbackContainer = document.querySelector('#signup-form .form-footer .feedback-container');

signupForm && signupForm.addEventListener('submit', (event) => {
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
        renderError(feedbackContainer, 'There was a problem while signing up, please try again');
    })
});