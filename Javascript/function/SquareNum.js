function square(num){
    return num*num;
}

console.log(square(20));

//function name = argument    condition 
let squarenum = (num) => num*num;

console.log(squarenum(30));
squarenum(40); // no output

//IIFE => Immediately Invoked Function Expression
(function(num){
    console.log(num*num);
})(50);

//IIFE with return
let sqr = (function(num){
    return num*num;
})(60);

console.log(sqr);

//IIFE with return and arrow function
console.log(((num) => num*num)(70)); 

let sqr1 = ((num) => num*num)(80);
console.log(sqr1);  

//function name = argument    condition 
let squarenum1 = num => num*num;    
console.log(squarenum1(90));

squarenum1(100); // no output
console.log(squarenum1(100)); //output
