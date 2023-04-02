console.log("Full match, whole elements:");
let reLetters1 = new RegExp("bcd");
let reLetters2 = /bcd/;
console.log(reLetters1.test("abcdefg")); // true
console.log(reLetters2.test("abcdefg")); // true
console.log(reLetters1.test("abc")); // false
console.log(reLetters2.test("abc")); // false

console.log("Numbers match [some elements]:");
let reNumbers1 = /[0123456789]/;
let reNumbers2 = /[98765]/;
let reNumbers3 = /[1-9]/;
let reNumbers4 = /[11-20]/; // 1, 1 to 2 and 0
console.log(reNumbers1.test("in 1992")); // true
console.log(reNumbers2.test("in 2001")); // false
console.log(reNumbers3.test("in 2001")); // true
console.log(reNumbers4.test("in 9999")); // false

console.log("Specific symbol \\");//

console.log("Any digit char \d:");
console.log(/\d/.test("in 9999")); // true
console.log(/\d/.test("lol")); // false

console.log("Alpha numeric char \w:");
console.log(/\w/.test("9999 neuf neuf")); // true
console.log(/\w/.test(9999)); // true
console.log(/\w/.test("\\.!?")); // false

console.log("whitespace char \s:");
console.log(/\s/.test("Hello")); // false
console.log(/\s/.test("how are you ?")); // true

console.log("Non digit char \D:");
console.log(/\D/.test("UnUnUn")); // true
console.log(/\D/.test("111")); // false

console.log("Non alphanumeric char \W:");
console.log(/\W/.test("Hello")); // false
console.log(/\W/.test("how are you ?")); // true

console.log("Non whitespace char \S:");
console.log(/\S/.test(" ")); // false
console.log(/\S/.test("how are you ?")); // true

console.log("Any char not a newline \.:");
console.log(/./.test("\n")); // false
console.log(/./.test("\r?")); // true


console.log("Date regex:")
let reDateTime1 = /\d\d\W\d\d\W\d\d\d\d\s\d\d\W\d\d/; // Ou /\d\d-\d\d-\d\d\d\d \d\d:\d\d/
console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("01-30-2003 15:20")); // true

let reDateTime2 = /\d\d-\D\D\D-\d\d\d\d \d\d:\d\d/;
console.log(reDateTime2.test("30-jan-2003 15:20")); // true


console.log("Invert set of char:")
console.log(/[01]/.test("010101")); // true
console.log(/[^01]/.test("010201")); // true
console.log(/[A]/.test("ABCD")); // true
console.log(/[^A]/.test("AAAA")); // false

console.log("Repeate + (value excepted) and * (value could not appear):")
console.log(/\d+/.test("010101")); // true
console.log(/\d+/.test("AAAAA")); // false
console.log(/\d*/.test("123")); // true
console.log(/\d*/.test("AAAA")); // true
console.log(/boo+hoo+/i.test("Boohoooohoohooo")); // true
console.log(/boo+(hoo+)+/i.test("Boohoooohoohooo")); // true



console.log("Optional:")
console.log(/langu?age/.test("langage")); // true
console.log(/langu?age/.test("language")); // true

console.log("Number of time or range:")
console.log(/\d{4}/.test("12")); // false
console.log(/\d{4}/.test("1234")); // true
console.log(/\d{2,4}/.test("123")); // true
console.log(/\d{2,4}/.test("12345"));// true
console.log(/\d{4,}/.test("123"));// true
console.log(/\d{4,}/.test("12345"));// true


console.log("Matches and groups:")
console.log("Matches exec object:")
console.log(/\d/.exec("one and 1"));// found
console.log(/'([^']*)'/.exec("she said 'yes'"));// found all surrounded by simple cotes
console.log(/bad(ly)?/.exec("bad"));// found 
let groups = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec("1-30-2023");
console.log(groups);// found 
console.log(groups.length); // all groups
console.log("boudaries \\");// found
console.log(/\bchat\b/.test("conacatenate"));// found
console.log(/\\b/.test("conacatenate"));// found


console.log("Choise pattern");// found

