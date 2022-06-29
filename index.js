//1. Comments can make code readable
//2. Welcome to 30DaysOfJavascript
/* 3. Comments can make code readable, easy to reuse and informative */

//4. Variable declaration

let first_name = 'Halimot'
let boolean = true
let age = 20
let empty = null
let undefine;

//5. Knowing the typeof the above variable declaration

console.log(typeof first_name);
console.log(typeof boolean);
console.log(typeof age);
console.log(typeof empty);
console.log(typeof undefine);

// 6. Declaring four variables without assigning values.
let nothing;
let nope;
let none;
let opps;

// 7. Declaring four variables with assigned values.

let firstName = 'Halimot';
let lastName = 'Ajose';
let maritalStatus = 'Single';
let country = 'Nigeria';
let city = 'Lagos';
let agE = 30;

console.log(firstName, lastName, maritalStatus, country, city, agE);


let myAge = age;
let yourAge = agE;
console.log(`I am ${myAge} years old. \n You are ${yourAge} years old. `);

// DAY 2 Data Types
// Primitive data types: there are immutable (non-modifiable) data, it can't be modified
/* 1. Numbers, 2. Strings, 3. Booleans 4.Null, 5. Undefined, 6. Symbol
 */

// comparing values. to compare values we use double assignment operators(==), this will return boolean values, i.e true or false.

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo);

let js = 'JaaScript'
let py = 'Python'

console.log(js == py);

let newPy = js
console.log(js == newPy);

let lightOn = true
let lightOff = false

console.log(lightOff == lightOn);


// Non Primitive data types: there are mutable(modifiable) data, it can be modified. i.e it can change. its values cannot be compared. there are reference data
/*1. Onjects, 2. Arrays */

// ARRAYS: the elements/values are written in a square bracket. 

let num = [1, 2, 3];
let numbers = new Array(1, 2, 3)

console.log(num == numbers);

// OBJECTS: the elements/values are sritten in a curly bracket.

let userOne = {
   name: 'Halimot',
   role: 'Learning',
   country: 'Nigeria',
}
let userTwo = {
   name: 'Halimot',
   role: 'Learning',
   country: 'Nigeria',
}

console.log(userOne == userTwo);

userOne = userTwo
console.log(userOne == userTwo);
// METHODS
// 1. tolowercase method
// 2. toupercase method
// 3. substr method
// 4. substring method
// 5. split method
// 6. trim method
// 7. includes method
// 8. replace method
// 9. charcodeAt method
// 10. charat method
// 11. index0f method
// 12. lastindex0f method
// 13. concat method
// 14. startswith method
// 15. endswith method
// 16. search method
// 17. match method
// 18. repeat method


// EXERCISES DAY 2
//  1 & 2 declaring value and logging it out in console

const welcome = '30 Days Of JavaScript'

console.log(welcome);

// 3  printing the length oif the value
console.log(welcome.length);

// 4 changing the strng to uppercase

console.log(welcome.toUpperCase());

// 5

console.log(welcome.toLowerCase());

// 6

console.log(welcome.substr(0, 2))
console.log(welcome.substring(0, 3))

// 7

console.log(welcome.substring(3));

// 8

console.log(welcome.includes('Script'));

// 9

console.log(welcome.split(','));

// 10

console.log(welcome.split(' '));

// 11

let socilMedia = 'Facebook, Google, Microsoft, IBM< Apple, Oracle, Amazon'
console.log(socilMedia.split(','));

// 12

console.log(welcome.replace('JavaScript', 'Python'));

// 13 & 14

console.log(welcome.charAt(15));
console.log(welcome.charCodeAt('J'));

// 15

// console.log(welcome);

console.log(welcome.indexOf('J'));


// 16

console.log(welcome.lastIndexOf("t"));


// 17

const sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'));

// 18
console.log(sentence.lastIndexOf('because'));


// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.search('love'))          // 2
// console.log(string.search(/javascript/gi))  // 7

// 19
console.log(sentence.search('because'));

console.log(sentence.search(/because/gi));

// 20

let welcome2 = ' 30 Days Of JavaScript ';

console.log(welcome2.trim());

// 21

console.log(welcome.startsWith(30));

// 22

console.log(welcome.endsWith('t'));

// 23

console.log(welcome.match(/a/gi));

// 24

let smal1 = "30 Days of"
let smal2 = 'Javascript'

console.log(smal1.concat(smal2));

// 25

console.log(welcome.repeat(2).split(' '));


// Level 2

// 1

let quote = "Love is no exercise better for the heart than reaching down and lifthing people up"
let john = 'John Holmes'
console.log(`The qoute '${quote}' by ${john} teaches us to help one another.`);

let mother = 'Mother Teresa:'
let quote_2 = ` The qoute by ${mother} 'Love is not patronising and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.`

console.log(quote_2);

// 3

let nums = '10'
// let numb = 10

console.log(parseInt(nums));
console.log(typeof nums);


// 4

let parse = '9.8'

console.log(Math.round(parseFloat(parse)));

// 5

let jag = 'jargon, python'

console.log(jag.includes('on'));

// 6
let jag2 = 'I hope this course is not full of jargon.'

console.log(jag2.includes('jargon'));

// 7

console.log(Math.floor(Math.random() * 101));

// 8

console.log(Math.floor(Math.random(50) * 101));

// 9
console.log(Math.floor(Math.random() * 225));

// 10

let java = 'JavaScript'

// console.log(Math.floor(Math.random() * java));

// 11

console.log('1\t 1\t 1\t 1\t 1');
console.log('2\t 1\t 2\t 4\t 8');
console.log('3\t 1\t 3\t 9\t 27');
console.log('4\t 1\t 4\t 16\t 64');
console.log('5 \t 1\t 5\t 25\t 125');

// 12

let set2 = sentence.substr(31, 23);

console.log(set2)

// LEVEL 3

// 1

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

console.log(love.match(/love/gi));

// 2

console.log(sentence.match(/because/gi));


const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// console.log(sentence2.match(/%@&#;$?!/gi));

// 4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let money = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let allnum = money.match(/\d+/gi);

let inte = allnum.toLocaleString()

let realnum = inte;

console.log();