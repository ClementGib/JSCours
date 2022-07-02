## Git <img src="/images/git.png" alt="cplusplus" width="50" height="50"/>
**Ici on va parler un peu de git un outil vraiment génial que tous développeur doit maitriser! 😌** 

*Si vous étes ici, vous avez déja installé git et il doit fonctionner sur votre terminal.*


**Ca à l'air bien mais j'ai pas bien compris comment ça marche...😓**

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

Ca sappel un **repository** et toute les informations sont stockées dans un dossier caché des projets informatiques appelé `.git`.
Grace à `git` les développeurs vont travailler sur des branches indépendantes, une fois qu'il auront terminé leur travail sur leurs branche ils vont fusionner leur travail avec celui des autres sur une branche principale qui va contenir le projet fonctionnel souvent appelé `master`.
<img src="/images/gitwork.jpg" alt="cplusplus" width="960" height="540"/>

**Bon ok...😵 essayons git !**
1. Si vous voulez savoir comment utiliser git il y a cette commande
```shell
#avoir la documentation de git
git --help
```
*Bon google c'est bien aussi!*


2. Essayez de télécharger le projet sur lequel vous étes https://github.com/ClementGib/JSCours
```shell
#télécharger un repository git depuis son URL
git clone <url>
```

Si quelqu'un à modifié des choses sur le repository en ligne vous pouvez le vérifier
```shell
#récéuperer l'historique des changements
git fetch -p
```

Si ça à bougé il vous faut la dernière version !
```shell
#récupérer les derniers changement de la branche actuelle
git pull
```
