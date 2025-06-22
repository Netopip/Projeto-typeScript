

function contadorVogais(texto:string): number{
    let contador:number = 0;
    for(let i = 0; i < texto.toLowerCase().length;i++){
        if(texto[i] == 'a' || texto[i] == 'e' || texto[i] == 'i' || texto[i] == 'o' || texto[i] == 'u'){
            contador++;
        }
    }
    return contador;
}

console.log(contadorVogais('Meu nome é João!'));