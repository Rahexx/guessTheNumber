//The class responsible for the results of the game
class Result {
    constructor() {
        this.win = document.querySelector(".win");
        this.lost = document.querySelector(".lost");
        this.gameNumber = document.querySelector(".games");
    }

    // Function that increases the number of wins / losses depending on the value of the score variable.
    setResult(score) {
        if (score == 1) {
            this.win.textContent = ++this.win.textContent;
        } else if (score == 0) {
            this.lost.textContent = ++this.lost.textContent;
        }
        this.gameNumber.textContent = ++this.gameNumber.textContent;
    }
}
