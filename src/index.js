/* eslint-disable no-console */

import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Sample string goes here and also here';
  return element;
}

document.body.appendChild(component());

console.log('test');
