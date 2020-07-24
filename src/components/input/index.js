import './style.scss';

export function make (parent) {
    const el = document.createElement('input');
    el.classList.add('input');
    parent.appendChild(el);
}