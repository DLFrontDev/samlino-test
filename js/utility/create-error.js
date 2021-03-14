import {createEl} from "./create-el.js";

const createError = (errorMessage) => {
    let rootEl = createEl('p', 'error-message');
    rootEl.innerHTML = errorMessage;
  
    return rootEl;
}

export {createError}