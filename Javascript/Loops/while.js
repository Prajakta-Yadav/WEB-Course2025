//print 1 to 10 numbers

let i =1;
console.log("Print number 1 to 10"); 
while(i<=10){
    console.log(i);
    i++;
}

//Sum of digits
console.log("Sum of digits");
let num = 4789;
let sum =0;

while(num>0){
    sum += num% 10;
    num =Math.floor(num/10);
    console.log("Sum of Digits" +sum);
}

console.log("Sum of Digits: " +sum);

//Keep asking for a password until it correct

//let correctpwd = 8976;
//let attempts = [1111, 2222,8655,8976];

//console.log(attempts.includes(correctpwd) + "----- The password is: ---- " + correctpwd);


console.log("Keep asking for a password until it correct");

let correctpwd = 2222;
let attempt = "";
let tries =0;

let attempts = [1111, 2222,8655,8976];
let index =0;

while(attempt !== correctpwd){
    attempt = attempts[index];
    console.log("Trying:", attempt);
    tries++;
    index++;
}

console.log("Password accepted after", tries, "attempt(s)");
