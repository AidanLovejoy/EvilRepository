panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 30);

head = 1;
length = 10;

snakeSpots = [];

function addSnake(nextSpot) {
    for (let i = length; i >= 0; i--)
    {
        snakeSpots[i] = snakeSpots[i - 1];
    }
    snakeSpots[length + 1] = null;
    snakeSpots[0] = nextSpot;
}


function runGame() {
    panels[head-1].classList.add("snake");
    addSnake(head-1);

    if (head < 100)
    {
        head += 1;
    }

    if (snakeSpots[length])
    {
        panels[snakeSpots[length]].classList.remove("snake");
    }
}
