//this is printing the statement in the console
console.log('hello console'); 


//variables


let name = "Cody"; 
console.log(name); 

// variables cant be reseved keywords
// should be meaningful name
// cannot start with a number
// cannot cotain a space or hyphen
// are case sensitive 

let firstname = "Cody"; 
let lastname = "Leporini"; 
console.log(firstname, lastname)


//constants

let interestRate = .3; 
//interestRate = 1; 
console.log(interestRate)

//let name = "Cody"; //String literal
let age = 30; //Number literal 
let isApproved = false; // Boolean literal

console.log(name, age, isApproved);

let firstName = undefined; //leave it undefined as we might want to input it later
let selectedColor = null; // leave null so that when a user puts input, the variable will change


// Dynamic language 

typeof name; 
name = 1 ;
typeof name; 
//there are lots of types
//to find the type, use the call, typeof

//say you wanted to make a item that has more than one feature
//this example will show you how to describe myself in two ways 

//first method (independent assigns)

let Name = "Cody"; 
let Age = 20; 

//second method (all in one) 

let person = { 
name: "Cody", 
age: 20

} ; 

// Dot notation

person.name = "Alex"; 
console.log(person.name); 

//bracket notation

person['name'] = 'Mary' ; 
console.log(person.name); 

console.log(person) ; 
//this is a more clean way define a single object


//arrays

let selectedColors = ['red', 'blue'];
selectedColors[2] = "green"; 
selectedColors[3] = 2; 
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);



//functions


//preforming a task

function greet(NAME, LAstname)  {
    console.log('Hello '+ NAME +' ' +LAstname);  
}

greet("Cody" , "Leporini"); 
greet("Kayla", "Schoenbeck"); 



//calculating a value

function square(number){ 
    return number * number; 
}

let number = square(2); 
console.log(number);
console.log(square(3));

