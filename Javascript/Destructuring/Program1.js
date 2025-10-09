/**
 *  Destructuring  is not destructive.
 * Destructuring does not change the original object. 
 * 
 */

//Array Destructuring 
// we can pick up array variables into our own variables. 

let arr = [10, 200, 30, 40, 50];
// we can break array in small parts
let [a,b,c,d,e] = arr;

/*
let arr1 = arr[0];
let arr2 = arr[1];
let arr3 = arr[2];
let arr4 = arr[3];
let arr5 = arr[4];
*/

console.log("Whole Array", arr);

console.log("Bites of Array", a);
console.log("Bites of Array", b);    
console.log("Bites of Array", c);

//String Destructuring 
//One use for Destructuring is unpacking string characters. 

let name = "W3Schools";

let [a1, a2, a3, a4, a5] = name;

console.log("Array1", a1);

// Object Destructuring
// The destructuring assignmnet syntax unpack object properties into variables: 
//It can also unpack arrays and any other iterables: 
//The order of the properties does not matter: 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50

};

// {firstName, lastName} = person;
//console.log(firstName + " " + lastName);
//console.log(person);

let {firstName, lastName, country ="US"} = person;
console.log(firstName + " " + lastName + " " + country);
console.log("Showing Whole object property using object name:");
console.log(person);
