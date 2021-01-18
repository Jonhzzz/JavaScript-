function fazerSuco(fruta1, fruta2){
    fruta1M = fruta1.length / 2;
    fruta2M = fruta2.length / 2;

    frutaA = fruta1.substring(0, fruta1M);
    frutaB = fruta2.substring(fruta2M,fruta2M*2);
    
    frutaF = frutaA + frutaB;

    return frutaF;
}

fruta1 = prompt("Escreva o Nome de Uma Fruta");
fruta2 = prompt("Escreva o Nome de Outra Fruta")

const copo = fazerSuco(fruta1, fruta2);

alert(`Voce fez Suco de ${frutaF}`);
console.log(`Voce fez suco de ${frutaF}`);
