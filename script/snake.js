panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 300);

head = 40;
length = 3;

direction = 1;

snakeSpots = [];

function addSnake(nextSpot) {
    for (let i = length; i >= 0; i--)
    {
        snakeSpots[i] = snakeSpots[i - 1];
    }
    snakeSpots[length + 1] = null;
    snakeSpots[0] = nextSpot;
}

document.addEventListener('keydown', (event) => {

  if (event.key === 'w') {
    direction = -10;
  } else if (event.key === 's') {
    direction = 10;
  }else if (event.key === 'a') {
    direction = -1;
  }else if (event.key === 'd') {
    direction = 1;
  }

});


function runGame() {
    panels[head-1].classList.add("snake");
    addSnake(head-1);

    head += direction;

    if (snakeSpots[length])
    {
        panels[snakeSpots[length]].classList.remove("snake");
    }
}
