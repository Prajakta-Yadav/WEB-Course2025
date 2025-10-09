let student = new Map([
    ["name", "John"],
    ["age", 20],
    ["city", "Pune"],
    ["pincode", 411057]    
])

//console.log(student);

for(let[key,value] of student){
    console.log(key, ":", value);
}

//forEach() method

student.forEach((key, value) => {
    console.log(key, ":", value);
})