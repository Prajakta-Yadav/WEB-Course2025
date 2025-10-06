//1 Create object and print key value pairs using for in loop
console.log("Object key value pairs using for in loop:");
let Car = {
    brand : "BMW",
    model : "X5",
    year : 2020
}   
for(let key in Car){
    console.log(key, "=", Car[key]);
}

//2 nested object
// Define a nested object
let student ={
    name: "Rohan Das",
    age: 26,
    address: {
        city:"Pune",
        pincode: 411057
    }

};

console.log("");
console.log("Nested Object key value pairs using for in loop:");  
console.log("student details");
for(let key in student){
   
    if(typeof student[key] !== 'object'){
        
        console.log(key, "=", student[key]);
    }else{
        console.log("student address details. inner loop");
        for(let innerkey in student[key]){
            
            console.log(innerkey, "=", student[key][innerkey]);
        }
    }
}

//3 array using for in loop
console.log("Array using for in loop:");
let colors = ["Red", "Green", "Blue", "Yellow"];    
for(let index in colors){
    console.log("Index", index, "Value", colors[index]);
}   