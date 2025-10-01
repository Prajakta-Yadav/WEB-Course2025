console.log("Javascript Array Inbuilt Methods - Assignments");
console.log("");
console.log("1");

// 1 create empty array and perform push operation 

let studentInfo = [];
studentInfo.push("Prajakta");
studentInfo.push("Prachi");
studentInfo.push("Pranali");
studentInfo.push("Shreya");
studentInfo.push("Dhanashri");

console.log(studentInfo);

// remove last element and print updated array

let updatedStudentInfo = studentInfo.pop();
console.log(updatedStudentInfo);
console.log(studentInfo);

console.log("");
console.log("2");

// 2 create an array of fruits. remove the first fruit using shift

let fruit = ["Apple", "Banana", "Pineapple", "Cherry", "Mango"];
console.log(fruit);
fruit.shift();
console.log(fruit);

//add a new fruit at the beginning using unshift().

fruit.unshift("Apple 23");
console.log(fruit);

console.log("");
console.log("3");

// 3. create an array of 10 numbers. extract the first 5 numbers using slice(). 

let numberArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(numberArray);

let slicednum = numberArray.slice(0,5);
console.log(slicednum);

//extract last 3 numbers

let lastslicednum = numberArray.slice(7, 10);
console.log(lastslicednum);

console.log("");
console.log("4");

// 4. create an 5 numbers array. remove the element at index 2 using splice.
console.log("Question 4 :");
console.log("remove the element at index 2 using splice.");

let fivenumArray = [10, 20, 30, 40, 50];
fivenumArray.splice(2, 1);
console.log(fivenumArray);

// Insert two numbers at index 1 using splice. 
console.log("Insert two numbers at index 1 using splice.");
fivenumArray.splice(1, 2, 99,88);
console.log(fivenumArray);

console.log("");
console.log("5");
//5. concatenate two arrays into a single array

console.log("concatenate two arrays into a single array");
let numset1 = [1, 2, 3];
let numset2 = [4, 5, 6];

let mergeArray = numset1.concat(numset2);
console.log(mergeArray);

// Concatenate an array of fruits and vegetables. 

console.log("Concatenate an array of fruits and vegetables.");
let fruitArray = ["Apple", "Banana", "Pineapple", "Cherry", "Mango"];
let vegetables = ["Potato", "Tomato", "Pumpking", "cabage"];

let concatArray = fruitArray.concat(vegetables);
console.log(concatArray);

console.log("");
console.log("6");
// 6 convert an array of characters ['J', 'S'] into a string "JS"

console.log("convert an array of characters ['J', 'S'] into a string JS");
let characters = ['H', 'T', 'M', 'L', 'J', 'S', 'C'];
let charString = characters.join("");
console.log(charString);

// create an array of words and join them with a space

let language = ["Java", "Python", "PhP", "Javascript"];
let joinArray = language.join("     "); 
console.log(joinArray);

console.log("");
console.log("7");

// 7 create an array of numbers and sort them in ascending order.
console.log("sort numbers ascending order:");
let numArray = [34, 67, 78, 348, 878, 335, 2342];

console.log("sort numbers: " + numArray.sort((a,b) => a-b));

// sort an array of strings alphabetically 
console.log("sort character alphabetically");
let charArray = ['a', 'b', 'c', 'k', 'z', 'q'];
console.log(charArray.sort());

console.log(charArray.includes('b'));

console.log(charArray.indexOf('c'));

console.log("sort String alphabetically");

let StringArray = ["Apple", "Banana", "Pineapple", "Cherry", "Mango"];
console.log(StringArray);
console.log(StringArray.sort());

console.log("");
console.log("8");

// 8. create an array and reverse it 

console.log("Reverse Array");

let ReverseArray = [1, 2, 3, 4, 5, 6];
console.log(ReverseArray.reverse());

// reverse an array of characters and join them into a string 

let reverseCharArray = ['a', 'b', 'c', 'k', 'z', 'q'];
let reversedString = reverseCharArray.reverse().join("");
console.log("reverse char: " + reverseCharArray.reverse());

console.log("REVERSE CHAR STRING: " + reversedString);

console.log("");
console.log("9");

// 9 create an array and use indexOf () to find the index

let Num1Array = [10, 20, 30, 40, 50]; 
console.log("Num1Array elements: " + Num1Array);
console.log("create an array and use indexOf (30) to find the index");

console.log(Num1Array.indexOf(30));

console.log("Check if 50 is present using includes");
console.log(Num1Array.includes(50));
