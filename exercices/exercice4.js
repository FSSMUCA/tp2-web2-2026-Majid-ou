let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteur = 0;

for (let i = 0; i < paires.length; i++) {
    let a = paires[i][0];
    let b = paires[i][1];

    let loose = a == b; 
    let strict = a === b; 

    console.log(`${a} == ${b} \t\t-> ${loose} \t| \t${a} === ${b} \t\t-> ${strict}`);

    // true avec == mais false avec === → types différents
    if (loose === true && strict === false) {
        compteur++;
    }
}

console.log("---");
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);