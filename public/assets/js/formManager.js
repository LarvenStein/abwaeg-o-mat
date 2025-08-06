function activateInactiveButton(side) {
    const inputHtml = document.querySelector(`.${side} input.inactive`).outerHTML;

    document.querySelector(`.${side} input.inactive`).removeAttribute('onFocus');
    document.querySelector(`.${side} input.inactive`).setAttribute('name', side)
    document.querySelector(`.${side} input.inactive`).classList.remove('inactive');

    document.querySelector(`.${side}`).insertAdjacentHTML('beforeend', inputHtml);
}

function updateWeight(elem) {
    elem.value++;
    if(elem.value > 5) {
        elem.value = 1;
    }
    elem.innerText = `${elem.value}x`;
}