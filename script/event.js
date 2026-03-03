clickBox = document.querySelector('.click');
spinBox = document.querySelector('.spin');


clickBox.addEventListener('click', () => {
    clickBox.style.background = 'blue';
})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle("start");
})
