let nom    = null;
let age    = 0;
let ville  = "";
let score  = undefined;
let actif  = false;

let variables = [
    { nom: "nom",   val: nom   },
    { nom: "age",   val: age   },
    { nom: "ville", val: ville },
    { nom: "score", val: score },
    { nom: "actif", val: actif }
];

// Partie A 
console.log("-- Partie A (??) --");
for (let i = 0; i < variables.length; i++) {
    let v = variables[i];
    console.log(`${v.nom} ?? "valeur par défaut" -> ${v.val ?? "valeur par défaut"}`);
}

// Partie B  
console.log("-- Partie B (||) --");
for (let i = 0; i < variables.length; i++) {
    let v = variables[i];
    console.log(`${v.nom} || "valeur par défaut" -> ${v.val || "valeur par défaut"}`);
}

// Partie C 
console.log("-- Partie C (comparaison) --");
for (let i = 0; i < variables.length; i++) {
    let v = variables[i];
    let nullish = v.val ?? "valeur par défaut";
    let logical = v.val || "valeur par défaut";
    let resultat = nullish === logical ? "même résultat" : "résultat différent";
    console.log(`${v.nom} : ?? et || -> ${resultat}`);
}