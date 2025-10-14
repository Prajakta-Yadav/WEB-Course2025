// Set() is remove the duplicate values in array and return the unique values set. 

//let set1 = [355, 687, 85, 335, 242,687,234,355,85];

let uniqueset = new Set([355, 687, 85, 335, 242,687,234,355,85]);

console.log(uniqueset);

//Q2. Add new value, delete one value, and print final set
//add value

uniqueset.add(100);
console.log(uniqueset);

//delete value

uniqueset.delete(242);

//print final value
console.log(uniqueset);

// Q3 .has()
console.log(uniqueset.has(100));

console.log(uniqueset.has(1000));

// Q4 convert set to array 
let arr =[...uniqueset];
console.log("Array from Set:", arr);


//Q5 Find intersection of two sets

let set2 = new Set([1,2,3,4]);
let set3 = new Set([3,4,5,6]);

let intersection = new Set([...set2].filter(x => set3.has(x)));
console.log("Intersection is:", intersection);
