import {createError} from "./utility/create-error.js";
import {createUserList} from "./utility/create-list.js";
import {readJwt} from "./auth/jwt.js";

const userList = document.querySelector('#user-list');
const logoutBtn = document.querySelector('#logout-button');

const requestData = () => {
  // This probably should be handled in a promise to be able to test
  let request = new XMLHttpRequest();
  const token = window.sessionStorage.getItem('token');
  // Build target url after checking jwt role
  const targetUrl = 'https://jsonplaceholder.typicode.com/users' + (readJwt(token).role === 'user' ? '?id=' + Math.floor(Math.random() * 10 + 1) : '');
  userList.classList.add('loading');

  const handleError = (transaction) => {
    console.error("An error ocurred after the following transaction");
    console.dir(transaction || this);
    userList.appendChild(createError('An error has ocurred, please try again later'));
  }

  request.onreadystatechange = function() {
    // Render userList when request is successful
    if (this.readyState == 4) {
      if (this.status == 200) {
          userList.appendChild(createUserList(JSON.parse(request.responseText)));
      } else {
        handleError(this);
      }
      userList.classList.remove('loading');
    }
  };  

  request.onerror = handleError;

  request.open('GET', targetUrl, true);
  request.setRequestHeader('Authorization', 'Bearer ' + token)
  request.send();
}

const logout = () => {
  // Remove token from sessionStorage and replace current location with index area
  window.sessionStorage.removeItem('token');
  window.location.replace(window.location.origin + window.location.pathname.replace('login', ''));
}

// Due to type="module" on script tag on profile.html, this function will always execute after DOM content is loaded
requestData();

// Check for logout button and attach logout event
logoutBtn && logoutBtn.addEventListener('click', logout)