tiles = document.querySelectorAll('.empty');
dieText = document.querySelector('.die');
winText = document.querySelector('.win');
int = setInterval(runGame, 300);

head = 41;
length = 3;
alive = true;
win = false;

direction = 1;

snakeSpots = [];
inputChain = [];
inputsChained = 0;

function addSnake(nextSpot) {
    for (let i = length; i >= 0; i--) {
        snakeSpots[i] = snakeSpots[i - 1];
    }
    snakeSpots[length + 1] = null;
    snakeSpots[0] = nextSpot;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //
}

function spawnApple() {
    spawnAttempt = random(0, 99)
    if (!tiles[spawnAttempt].classList.contains("snake")) {
        tiles[spawnAttempt].classList.add("apple");
    } else {
        spawnApple();
    }
}

function keyPress(key) {
    if (key === 'ArrowUp') {
        if (direction != 10) {
            direction = -10;
        }
    } else if (key === 'ArrowDown') {
        if (direction != -10) {
            direction = 10;
        }
    } else if (key === 'ArrowRight') {
        if (direction != -1) {
            direction = 1;
        }
    } else if (key === 'ArrowLeft') {
        if (direction != 1) {
            direction = -1;
        }
    }
}

function runKey() {
    keyPress(inputChain[0]);
    inputChain[inputsChained] = 0;


    for (let i = 0; i <= inputsChained; i++) {
        inputChain[i] = inputChain[i + 1];
    }

    inputsChained -= 1;
}
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
        inputChain[inputsChained] = key;
        inputsChained += 1;
    }
});

function runGame() {
    spawnApple();
    spawnApple();
    if (inputChain[0]) {
        useKeyQueued();
    }

    if (tiles[head - 1 + direction] && tiles[head - 1 + direction].classList.contains("snake")) {
        alive = false;
    }

    if (head + direction < 0 || head + direction > 100 || (head % 10 == 1 && direction == -1) || (head % 10 == 0 && direction == 1)) {
        alive = false;
    }

    if (length >= 100) {
        winText.style.fontSize = '20px'
        return;
    }

    if (!alive) {
        dieText.style.fontSize = '20px'
        return;
    }

    head += direction;
    tiles[head - 1].classList.add("snake");
    if (tiles[head - 1].classList.contains("apple")) {
        tiles[head - 1].classList.remove("apple");
        length += 1;
        spawnApple();
    }

    addSnake(head - 1);

    if (snakeSpots[length] || snakeSpots[length] == 0) {
        tiles[snakeSpots[length]].classList.remove("snake");
    }
}
