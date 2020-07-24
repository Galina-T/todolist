import './style.scss';

export function make (parent, number, text) {
    const inputAttributs = {
        type: 'checkbox',
        name: 'todo',
        id: 'do' + number,
    };
    const input = document.createElement('input');
    const label = document.createElement('label');

    Object.keys(inputAttributs).forEach(function(att) {
        input.setAttribute(att, inputAttributs[att]);
    });

    label.setAttribute('for', 'do' + number);
    label.innerText = text;

    parent.appendChild(input);
    parent.appendChild(label);
}