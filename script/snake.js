panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 30);

head = 1;
length = 10;

snakeSpots = [];

function addSnake(nextSpot) {
    for (let i = 0; i < length; i++)
    {
        if (snakeSpots[i - 1])
        {
            snakeSpots[i] = snakeSpots[i - 1];
        }
    }
    snakeSpots[length] = null;
    snakeSpots[0] = nextSpot;
}


function runGame() {
    panels[head-1].classList.add("snake");
    addSnake(head-1);
    head += 1;
    if (snakeSpots[length])
    {
        panels[snakeSpots[length]].classList.remove("snake");
    }




}
