// //function declaration...
// function greet(name, surname){
//     console.log(`hello ${name} ${surname}!`);    
// }

// //function expression... Works as a variable!
// const speak = function(){
//     console.log("function expression");
// }; //requires a closing semi-colon


// greet("Talifhani", "Mulaudzi");

// speak();


// const claculateArea = function(radius){
//     
// };


// const area = claculateArea(5);
// // claculateArea(10);
// console.log(area);

//arrow functions
// const claculateArea = (radius) => {
//     return 3.14 * radius**2;
// } 

// console.log( claculateArea(5) );


// const calcSqureArea = (length) => {
//     return length**2;
// };

// console.log(calcSqureArea(10));

// const Hello = (name, age) => `${name} is ${age} years old`;

// console.log(Hello("Talifhani", 23));

// const greet = () => `Hello, world!`;
// console.log(greet())

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products[i] + products[i]*tax;
//     }

//     return total;
// }

// const price = bill([12.5,5,4,12,75,100.50], 0.15);
// console.log(price);


//foreach example of a callback function

let people = ["talifhani", "rilinde", "mulisa", "ambani", "whitney", "mashudu"];

// people.forEach((person, index) =>{
//     console.log(index, person);
// });

// const logPerson = (person, index) => {
//     console.log(`Index ${index}, Hello ${person}`);
// };

// people.forEach(logPerson); // defining the callback function 