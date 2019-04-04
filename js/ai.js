class  AI{
    constructor(){
        document.querySelector(".user button").addEventListener('click', this.drawAI.bind(this));
        this.numberAI = document.querySelector('.AI p span');
        this.AI = document.querySelector('.AI');
        this.p = document.querySelector(".numberAI");
        let _choiceAI;
        let scoreAI = 0;
    }

    drawAI(){
        this._choice = Math.floor(Math.random() * 100) + 1;
        this.numberAI.textContent = this._choice;

        if(this._choice > game._number){
            this.p.textContent = "Za duża";
        }
        else if(this._choice < game._number){
            this.p.textContent = "Za mała";
        }
        else{
            this.p.textContent = "Trafiłeś";
            result.setResult(0);
        }
    }
}