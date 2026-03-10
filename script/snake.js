tiles = document.querySelectorAll('.empty');
dieText = document.querySelector('.die');
winText = document.querySelector('.win');
scoreText = document.querySelector('.score');
tutText = document.querySelector('.tutorial');
int = setInterval(runGame, 250);

pos = 41;
length = 3;
alive = true;

direction = 1;

snakeTiles = [];
inputQueue = [];
inputsQueued = 0;

function addSnake(nextSpot) {
    for (let i = length; i >= 0; i--) {
        snakeTiles[i] = snakeTiles[i - 1];
    }
    snakeTiles[length + 1] = null;
    snakeTiles[0] = nextSpot;
}

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //
}

function spawnApple(attemps) {
    spawnAttempt = random(0, 99)
    if (!tiles[spawnAttempt].classList.contains("snake") && !tiles[spawnAttempt].classList.contains("apple")) {
        tiles[spawnAttempt].classList.add("apple");
    } else {
        if (attemps == 1000) {
            return;
        }
        spawnApple(attemps + 1);
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

function changeAllSqaures(mode) {
    if (mode == 1) {
        for (let i = 0; i <= 99; i++) {
            tiles[i].classList.remove("snake");
            tiles[i].classList.remove("apple");
            if (i == 47) {
                tiles[i].classList.add("apple");
            }
        }
    } else {
        for (let i = 0; i <= 99; i++) {
            tiles[i].classList.add("snake");
        }
    }
}

function reset() {
    changeAllSqaures(1);
    pos = 41;
    length = 3;
    direction = 1;
    alive = true;

    winText.style.fontSize = '0px';
    dieText.style.fontSize = '0px';
    scoreText.textContent  = "Score: 0";

    for (let i = 0; i <= 99; i++) {
        snakeTiles[i] = 0;
        inputQueue[i] = 0;
    }
}

function delayKey() {
    keyPress(inputQueue[0]);
    inputQueue[inputsQueued] = 0;

    for (let i = 0; i <= inputsQueued; i++) {
        inputQueue[i] = inputQueue[i + 1];
    }

    inputsQueued -= 1;
}
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowUp" || event.key == "ArrowDown" || event.key == "ArrowLeft" || event.key == "ArrowRight") {
        inputQueue[inputsQueued] = event.key;
        inputsQueued += 1;
    }

    if (event.key == "r") {
        reset();
    }

    if (event.key == "p") {
        spawnApple();
    }
});

function runGame() {
    if (inputQueue[0]) {
        delayKey();
    }

    if (tiles[pos - 1 + direction] && tiles[pos - 1 + direction].classList.contains("snake")) {
        alive = false;
    }

    if (pos + direction < 0 || pos + direction > 100 || (pos % 10 == 1 && direction == -1) || (pos % 10 == 0 && direction == 1)) {
        alive = false;
    }

    if (length >= 100) {
        winText.style.fontSize = '20px'

        changeAllSqaures();
        return;
    }

    if (!alive) {
        dieText.style.fontSize = '20px'
        return;
    }

    pos += direction;
    tiles[pos - 1].classList.add("snake");
    if (tiles[pos - 1].classList.contains("apple")) {
        tiles[pos - 1].classList.remove("apple");
        length += 1;
        spawnApple(0);
        scoreText.textContent = `Score: ${length-3}`;
        if (length == 5)
        {
            tutText.textContent = "";
        }
    }


    addSnake(pos - 1);

    if (snakeTiles[length] || snakeTiles[length] == 0) {
        tiles[snakeTiles[length]].classList.remove("snake");
    }


}
