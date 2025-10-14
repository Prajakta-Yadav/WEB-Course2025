//Q6 Create a map with key value pairs of student name and marks
/*let StudentInfo = new Map([
    ["studentName", "Prajakta"],
    ["Marks", 456]

])

console.log(StudentInfo);
for(let[key,value] of StudentInfo){
    console.log(key, ":", value);
}

//Q6 add 3 entries, delete one , print .size

StudentInfo.set("StudentName", "Shreya");
StudentInfo.set("Marks", 499);

console.log(StudentInfo);

for(let[key,value] of StudentInfo){
    console.log(key, ":", value);
}

StudentInfo.set("StudentName", "Shreyas");
StudentInfo.set("Marks", 399);

console.log(StudentInfo);

for(let[key,value] of StudentInfo){
    console.log(key, ":", value);
}

console.log(StudentInfo.size);
console.log(StudentInfo.has("StudentName"));

StudentInfo.delete("StudentName");
console.log(StudentInfo.has("StudentName"));*/

let studentMarks = new Map();
studentMarks.set("Prajakta", 456);
studentMarks.set("Shreya", 499);
studentMarks.set("Shreyas", 399);

//console.log("Student Marks Map:", studentMarks);

//console.log("Size of Map:", studentMarks.size);

//Q7 Update marks of one student and print all entries using for...of loop
studentMarks.set("Shreya", 550);
studentMarks.set("Rohit", 600);
studentMarks.set("Anjali", 580);
studentMarks.set("Karan", 620);

console.log("Updated Student Marks Map:", studentMarks);

for(let [key, value] of studentMarks){
    console.log(key, ":", value);
}

console.log("Size of Map:", studentMarks.size);

//Q8 has() and delete()
console.log(studentMarks.has("Anjali"));    
console.log(studentMarks.has("Simran"));

studentMarks.delete("Anjali");
console.log(studentMarks.has("Anjali"));


//Q9 .get()
console.log("Marks of Rohit:", studentMarks.get("Rohit"));
console.log("Marks of Anjali:", studentMarks.get("Anjali"));

//Q 10 Merge two maps
let map1 = new Map([
    ["A", 1],
    ["B", 2]
]);

let map2 = new Map([
    ["C", 3],
    ["D", 4]
]);
let mergedMap = new Map([...map1, ...map2]);
console.log("Merged Map:", mergedMap);

//Q11 Array Destructuring
let arr = [10, 20, 30, 40, 50];
let [a, b, c, d, e] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let [num1, num2] = [200, 300, 500, 600];
console.log(num1, num2);

//Q12 Spread: merge two arrays
let mergedarray = [...[1, 2, 3],...[4, 5, 6]]; 
console.log("Merged Array:", mergedarray);

//Q13 Rest: function to find sum of all numbers
function sum(...numbers){
    let total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total;
}
console.log("Sum is:", sum(1,2,3,4,5));    

//Q14 Combine destructuring and rest
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(" First:", first);
console.log("Second:",second);
console.log("Rest:",rest);