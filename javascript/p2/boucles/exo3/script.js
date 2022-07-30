var number = prompt("entre un nombre entre 1 et 10");
var x = Math.floor((Math.random() *10) +1);
while(x != number){
    number++;
    number = prompt("tu es trompe recommence")
    if (x==number){
        console.log("tu as reussi a trouver le nombre")
    }else{
        console.log("perdu")
    }
}