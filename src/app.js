import join from 'lodash/join';
import './style.scss';
import Icon from './img/erst.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());