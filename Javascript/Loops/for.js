//Print numbers from 1 to 10 

console.log("Print numbers from 1 to 10 ");
for(let i=1; i<=10;i++){
    console.log(i);
}

// print only even numbers from 1 to 20 let  evennum =10;
console.log("Print only even numbers from 1 to 20 ");
for(let i=1; i<=20; i++){
    if(i %2 ==0){
        console.log(i);
    }
}

// Star Pattern 
console.log("Star Pattern:");
let rows = 4;
for(let i=0;i<=rows;i++){
    let star = "";
    for(let j=0;j<=i;j++){
        star += "*";
        }
        console.log(star);
        
    }



console.log("Print array number:")

let number = [10,20,30,40,50];

for(let i=0; i<number.length; i++){
    console.log(number[i]);
}   

console.log("Print 100 table");
//table of 100
let num = 100;
for(let i=1; i<=10; i++){
    console.log(num + " * " + i + " = " + (num*i));
}   

let  evennum =10;
for(let i=1; i<=10; i++){
    if(i %2 ==0){
        console.log(i);
    }
}

let i = "Hello";

console.log("In outer loop of value i", i);
