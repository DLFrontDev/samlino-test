import {createEl} from "./createEl.js";

const renderError = (targetEl, errorMessage) => {
    let rootEl = createEl('p', 'error-message');
  
    rootEl.innerHTML = errorMessage;
  
    targetEl.appendChild(rootEl);
}

export {renderError}