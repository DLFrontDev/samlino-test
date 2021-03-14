// Abstract createElement to save space
let createEl = (elType, classList) => {
    let el = document.createElement(elType);
    el.className = classList ? classList : '';
    return el;
}

export { createEl }