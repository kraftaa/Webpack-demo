import _ from 'lodash';
import './style.css';
import Run from './run.png';
import Data from './data.xml';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Run;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());