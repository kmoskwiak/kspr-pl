const template = document.getElementById('template');
const container = document.getElementById('container');

const num  = 10;

let elements = [];

for(let i = 0; i < num; i++) {
    let el = template.cloneNode(true);
    el.removeAttribute('id');
    elements.push(el);
    container.appendChild(el);
}