class CalController{
    
    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;

        this.initialize();

    }

    initialize(){  
      setInterval(() => {
          this.displayDate = this.currentDate.toLocaleDateString( this._locale);

          this.displayTime = this.currentDate.toLocaleTimetring(this._locale);
      }, 1000);

     }
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }


    get displayDate(){
        return this._dataEl.innerHTML;
    }
    set displayDate(value){
        return this._dataEl.innerHTML = value;
    }


    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }


    get currentDate(){
        return this._currentDate;
    }
    set currentDate(valor){
        this.currentDate = valor;
    }
}