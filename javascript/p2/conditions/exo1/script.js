var nombre = prompt("veuillez entrer un nombre")
if(nombre%2 == 0){
    window.alert("votre nombre est pair")
}
else if (isNaN(nombre)){
    window.alert("ceci n\'\est pas un nombre")
}
else{
    window.alert("votre nombre est impair")
}