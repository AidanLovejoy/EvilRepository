panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 300);

head = 40;
length = 3;

direction = 1;
moved = false;

snakeSpots = [];

function addSnake(nextSpot) {
    for (let i = length; i >= 0; i--) {
        snakeSpots[i] = snakeSpots[i - 1];
    }
    snakeSpots[length + 1] = null;
    snakeSpots[0] = nextSpot;
}

document.addEventListener('keydown', (event) => {
    if (moved == false) {
        moved == true;
        if (event.key === 'w') {
            if (direction != 10) {
                direction = -10;
            }
        } else if (event.key === 's') {
            if (direction != -10) {
                direction = 10;
            }
        } else if (event.key === 'd') {
            if (direction != -1) {
                direction = 1;
            }
        } else if (event.key === 'a') {
            if (direction != 1) {
                direction = -1;
            }
        }
    }
});


function runGame() {
    panels[head - 1].classList.add("snake");
    addSnake(head - 1);

    head += direction;

    if (snakeSpots[length]) {
        panels[snakeSpots[length]].classList.remove("snake");
    }
    moved = false;
}
