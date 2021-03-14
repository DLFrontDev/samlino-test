import auth from "./auth/auth.js";
import {renderError} from "/js/utility/createError.js";

const loginForm = document.querySelector('#login-form');
const feedbackContainer = document.querySelector('#login-form .form-footer .feedback-container');

loginForm && loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let user = event.target.querySelector("input[name='user']").value;
    let password = event.target.querySelector("input[name='password']").value;
    feedbackContainer.classList.add('loading');

    auth.login(user, password)
    .then((response) => {
        feedbackContainer.classList.remove('loading');
        sessionStorage.setItem('token', response.jwt);
        location.replace(window.location.origin + "/profile");
    })
    .catch(() => {
        feedbackContainer.classList.remove('loading');
        feedbackContainer.innerHTML = "";
        renderError(feedbackContainer, 'The provided login is invalid');
    })
});
