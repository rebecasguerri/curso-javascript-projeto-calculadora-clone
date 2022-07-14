 class CalController{
    
    constructor(){
        this._operation =[];
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.displayCalc = "0";
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }
    initialize(){
       this.setDisplayDateTime();

        setInterval(() =>{
           this.setDisplayDateTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{
         element.addEventListener(event, fn, false);
        });
    }



    clearAll(){

    }
    clearEntry(){

    }
    execBtn(value){
        switch (value){
            case 'ac':
                this.clearAll();
              break;
            case 'ce':
                this.clearEntry();
               break;
            case 'soma':
                this.clearEntry();
               break;
            case 'subtracao':
                this.clearEntry();
               break;
            case 'divisao':
                this.clearEntry();
               break;   
            case 'multiplicacao':
                this.clearEntry();
            break;
            case 'pocento':
                this.clearEntry();
               break;   
            case 'igual':
            this.clearEntry();
            break;      
            
            
        }
    }



    initButtonsEvents(){
       let buttons = document.querySelectorAll("#buttons >g, #parts > g");

       buttons.forEach((btn, index) =>{ 
            this.addEventListenerAll( btn, "click  drag", e =>{
             let textBtn = (btn.className.baseVal.replace("btn-", ""));
             this.execBtn(textBtn);
            });

         this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
            btn.style.cursor ="pointer"
         });
        });
       

    }

    setDisplayDateTime(){
        this.displayDate =this.currentDate.toLocaleDateString(this._locale)
        this.displayTime =this.currentDate.toLocaleTimeString(this._locale)
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayTime(value){
        return this._timeEl.innerHTML= value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }

    get currentDate(){
        return new Date();
    }
    set currentDate(valor){
        this.currentDate = valor;
    }
}