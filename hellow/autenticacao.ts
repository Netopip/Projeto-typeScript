let usuario:string = 'Neto';
let senha:string = 'Neto9823';

function autenticacao(user:string, pass: string): boolean{
    if(user === usuario && pass == senha){
        return true;
    }else{
            return false;
        }
}

console.log(autenticacao('admin','1234'));
console.log(autenticacao('Neto','Neto9823'));









