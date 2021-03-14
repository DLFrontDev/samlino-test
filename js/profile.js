import {renderError} from "./utility/create-error.js";
import {renderUserList} from "./utility/create-list.js";
import {readJwt} from "./auth/jwt.js";

const userList = document.querySelector('#user-list');
const logoutBtn = document.querySelector('#logout-button');

const requestData = () => {
  let request = new XMLHttpRequest();
  const token = window.sessionStorage.getItem('token');
  const targetUrl = 'https://jsonplaceholder.typicode.com/users' + (readJwt(token).role === 'user' ? '?id=' + Math.floor(Math.random() * 10 + 1) : '');
  userList.classList.add('loading');

  const handleError = (transaction) => {
    console.error("An error ocurred after the following transaction");
    console.dir(transaction || this);
    renderError(userList, 'An error has ocurred, please try again later');
  }

  request.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
          renderUserList(userList, JSON.parse(request.responseText));
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
  window.sessionStorage.removeItem('token');
  window.location.replace(window.location.href);
}

// Due to type="module" on script tag on profile.html, this function will always execute after DOM content is loaded
requestData();

logoutBtn && logoutBtn.addEventListener('click', logout)