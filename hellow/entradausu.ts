

const numero:number = 10;
const numero2 : number = 6;
const operador:string = '/';

function somar(numero:number, numero_2:number,operador:string):any{
    if(operador === '+'){
        return numero + numero_2;
    }else if(operador === '-'){
        numero - numero_2;
    }else if(operador === '*'){
        return numero * numero_2;
    }else if(operador === '/'){
        if(numero_2 !== 0){
            return (numero / numero_2).toFixed(2);
        }else{
            return `error divisaõ por zero`;
        }
    }
}
console.log(somar(numero,numero2,operador));