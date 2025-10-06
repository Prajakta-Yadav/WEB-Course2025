// 1 create an array of student names and print them using loop. 
console.log("print student names using loop");
let studentInfo = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun"];
for(let i=0; i<studentInfo.length; i++){
    console.log(studentInfo[i]);
}   

//second array 
let num =[10,30,60,89,"Maths",'J'];

for(let i=0; i<num.length;i++){
    console.log(num[i]);
}

//2 find maximum number from an array.
console.log("find maximum number from an array.");
let num1 =[578,976,457,246,9765];

let max =Math.max(...num1);
console.log("Maximum number: " + max);

//3 remove duplicate values in array.
console.log("remove duplicate values in array.");

let numArray = [56,78,43,77,23,90,77, 78,54,23];
console.log(numArray);

let setArray = [...new Set(numArray)]; // here ... is called spread operator. it is used to expand the elements of an array. convert array to set and then again convert set to array.
console.log("remove duplicate values in array: ", setArray);
