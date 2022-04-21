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
const claculateArea = (radius) => {
    return 3.14 * radius**2;
} 

console.log( claculateArea(5) );


const calcSqureArea = (length) => {
    return length**2;
};

console.log(calcSqureArea(10));

const Hello = (name, age) => {
    return `${name} is ${age} years old`;
};

console.log(Hello("Talifhani", 23));