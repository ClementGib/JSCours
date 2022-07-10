//EXERCICE 🎯 
//Pour chacun des block de code suivant, 
//remplace les "????" par ce que le programme va afficher à l'écran 🧐
// Essaye de trouver sans tricher ... 👮

//1 SIMPLE

chiffre = 10;
/// résultat: 10 🟢
console.log(chiffre);

chiffre = 20;
/// résultat: 20 🟢
console.log(chiffre);

/// résultat: 30 🟢
console.log(chiffre + 10);

/// résultat: 20 🟢
console.log(chiffre);

chiffre += 10;
/// résultat: 30 🟢
console.log(chiffre);

chiffre -= 10;
/// résultat: 20 🟢
console.log(chiffre);

chiffre *= 2;
/// résultat: 40 🟢
console.log(chiffre);

chiffre /= 2;
/// résultat: 20 🟢
console.log(chiffre);

chiffre %= 2;
/// résultat: 0 🟢
console.log(chiffre);

//2 ASSIGNATION

chiffre1 = 100;
chiffre2 = 50;
chiffre3 = chiffre1 + chiffre2;
/// résultat: 150 🟢
console.log(chiffre3);

chiffre3 -= chiffre2;
/// résultat: 100 🟢
console.log(chiffre3);

chiffre3 -= true;
/// réponse: jsp je dirais NaN ou un truc qui veut dire error  🔴
/// résultat: 99, true est compté comme un 1
console.log(chiffre3);

chiffre3 += true;
/// réponse: idem 🔴
/// résultat: 100, true est compté comme un 1
console.log(chiffre3);

mot1 = "EZ";
mot2 = "PZ";
/// résultat: EZ.PZ 🟢
console.log(mot1 + "." + mot2);

juste  = "True";
/// réponse: truefalse mais ca me parait bizzare ou alors un truc comme true + false et puisque le false est en dernier c'est lui qui prends le dessus 
/// résultat: Truefalse, les deux sont considéré comme un string
console.log(juste + false);

/// réponse: comme au dessus donc false qui prends le dessus maybe 🔴
// résultat: 1, considéré comme des nombre 1 + 0
console.log(true + false);

/// réponse: true 🔴
// résultat: 1, considéré comme des nombre 1 + 1
console.log(true + true);

// Alors oui il peut y avoir des trucs bizarre mais il faut essayer de comprendre Pourquoi
// Ca peut devenir très utile par la suite...

age = 18;
/// résultat: false 🟢
console.log(age > 18 );

/// résultat: true 🟢
console.log(age == 18 );

/// résultat: true 🟢
console.log(age == "18" );

/// résultat: false 🟢
console.log(age === "18" );

age = 60;
/// résultat: true 🟢
console.log(age > 18 && age >= 60);

/// résultat: true si j'ai bien compris le !age 🟢
console.log(!age != 60);


numero = 1.5;
/// résultat: true 🟢
console.log(numero > 1 && numero < 2);

numero = 1.5;
/// résultat: true 🟢
console.log(numero < 1 || numero < 2);


//🐯 BOSS LEVEL 🐯
annee = 2022;
age = 18;
annee == 2022 && (annee - age > 2000) ? "Gen Z 👶🏻" : "Millennials 🦄";
// résultat: "Gen Z 👶🏻"
// annee == 2022 -> true
// (annee - age > 2000) -> 2022 - 18 > 2000 -> true
// true && true -> true -> "Gen Z 👶🏻"
// si cetait false -> "Millennials 🦄"
console.log(annee);


console.log(`BRAVO, tu sera bientôt un pro de JavaScript 👏`);

