panels = document.querySelectorAll('.empty');
int = setInterval(runGame, 300);

head = 1;
length = 3;

//panels = [];

function runGame() {
    panels[head-1].classList.add("snake");

}
