panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 30);

head = 1;
length = 3;

snakeSpots = [];

function addSnake(nextSpot) {
    for (let i = 100; i > 1; i -= 1)
    {
        snakeSpots[i] = snakeSpots[i - 1];
    }
    snakeSpots[0] = nextSpot;
}


function runGame() {
    panels[head-1].classList.add("snake");
    addSnake(head-1);
    head += 1;
    panels[snakeSpots[1]].classList.remove("snake");



}
