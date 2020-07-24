import { make as makeBtnClose} from './components/btn-close';
import {make as makeCheckboxTodo} from './components/checkbox-todo';
import './style.scss';
  
const field = document.querySelector('#field');
const list = document.querySelector('.list');

let listElements = document.getElementsByClassName('list__element');

field.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13 && field.value !== "") {

        const listElement = document.createElement('li');
        const numberListElement = listElements.length + 1;
        const text = field.value;
        
        listElement.classList.add('list__element');

        makeCheckboxTodo(listElement, numberListElement, text);
        makeBtnClose(listElement);

        listElement.addEventListener('click', function (evt) {

            if (evt.target.classList.contains('btn-close')) {
                evt.currentTarget.remove();
            }
        });

        list.appendChild(listElement);
    }
});
