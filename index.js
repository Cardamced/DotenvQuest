// Import du paquet dotenv pour charger les variables d'environnement depuis le fichier.env
require('dotenv').config();

// Déclaration des valeurs des variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Condition qui vérifie que les variables d'environnement sont bien définies
if (!name || !city || !language) {
  console.error('Veuillez définir les variables d\'environnement MY_NAME, MY_CITY et MY_LANGUAGE.');
  process.exit(1);
}

// Affichage du message comprenant les variables.
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
