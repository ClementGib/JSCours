## Introduction Git <img src="/images/git.png" alt="cplusplus" width="50" height="50"/>
**On est sur un cours Javascript mais ici on va parler un peu de git, car c'est un outil vraiment génial que tous développeur doit maitriser! 😌** 

*Si vous étes ici, vous venez d'installer git et il doit fonctionner sur votre terminal. 👍*


**Ca à l'air bien mais j'ai pas bien compris comment ça marche... 😓**

Imaginons qu'on a une équipe de deux développeurs, les deux développeurs travaillent sur le même fichier HTML en parallèle qui est stocké sur le serveur de l'entreprise.
```html
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>

    <div class="main-content">
      <h1>Main content</h1>
      <p>This is some paragraph. </p>
    </div>
  </body>
</html>
```

Un des développeurs doit développer la partie `<header></header>` soit le bandeau de la page.
L'autre doit développer la partie `<footer></footer>` soit le bas de page.
```html
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>

    <header class="header">
    ...
    ...
    </header>


    <div class="main-content">
      <h1>Main content</h1>
      <p>This is some paragraph. </p>
    </div>

    <footer>
      ...
      ...
    </footer>

  </body>
</html>
```
<img src="/images/ui.png" alt="cplusplus" width="480" height="270"/>

* Si il développe en même temps sur le fichier stocké sur le serveur d'entreprise, ils vont se géner pour travailler et risquent de casser les fonctionnalités de l'autre développeur...
* Si il développe chacun sur une version locale qu'ils vont télécharger. Une fois terminé, ils vont déposer le fichier sur le serveur et c'est la dernière copie du fichier qui va écraser toute les modifications de l'autre développeur...

C'est pour ce genre de cas qu'on à inventé un outil comme Git qui est très facile à utilisé !



**Mmmh, donc git ? 🤔**

Donc Git est **système de contrôle de version** distribué. Ca signifie que chaque membre de l'équipe va avoir un stockage local de:
* tout le code source du projet 
* tout l'historique de modification du code
* tous les changements de chacun des développeurs

Ca s'appelle un **repository** et si vous avez bien suivi le cours JSCours est un repository. 🤯 <br>
Dans un repository toute les informations sont stockées dans un dossier caché des projets informatiques appelé `.git`.
Grace à l'outil `git` les développeurs vont travailler sur des branches indépendantes, une fois qu'il auront terminé leur travail sur leurs branches ils vont fusionner leur travail avec celui des autres sur une branche principale souvent appelé `master` qui va contenir le projet fonctionnel.
<img src="/images/gitwork.jpg" alt="cplusplus" width="960" height="540"/>

**Bon ok...😵 essayons git !**
1. Si vous voulez savoir comment utiliser git il y a cette commande
```shell
#avoir la documentation de git
git --help
```
*Bon si jamais, google c'est bien aussi!* 🦥


2. Essayez de télécharger le projet sur lequel vous étes depuis l'URL `https://github.com/ClementGib/JSCours`:
```shell
#télécharger un repository git depuis un URL
git clone <url>
```
3. Déplacez vous dans le répertoire `JSCours` avec la commande cd:
```shell
#aller dans un répertoire
cd <nom-du-repertoire>
```
4. Essayez les commandes git de base:
Si quelqu'un à modifié des choses sur le repository en ligne vous pouvez le vérifier
```shell
#récupérer l'historique des changements
git fetch -p
```

Si ça a bougé il vous faut la dernière version !
```shell
#récupérer les derniers changement de la branche actuelle
git pull
```

Bon ouvrons ça dans vscode maintenant
```shell
#ouvrir vscode dans le répertoire courant !
code .
```

Bravo vous étes désormait capable de cloner un repository et de récupérer les modifications si besoin! Tous ce qu'il faut pour commencer 😏 

📁 Une fois que vous avez fini vous pouvez aller dans le répertoire `javascript` à la racine du `repository` et allez dans la première partie appelé `p1` pour ensuite ouvrir le fichier `p1.md`. 📁
