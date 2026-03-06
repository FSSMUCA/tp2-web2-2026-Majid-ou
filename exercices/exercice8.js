let nom               = "   Abdelmajid   ";
let age               = "20";
let email             = "majidouami9@gmail.com";
let scoreJeu          = "200pts";
let estAdmin          = "false";
let derniereConnexion = null;
let nombreConnexions  = "0";

// Traitement des données
let nomCorrige    = nom.trim() || "Inconnu";

let ageConverti   = parseInt(age);
let ageValide     = !Number.isNaN(ageConverti) && ageConverti > 0;

let indexAt       = email.indexOf("@");
let emailValide   = indexAt !== -1 && email.indexOf(".", indexAt) !== -1;

let score         = parseInt(scoreJeu);
let scoreCorrige  = Number.isNaN(score) ? 0 : score;

let adminCorrige  = estAdmin === "true";

let connexion     = derniereConnexion ?? "Jamais connecté";

let nbConnexions  = parseInt(nombreConnexions);
let connexionAff  = nbConnexions === 0 ? "Aucune connexion" : nbConnexions;

// Rapport final
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageConverti} (${ageValide ? "valide" : "invalide"})`);
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${adminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${connexion}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${connexionAff}" (0 après conversion)`);
console.log("================================");