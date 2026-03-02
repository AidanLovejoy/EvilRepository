panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 30);

head = 25;
tail = 27;

function runGame() {
    panels[head-1].classList.add("snake");
    panels[tail-1].classList.add("snake");
}
