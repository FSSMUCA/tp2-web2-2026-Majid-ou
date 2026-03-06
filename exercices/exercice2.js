// On déclare le tableau avec les 10 éléments demandés
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];

    let affichage = (val === "") ? "(chaine vide)" : String(val);

    // On teste directement si la valeur est truthy ou falsy
    let resultat = val ? "truthy" : "falsy";

    console.log(`${affichage} -> ${resultat}`);
}