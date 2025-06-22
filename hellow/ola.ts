function Saudacao(nome: string){
    console.log(`Olá, ${nome} !`);
}
Saudacao("Mundo");

/*
function Iterar(numero:number):number{
    let soma = 0;
    for(let i=0;i <= numero; i++){
        console.log(i);
        soma += i;
    }
    return soma;

}

console.log(Iterar(10));*/


//mostrar somente pares
function numerospares(numero:number){
    for(let i=0;i <= numero; i++){
        if(i%2 ==0){
            console.log(i);
        }
    }
}
numerospares(10);

