let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let label;

    if (Number.isNaN(val)) {
        label = "INVALIDE";
    } else if (!isFinite(val)) {
        label = "INFINI";
    } else if (1 / val === -Infinity) { // seul moyen de détecter -0
        label = "ZERO NEGATIF";
    } else if (Number.isSafeInteger(val)) {
        label = "ENTIER SUR";
    } else if (Number.isInteger(val)) {
        label = "ENTIER HORS LIMITES";
    } else {
        label = "DECIMAL";
    }

    console.log(`${val} -> ${label}`);
}