let obj = {name: "Harry", 
    age: 25,
    city:"Pune"
}

let i;
    for(i in obj){
        console.log(i,"=", obj[i]);
    }

console.log("print array using for in loop:");
let numArray = [10, 20, 30, 40];
for(let num in numArray){
    console.log("Index", num, "value", numArray[num]);
}

console.log("Array Terminated");
