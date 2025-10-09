let student = new Map();

//set() => insert elements
student.set("name", "John");
student.set("age", 20);
student.set("isMarried", false);

console.log(student);
console.log(student.size);
console.log(student.has("name"));

//get() method is used to get the value of a key in a Map object

console.log(student.get("name")); // John
console.log(student.get("age")); // 20
console.log(student.get("isMarried")); // false