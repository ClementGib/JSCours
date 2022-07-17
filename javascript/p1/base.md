#### Commentaires ✍️:
- On peut mettre des commentaires dans le code:
```javascript
// Bonjour ceci est un commentaire
```

- Tous les commentaires ne seront pas exécuté, ici le message `console.log()` ne sera pas affiché:
```javascript
// console.log("Hello");
```

- Il y a différent moyen de mettre des commentaires:
```javascript
// Commentaire sur une ligne

/* Commentaire sur une ligne */

/* Commentaire
sur plusieurs
lignes */
```

- Il est possible de mettre un commentaire après le code sur la même ligne
```javascript
console.log("Vive les frites"); // Va afficher "Vive les frites" 🥔
```

#### Variables 🗃️:

- Les variables permettent de stocker des valeur:
```javascript
var numero = 10;
```

- Les variables doivent avoir un nom que vous allez choisir celon ce que vous voulez y mettre à l'intérieur:
```javascript
var age = 18;
var pays = "Belgique"
```

- Il existe plusieurs types de variable en JavaScript (on verra plus en détail):
    - **var** : cycle de vie long 
    - **let** : cycle de vie court
    - **const** : constante définissable qu'une fois
```javascript
let niveau = 99;
var vivant = true;
const planete = "Terre";
```

- Par défaut une variable sans le mot clé *var*, *let*, *const* est une variable **var**
```javascript
//var par défaut
nombre = 1000;
```

- On peut définir une variable sans lui donner de valeur et ensuite la définir encore et encore (sauf les const):
```javascript
var prenom;
prenom = "Paul";
prenom = "Pierre";

let nom;
nom = "Martin";
nom = "Lelouche";

// ERREUR constante
const dateDeNaissance;

const paysDeNaissance = "Belgique";
//ERREUR constante
paysDeNaissance = "France";
```


- Les variables peuvent être de plusieurs type (il en existe 8 mais voyons plus importants):

| Type      | Description | Examples   |
| :---        |    :----:   |          ---: |
| `Number`      | nombres de tous types: entiers et décimaux      | `1`, `66`, `10.5`, `499.99`   |
| `Boolean`   | type logique avec deux valeurs possible      | `True`, `False`   |
| `String`  | chaine de caractères contenu entre simple ou double quotes ( '' "" )    | `"Tanguy"`, `'Fromage'` `"123456789"`, `'A'`, `"Harry Potter"`, `"@#~èù*"` |
| `Undefined`   | Un type pour les variables qui ne sont pas défini     | `undefined`   |
| `Null`   | type qui représente la valeur 0, un contenu sans donnée   | `null`   |

- Les variable en JavaScript ont un type dynamic, elle peuvent donc changer de type celon ce que vous allez y mettre dedans:
```javascript
// type number
var valeur = 18;

// type string
valeur = "18";

// type boolean
valeur = false;
```


- Les variable peuvent prendre le contenu d'une autre variable:
```javascript
var age = 18;

// autre va avoir la valeur 18
var autre = age;

const annee = 2022;
// anneeDeNaissance va avoir la valeur 2004 🧒
var anneeDeNaissance = annee - age;

```


#### Opérateurs 🧮:

Il existe différents types d'opérateur.

##### Arithmetic operators:

| Opérateur      | Description | Example |
| :---        |    :----:   |          ---: |
| `+`      | additionne des valeurs       | `20 + 2` // va donner 22   |
| `-`   | soustrait des valeurs        | `10-5` // va donner 5     |
| `*`   | multiplie des valeurs        | `3*4` // va donner 12     |
| `/`   | divise des valeurs        | `3/2` // va donner 1     |
| `%`   | divise des valeurs et garde juste le reste        | `3%2` // il va rester 1 après la division     |
| `++`  | incrémente une valeur        | `age++` // va ajouter 1 à l'age   (+1)  |
| `--`  | décrémente une valeur        | `pointDeVie--` //va retirer 1 à l'age (-1)    |

##### Comparison operators:

| Opérateur      | Description | Example |
| :---        |    :----:   |          ---: |
| `==`     | compare deux égalitées    | `age == 18` // vérifie que l'age est bien égale à 18  |
| `===`   | Vérifie deux égalitées avec le type      | `age === 18` // va vérifier que age est bien égale à 18 et à le même type (`age === "18"` va donner False)  |
| `!=`  | Vérifie qu'il est différent        | `age != 60;` // va vérifier que tu as pas 60 ans...👵   |
| `>`  | Vérifie que la valeur de gauche est supérieur       | `age > 18` // age supérieur à 18    |
| `<` | Vérifie que la valeur de gauche est inférieur        | `age < 18` // age inférieur à 18   |
| `>=`   | Vérifie que la valeur de gauche est supérieur ou égale     | `age >= 18` supérieur ou égale à 18   |
| `<=`   | Vérifie que la valeur de gauche est inférieur ou égale        | `age <= 18` inférieur ou égale à 18  |


##### Assignment operators:

| Opérateur      | Description | Example |
| :---        |    :----:   |          ---: |
| `=`     | assigne la valeur de droite       | `age = 20;` // va assigner 20 à age   |
| `+=`   | ajoute la valeur de droite      | `age += 5;` // va ajouter 5 à l'age actuel ( 20 + 5)  |
| `-=`  | retire la valeur de droite         | `age -= 3;` // va retirer 3 à l'age actuel ( 25 - 3)    |
| `*=`  | va multiplier par la valeur de droite       | `age *= 2` // multiplie par 2 ( 22 * 2)     |
| `/=`  | va diviser par la valeur de droite        | `age /= 2` // divise par 2 ( 44 / 2)     |
| `%=`   | va diviser par le nombre de droite et assigner le reste de la division        | `age %= 5` (22%5 soit un reste de 2)   |


##### Logical operators:

| Opérateur      | Description | Example |
| :---        |    :----:   |          ---: |
| `&& `    | ET ou AND operator il permet de vérifier plusieurs condition...     | `age > 18 && age < 60` // si l'age est supérieur à 18ans et inférieur à 60ans pour avoir un accès par exemple |
| <code>\|\|</code> | OU ou OR operator, il permet de vérifier l'une ou l'autre condition    | `age <= 8 && age >= 60` // si l'age est inférieur ou égal à 8ans et supérieur ou égale à 60ans pour avoir une réduction par exemple...   |
| `!`  | NOT ou N'EST PAS, il permet de vérifier l'inverse     | `boolean dead = false; !dead` // pour vérifier qu'il n'est pas mort par exemple...   |

##### Ternary operators:

Un operateur moins important mais très utilisé en javascript donc bon à savoir:
` ? : ;` soit `<condition> ? <valeur1> : <valeur2>`
```javascript
var nombre1 = 10;
var nombre1 = 5;

// <condition> ? <valeur1> : <valeur2>;
var nombre3 = nombre1 > nombre2 ? nombre1 : nombre2; // valeur de c va être 10

// <condition> ? <valeur1> : <valeur2>;
var nombre4 = nombre1 > nombre2 ? nombre2 : nombre1; // valeur de d va être 5


```


Ok ça fait beaucoup de blablabla 😴
Mais avec ça tu va bientot pouvoir faire des trucs cool ✨
Va vérifier que ta bien compris en réalisant le petit exercice du fichier `variable.js` 
Une fois terminé vous allez `git push` la correction sur une branche appelé **correction**, retournez dans le fichier `introduction-git.md` du répertoire `git` pour plus d'informations.
