let myName = "Cherry";
const myAge = 18; // constant, cannot be changed
let myPhone = 1234567;
myPhone = 7654321;
let myArr = [1, 2, 3, 4, 5, 6];
let isHuman = true;

console.log("Hello World")
console.log(myName)
console.log(myAge)
console.log(myPhone)
console.log(myArr)
console.log(isHuman)

// Playing with numbers
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7; // power
let d = 123 % 45;
console.log(a, b, c, d);

// Don't need to import for random
let e = Math.random();
let f = Math.round(123.45678);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;

console.log(e, f, g, h)

// Playing with strings
let firstName = "Andrew";
let lastName = "Tay";
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length = " + nameLength)

let language = "Javascript"
console.log(language[0])
console.log(language.substring(2, 5));
console.log(language.toUpperCase());

// if... else
let age = 8;
if (age < 12) {
    console.log("Hello Kid!");
} else if (age <= 18) {
    console.log("Hello Teen!");
} else {
    console.log("Hello Adult!");
}

// for loop
let fruits = ["orange", "apple", "pear", "watermelon"];

for (let i = 0; i < fruits.length; i++){ // ++ like +=, -- like -=
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
console.log("Happy New Year!");

// Arrays
let nums = [123, 456, 789];
let schools = ["ASR", "RI", "EJC", "ACJC"];

console.log(schools[0]);
console.log(schools.length);
schools.push("NYJC");
schools.push("HCI");
console.log(schools);
schools.pop(); // gets rid of last item
console.log(schools)

// Objects (like dict in python)
let person = {
    name: "Jun Xiong",  // separate key-value pair with commas
    age: 17,
    isStudent: true
}
console.log(person["name"]);
console.log(person.name);

// Functions
function cube(x){
    return x ** 3;
}

console.log(cube(4))
