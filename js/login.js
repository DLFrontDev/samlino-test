import auth from "./auth/auth.js";
import {renderError} from "./utility/create-error.js";

const loginForm = document.querySelector('#login-form');
const feedbackContainer = document.querySelector('#login-form .form-footer .feedback-container');

loginForm && loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = event.target.querySelector("input[name='user']").value;
    let password = event.target.querySelector("input[name='password']").value;
    feedbackContainer.classList.add('loading');
    feedbackContainer.innerHTML = "";

    auth.login(user, password)
    .then((response) => {
        feedbackContainer.classList.remove('loading');
        sessionStorage.setItem('token', response.jwt);
        location.replace(window.location.href + "profile");
    })
    .catch(() => {
        feedbackContainer.classList.remove('loading');
        renderError(feedbackContainer, 'The provided login is invalid');
    })
});
