import './style.scss';

export function make (parent) {
    const btn = document.createElement('button');
    btn.classList.add('btn-close');
    btn.type = 'button';
    btn.value = 'Удалить';
    btn.innerText = 'Удалить';
    parent.appendChild(btn);
}