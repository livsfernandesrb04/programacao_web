function verificarNumeroPrimo(numero) {


    if (numero == 0 || numero == 1) {
        return false;
    }

    //loop para verificar se o numero é divisivel por 2
    if (numero % 2 == 0 && numero != 2){
        return false;
    }

    //loop para verificar se o numero é divisivel por outro
    for(let i = 3; i < numero; i += 2){
        if (numero % i == 0){
            return false;
        }
    }

    return true;
}

console.log(`O número 0 é primo? ${verificarNumeroPrimo(0)}`);
console.log(`O número 1 é primo? ${verificarNumeroPrimo(1)}`);
console.log(`O número 2 é primo? ${verificarNumeroPrimo(2)}`);
console.log(`O número 3 é primo? ${verificarNumeroPrimo(3)}`);
console.log(`O número 7 é primo? ${verificarNumeroPrimo(7)}`);
console.log(`O número 83 é primo? ${verificarNumeroPrimo(83)}`);
console.log(`O número 100 é primo? ${verificarNumeroPrimo(100)}`);
console.log(`O número 991 é primo? ${verificarNumeroPrimo(991)}`);
console.log(`O número 104729 é primo? ${verificarNumeroPrimo(104729)}`);
console.log(`O número 14348907 é primo? ${verificarNumeroPrimo(14348907)}`);