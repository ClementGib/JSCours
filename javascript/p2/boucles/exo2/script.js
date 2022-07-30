var nom = prompt ("veuillez entrer votre nom")
var voyelle = ["a","e","i","o","u","y"]
var change = ""
for(let v=0;v<nom.length;v++){
    if(nom[v] === "a"){
        change += nom[v].toUpperCase()
    }
    else if (nom[v] === "e"){
        change += nom[v].toUpperCase()
    }
    else if (nom[v] === "i"){
        change += nom[v].toUpperCase()
    }
    else if (nom[v] === "o"){
        change += nom[v].toUpperCase()
    }
    else if (nom[v] === "u"){
        change += nom[v].toUpperCase()
    }
    else if (nom[v] === "y"){
        change += nom[v].toUpperCase()
    }
    else{
        change += nom[v].toLowerCase()
    }
}
console.log(change)