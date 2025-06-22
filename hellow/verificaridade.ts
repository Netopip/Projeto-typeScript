

function verificarIdade(idade:number, nome:string){
    if(idade < 18 && idade >=0){
        console.log(`Olá ${nome}, você é menor de idade!`);
    }else if(idade >=18 && idade < 60){
        console.log(`Olá ${nome}, você é maior de idade!`);
    }else if(idade >= 60){
        console.log(`Olá ${nome}, você é idoso!`);
    }else if(idade > 100 || idade < 0){
        console.log(`Você talvez não exista, ☠️ !`);
    }else{
        console.log(`Olá ${nome},digite uma idade válida!`);
    }
}

verificarIdade(-1,"Neto");