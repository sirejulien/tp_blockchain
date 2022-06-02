# TP BLOCKCHAIN

## Création d'une appli web pour faire des paris en Ether

Le principe de base de l'application était de créer une interface web permettant de faire des paris en Ether.
Pour cela l'interface web demande de choisir 3 comptes metamask, un arbitre et 2 joueurs, et de donner l'objet et le montant du pari.

Après confirmation des 3 comptes l'application devait déployer un smart contract contenant les informations du pari et les fonctions permettant à l'arbitre d'interagir avec lui, c'est à dire déclarer un gagnant ou invalider le pari.

A l'initialisation du pari l'application vérifie la présence des fonds mis en jeu dans les comptes de chacun des 2 joueurs et les transfère à l'arbitre. C'est ensuite à l'arbitre de déclarer un gagnant et ainsi verser les 2 sommes mises en jeu au gagnant. Au passage le but était de garder une parti des mises comme commission personnelle.

Cependant je n'ai pas réussi à déployer un contrat via ethers js à cause notamment d'une erreur de compréhension de la norme ERC20. Je n'ai réalisé que trop tard que le projet était de trop grande envergure pour un débutant.

Pour qu'un tel projet puisse être viable il aurait également fallu un système de sauvegarde des adresses des contrats créés pour que les arbitres puisse interagir avec ceux qui les concernent.

## Etat du projet

Une application react permettant de remplir un formulaire pour créer un pari. Le bouton submit de ce formulaire appelle une fonction pour créer le pari en fonction des infos rentrées dans le formulaires cependant le deploiement du contrat par l'application ne fonctionne pas. Sans doute à cause de la lecture du fichier json créé lors de la compilation du fichier .sol par Remix.
