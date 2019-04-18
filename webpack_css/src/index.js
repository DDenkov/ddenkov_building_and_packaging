import style from "./css/main.css";
import join from 'lodash/join';
import {helloWorld} from './hello_world';

function component() {
  let element = document.createElement('div');

  element.innerHTML = join([helloWorld], ' ');
  element.innerHTML += join(['<span class="bg"> <img id="fruit" src="/src/img/first.jpg" alt="baobab fruit"></span>', 
  ''], ' ');

  return element;
}
document.body.appendChild(component());
