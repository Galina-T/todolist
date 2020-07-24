import { sum } from '../../utils';
import './style.scss';

export function make(parent) {
    const el = document.createElement('button');
    el.classList.add('button');
    el.innerText = 'My new button';
    el.addEventListener('click', function () {
        console.log(sum(10, 15));
    })
    parent.appendChild(el);
}