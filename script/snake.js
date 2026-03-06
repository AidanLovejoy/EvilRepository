panels = document.querySelectorAll('.empty');
dieText = document.querySelector('.die');
winText = document.querySelector('.win');
int = setInterval(runGame, 300);

head = 41;
length = 3;
alive = true;
win = false;

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
    else
    {
        spawnApple();
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        if (direction != 10 && moved == false) {
            moved = true;
            direction = -10;
        }
    } else if (event.key === 'ArrowDown') {
        if (direction != -10 && moved == false) {
            moved = true;
            direction = 10;
        }
    } else if (event.key === 'ArrowRight') {
        if (direction != -1 && moved == false) {
            moved = true;
            direction = 1;
        }
    } else if (event.key === 'ArrowLeft') {
        if (direction != 1 && moved == false) {
            moved = true;
            direction = -1;
        }
    }

});

function runGame() {
    spawnApple();
    if (panels[head - 1 + direction] && panels[head - 1 + direction].classList.contains("snake"))
    {
         alive = false;
    }

    if (head + direction < 0 || head + direction > 100 || (head%10 == 1 && direction == -1) ||  (head%10 == 0 && direction == 1))
    {
        alive = false;
    }

    if (length == 100)
    {
        alive = false;
        win = true;
    }

    if (!alive)
    {
        if (win)
        {
            winText.style.fontSize = '20px'
        }
        else
        {
            dieText.style.fontSize = '20px'
        }

        return;
    }

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
