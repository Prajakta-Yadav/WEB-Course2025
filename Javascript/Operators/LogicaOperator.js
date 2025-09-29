let a = true;
let b = false;

console.log(a && b);

console.log(a || b); 

console.log(a != b); 

console.log(!a); //false bcz a is true
console.log(!b); 

console.log(5 > 2 && 10 > 5);

console.log(5 > 2 || 10 > 5);

console.log(5 > 2 != 10 > 5);

/**
 * Nullish Coalescing(??) 
 * Returns the right-hand value if the left-hand side is null or undefined. 
 */

let name = null;
let username = name ?? "Guest";
console.log(username);


let Lastname = "Yadav";
let Lastusername = Lastname ?? "Guest";
console.log(Lastusername);

/**
 * && 
 * if the first value is falsy, it returns that value immediately.
 * if the first value is truthy. it returns the second value.
 * 
 * ||
 * 
 * first truthy value (or last falsy if none truthy)
 * 
 * both  they don't return all values, they only return one value based on th logic. 
 */

console.log("Hello" && "World");
console.log(0 || "Default");