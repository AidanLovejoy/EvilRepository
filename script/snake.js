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

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //
}

function spawnApple()
{
    spawnAttempt = random(0,100)
    if (!panels[spawnAttempt].classList.contains("snake"))
    {
        panels[spawnAttempt].classList.add("apple");
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'w') {
        if (direction != 10 && moved == false) {
            moved = true;
            direction = -10;
        }
    } else if (event.key === 's') {
        if (direction != -10 && moved == false) {
            moved = true;
            direction = 10;
        }
    } else if (event.key === 'd') {
        if (direction != -1 && moved == false) {
            moved = true;
            direction = 1;
        }
    } else if (event.key === 'a') {
        if (direction != 1 && moved == false) {
            moved = true;
            direction = -1;
        }
    }

});


function runGame() {
    head += direction;

    panels[head - 1].classList.add("snake");
    if (panels[head - 1].classList.contains("apple"))
    {
         panels[head - 1].classList.remove("apple");
         length += 1;
         spawnApple();
    }
    addSnake(head - 1);

    if (snakeSpots[length]) {
        panels[snakeSpots[length]].classList.remove("snake");
    }

    moved = false;
}
