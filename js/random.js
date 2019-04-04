class  Random{
    constructor(){
        document.querySelector(".start button").addEventListener('click', this.draw.bind(this));
        let _number;
    }

    draw(){
        this._number = Math.floor(Math.random() * 100) + 1;
        console.log(this._number);
        document.querySelector(".round h1 span").textContent = "0";
        AI.numberAI.textContent ="";
        user.round = 0;
        user.p.textContent = "";
    }
}