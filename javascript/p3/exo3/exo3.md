# Exo 3

## Objectif:  Réaliser une fonction factorielle pour calculer le nombre possible d'arrangements pour l'organisation d'une salle de réunion selon le nombre de personnes.
(On en a parlé récemment 😉)

1. Demander à l'utilisateur combien de personnes il y aura lors de la réunion.
2. Créer une fonction factorielle qui va prendre le nombre de personnes et va calculer le nombre de possibilités d'arrangement.
3. Utiliser cette fonction et afficher à l'écran le nombre de possibilités selon le nombre de personnes.

## Rappel de l'arrangement mathématique:
"L'arrangement est la disposition ordonnée d'un certain nombre d'éléments" 🤨🤔
En gros c'est le nombre de possibilité d'organisation réalisable sans répéter les même cas.

Exemple:
6 personnes arrivent dans une salle de réunion, il y a une table de 6 places:
- Imaginons que le premier choisisse 1 place parmis les 6 disponibles, le premier aura donc donc 6 possibilités 6️
- Le second va devoir choisir aussi, il aura plus que 5 places vue que le premier est assis sur une. 5️
- Le troisième aura plus que 4 places pour choisir la sienne 4️
- Le quatrième 3 places possibles 3️
- Le cinquième 2 places possibles 2️ 
- et le dernier il aura plus trop le choix... il prendra la danière place ! 1️

![Alt Text](images/table.gif)

On a ici une organisation de la table avec les 6 personnes.
Imaginons qu'on refasse ensuite l'organisation mais que les participants mais avec au moins un cas différent et ça jusqu'à avoir toute les possibilités possibles:

#### Exemple:

1. Première possibilité:

<img src="images/p1.png" width="300" height="200" />

2. Seconde possibilité:

<img src="images/p2.png" width="300" height="200" />

3. Troisième possibilité:

<img src="images/p3.png" width="300" height="200" />

Et il y en a encore beaucoup d'autres... 😬

### Théorie mathématique 🧮 

Pour calculer les possibilité on va utiliser une fonction mathématique appelé factorielle et qui s'écrit mathématiquement avec un point d'esclamation `6! = 720` soit 720 possibilités.

Détail:
- le premier à 6 possibilités
- le second 5 possibilités
- le troisième 4 possibilités
- le quatriéme 3 possibilités
- le cinquième 2 possibilités
- et le dernier 1 possibilité

On peut calculer ça en faisant: `6 * 5 * 4 * 3 * 2 * 1 = 720` <br>
donc 720 possibilités !

### Théorie algorithmique 🤖

Du coup pour faire ça sous forme d'un algo ? 🤨🤔 
il faut créer une fonction factorielle qui va prendre le nombre de personne en paramètre appelé `personnes`,
il faut cette fonction multiplie le nombre de `personnes` par le nombre de `personnes - 1` jusqu'à arriver à 1.

Mais non c'est pas si compliqué, bon courage! 💪
