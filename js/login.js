import auth from "./auth/auth.js";
import {createError} from "./utility/create-error.js";

const loginForm = document.querySelector('#login-form');
const feedbackContainer = document.querySelector('#login-form .form-footer .feedback-container');

const loginSubmit = (event) => {
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
        feedbackContainer.appendChild(createError('The provided login is invalid'));
    })
}

// Check for loginForm element existence and attach login submit logic
loginForm && loginForm.addEventListener('submit', loginSubmit);
