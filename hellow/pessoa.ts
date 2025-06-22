interface Pessoas{
    nome:string;
    idade:number;
    profissao: string;
};

function saudacao(pessoa: Pessoas):string{
    return `Olá ${pessoa.nome}, voce tem ${pessoa.idade} anos e é ${pessoa.profissao}.`;
}
console.log(saudacao({nome: 'Neto',idade:26,profissao:'Programador'}));