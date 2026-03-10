clickBox = document.querySelector('.click');
spinBox = document.querySelector('.spin');
moveBox = document.querySelector('.move');
hoverBox = document.querySelector('.hover');
dblclickBox = document.querySelector('.dblclick');
jumpscare = document.querySelector('.bg');


clickBox.addEventListener('click', () => {
    clickBox.style.background = 'blue';

})


dblclickBox.addEventListener('click', () => {
    if (jumpscare.classList.contains("first")) {
        jumpscare.classList.remove("first");
    } else {
        jumpscare.classList.toggle("AHH");
    }

})

spinBox.addEventListener('click', () => {
    spinBox.classList.toggle("start");
})


x = 0;
y = 0;
document.addEventListener('keydown', () => {
    if (event.key == 'ArrowRight') {
        x += 10;
    }
    if (event.key == 'ArrowLeft') {
        x -= 10;
    }

    if (event.key == 'ArrowUp') {
        y -= 10;
    }
    if (event.key == 'ArrowDown') {
        y += 10;
    }

    moveBox.style.transform = `translate(${x}px, ${y}px)`;
})


hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.width = '100px';
    hoverBox.style.height = '100px';
})

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.width = '250px';
    hoverBox.style.height = '60px';
})
