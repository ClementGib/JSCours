passer dans une chaine et mettre en majuscule que les voyelles

### Exercices boucles:

Dans chacun des dossies d'exo, il y a deux fichiers:
- index.html : fichier HTML avec une balise `<script>` rattaché au fichier `script.js`
- script.js : fichier à adapter pour réussir l'exercice

Tu peux lancer un fichier HTML avec `live server` sur VsCode. Bonne chance ! 💪

*Si il y a que un fichier script.js c'est que vous devez l'executer avec `node`*


#### Exercice 1 

**Objectif**: Accumulation
Demander à l'utilisateur une fois sur la page HTML de saisir un nombre


**Utiliser la boucler `for`**

1. Faire une itération avec la boucle `for`
partir de 1 et additionner tous les chiffres précédent le nombre entré par l'utilisateur
2 Afficher à l'écran la somme!

Exemples: 
avec le nombre 10 -> 1 + 2 + 3 + 4 ... + 8 + 9 + 10 = **55**
avec le nombre 25 -> 1 + 2 + 3 + 4 ... + 20 + 21 + 22 + 23 + 24 + 25 = **325**

#### Exercice 2 

**Objectif**: Analyse des voyelles
Demander à l'utilisateur une fois sur la page HTML de saisir son nom


**Utiliser la boucler `for`**

1. itérer sur le nom pour analyser chacune des lettres
2. Si la lettre est une voyelle la mettre en majuscule
3. Sinon la laisser en minuscule
4. Afficher le résultat

Exemples: 
avec le nom julien -> **jUlIEn** (U, I et E sont des voyelles)
avec le nom pierre -> **pIErrE** (I et E sont des voyelles)


#### Exercice 3

**Objectif**: Devineur de nombre
**Utiliser le `while`**

1. Générer un nombre aléatoire entre 1 et 10
2. Demander à l'utilisateur de saisir un nombre
3. Tant que l'utilisateur n'a pas trouvé le bon nombre généré, afficher qu'il s'est trompé et lui redemander un nombre

Exemple :
Pour le nombre 7 :
- L'utilisateur rentre 4 -> afficher qu'il s'est **trompé**
- L'utilisateur rentre 9 -> afficher qu'il s'est **trompé**
- L'utilisateur rentre 7 -> afficher qu'il a **gagné et terminer**

#### Exercice pour les bosses 🏋️‍♂️🦁

**Objectif**: La pyramide de khéops

Sans utiliser de fichier HTML, lancer le fichier à l'aide de node
utiliez plusieurs boucles si besoin... 😉

Demander à l'utilisateur de saisir un nombre (minimum 4)
1. Construire une pyramide avec le nombre d'étage saisi à l'écran

Exemple :
Pour le nombre 4 -> Afficher à l'écran cette pyramide

```bash
      *
    * * *
  * * * * *
* * * * * * *
```

Pour le nombre 8 -> Afficher à l'écran cette pyramide

```bash
              *
            * * *
          * * * * *
        * * * * * * *
      * * * * * * * * *
    * * * * * * * * * * *
  * * * * * * * * * * * * *
* * * * * * * * * * * * * * * 
```

ECT ...


Une fois terminé, ajouter la correction: faire un commit de correction des exercice des conditions sur la branche "correction" et push le code sur le repository en ligne 🤓
