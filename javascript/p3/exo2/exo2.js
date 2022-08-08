// Calculatrice de l'exo2 des conditions

// do {
//     let input = prompt("0")
// } while(input != "exit")



// var nombre1 = prompt("entrez le premier nombre")
// if(isNaN(nombre1)){
//     window.alert(nombre1 + " " + "n\'\est pas un nombre")
// }
// var operateur = prompt("entrez un operateur")
// var nombre2 = prompt("entrez le deuxieme nombre")
// if(isNaN(nombre2)){
//     window.alert(nombre2 + " " + "n\'\est pas un nombre")
// }
// switch(operateur){
//     case '+':
//     window.alert(parseInt(nombre1)+parseInt(nombre2))
//     break;
//     case '-':
//     window.alert(nombre1-nombre2)
//     break;
//     case 'x':
//     window.alert(nombre1*nombre2)
//     break;
//     case '/':
//     window.alert(nombre1/nombre2)
// }


function display(value) {
    document.getElementById("result").value += value;
}
