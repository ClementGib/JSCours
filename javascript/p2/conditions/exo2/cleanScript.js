let nombre1 = 0;
let nombre2 = 0;

do {
  nombre1 = parseInt(prompt('entrez le premier nombre'));
} while (nombre1 == '' || isNaN(nombre1))

do {
    var operateur = prompt('entrez un operateur')
} while (operateur == '')


do {
  nombre2 = parseInt(prompt('entrez le second nombre'));
} while (nombre2 == '' || isNaN(nombre2))

var result = 0
switch (operateur) {
  case '+':
    result = nombre1 + nombre2
    break
  case '-':
    result = nombre1 + nombre2
    break
  case 'x':
    result = nombre1 + nombre2
    break
  case '/':
    result = nombre1 + nombre2
    break
  default:
    result = operateur + " n'est pas un operateur!"
    break
}

window.alert(result)
