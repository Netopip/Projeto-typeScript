let nomes: string[] = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", 
    "Isabela", "João", "Ana", "Bruno", "Carlos", "Gabriel", "Isabela", "João",
    "Lucas", "Mariana", "Nathalia", "Otávio", "Paula", "Renato", "Sara", "Thiago", 
    "Úrsula", "Vanessa", "Wesley", "Yasmin", "Zeca", "Mariana", "Carlos", "Ana"
];


nomes.push('Neto');


function mostrarLista(lista:string[]){
    for(let i=0;i<lista.length;i++){
        console.log(lista[i]);
    }
}

function contagem(lista:string[]){
    let contagem: {[key: string]: number} = {};
    for(let i =0;i < lista.length;i++){
        let nome = lista[i];
        if(contagem[nome]){
            contagem[nome] ++;

        }else{
            contagem[nome] = 1;
        }
    }
    return contagem;
}
mostrarLista(nomes);
console.log(contagem(nomes));