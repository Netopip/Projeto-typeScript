import { randomInt } from "crypto";


let numeros:number[] = [];

function adicionarNumero(){
    for(let i=0;i< 15;i++){
        numeros.push(randomInt(-100,100));
    }
}

function somarLista(lista:number[]):number{
    let soma = 0;
    for(let i =0;i <lista.length;i++){
        soma += lista[i];
    }
    return soma;
}

function mostrarMaior(lista:number[]):number{
    let maior = lista[0];
    for(let i=0;i < lista.length;i++){
        if(lista[i]> maior){
            maior = lista[i];
        }
    }
    return maior;
}


function mostarMenor(lista:number[]):number{
    let menor = lista[0];
    for(let i =0;i<lista.length;i++){
        if(lista[i] < menor){
            menor = lista[i];
        }
    }
    return menor;
}

function MediaLista(lista:number[]):number{
    let soma = somarLista(lista);
    let media:number = Math.round(soma/lista.length);
    return media;
}



adicionarNumero();
console.log(numeros);
console.log(`A soma dos numreo da lista é : ${somarLista(numeros)}`);
console.log(`O maior número da lista é: ${mostrarMaior(numeros)}`);
console.log(`O maior número da lista é: ${mostarMenor(numeros)}`);
console.log(`A média dos números da lista é : ${MediaLista(numeros)}`);     