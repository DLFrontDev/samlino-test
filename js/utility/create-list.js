import {createEl} from "./create-el.js";

const createUserList = (data) => {
    const rootEl = createEl('ul', 'list-container');  
    
    for (let user in data) {
        rootEl.appendChild(createUserBlock(data[user]));
    }
    
    return rootEl;
}

const createUserBlock = data => {
  let rootEl = createEl('li', 'list-block');
  let containerEl = createEl('div', 'info-container');
  let userDisplayData = ['name', 'username', 'email', 'phone', 'address'];

  // Parse the data for the fields detailed on requirements 
  for (let field in data) {
    if (userDisplayData.includes(field)) {
      let fieldName = field;
      let fieldText = data[field];
      let infoLineEl = createEl('div', 'info-line');

      let infoTitleEl = createEl('div', 'info-title');
      infoTitleEl.innerHTML = fieldName + ':';
      infoLineEl.appendChild(infoTitleEl);

      let infoTextEl = createEl('div', 'info-text');
      switch (fieldName) {
        case 'phone':
          infoTextEl.innerHTML = fieldText.split(' ')[0];
          break;
        case 'address':
          // Ensure address structure detailed by requirements
          infoTextEl.innerHTML = fieldText.street + ', ' + fieldText.suite + ', ' + fieldText.city + ' ' + fieldText.zipcode;
          break;
        default:
          infoTextEl.innerHTML = fieldText;
      }
      infoLineEl.appendChild(infoTextEl);

      containerEl.appendChild(infoLineEl);
    }
  }

  rootEl.appendChild(containerEl);
  return rootEl;
}

export {createUserList}