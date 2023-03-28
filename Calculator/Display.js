class Display{
    constructor(displayPreviousValue, displayCurrentValue){
        this.displayCurrentValue=displayCurrentValue;
        this.displayPreviousValue=displayPreviousValue;
        this.calculator=new Calculadora();
        this.tipoOperacion=undefined;
        this.currentValue='';
        this.previousValue='';
        this.signos={
            sumar: "+",
            dividir:"/",
            multiplicar:"x",
            restar:"-"
        }
    }
    borrar(){
        this.currentValue=this.currentValue.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.currentValue='';
        this.previousValue='';
        this.tipoOperacion=undefined;
        this.imprimirValores();

    }
    computar(tipo){
        this.tipoOperacion!=='igual' && this.calcular();
        this.tipoOperacion=tipo;
        this.previousValue=this.currentValue||this.previousValue;
        this.currentValue='';
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero==="." && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + numero.toString();
        this.currentValue.toString
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayCurrentValue.textContent=this.currentValue;
        this.displayPreviousValue.textContent=`${this.previousValue} ${this.signos[this.tipoOperacion]|| ''} `;

    }
    calcular(){
        const previousValue=parseFloat(this.previousValue);
        const currentValue=parseFloat(this.currentValue);

        if(isNaN(currentValue)|| isNaN(previousValue)) return
        this.currentValue=this.calculator[this.tipoOperacion](previousValue, currentValue)

    }
}