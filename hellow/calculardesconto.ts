

function CalcularDesconto(preco:number, desconto:number):number{
    let valor_final = 0
    if(desconto < 0 || desconto > 100){
        console.log(`Desconto no valor de ${desconto}% inválido!`);
    }else{
       valor_final = preco - (preco * (desconto/100));
       //console.log(`O valor final do produto com desconto de ${desconto}% é de ${valor_final.toFixed(2)}`);
    }
    return valor_final;
}

//CalcularDesconto(256,15);
//CalcularDesconto(1345,75);
console.log(`O valor final do produto é de ${CalcularDesconto(256,15)}`)