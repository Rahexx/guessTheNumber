// Class operate  computer user
class User {
    constructor() {
        document.querySelector(".user button").addEventListener('click', this.check.bind(this));
        this.inputUser = document.querySelector(".user input");
        this.user = document.querySelector(".user");
        this.p = document.querySelector(".user p");
        this.round = document.querySelector(".round h1 span").textContent;
        let _choiceUser;
    }

    // Function checking if the user has guessed the number and increases the number of turns
    check() {
        event.preventDefault();
        this._choiceUser = this.inputUser.value;
        this.round++;
        document.querySelector(".round h1 span").textContent = this.round;
        if (game._number >= 0 && game._number <= 100) {
            if (this._choiceUser > game._number) {
                this.p.textContent = "Za duża";
            } else if (this._choiceUser < game._number) {
                this.p.textContent = "Za mała";
            } else {
                this.p.textContent = "Trafiłeś";
                result.setResult(1);
            }
        } else {
            alert("Liczba z poza zakresu lub nie wylosowałeś liczby");
        }


        this.inputUser.value = "";
    }
}
