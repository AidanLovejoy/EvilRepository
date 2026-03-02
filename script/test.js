div = document.querySelector('.div')

size = 100;
dir = true;

int = setInterval(changeSize, 30)

function changeSize() {
    if (size >= 250 || size <= 50)
    {
        dir = !dir;
    }

    size += (dir*10)-5;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
}


