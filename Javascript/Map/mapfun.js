//set() method is used to add key-value pairs to a Map object
//has() method is used to check if a key exists in a Map object
//delete() method is used to remove a key-value pair from a Map object
/**
 * Map is a object function to store key value pair data 

let Student= new map() // function 

In map function we use
1. .set() => to insert key values pair in map object
2. .get() => to get the value of a key in a map object. 
3. .has() => to check if a key exists in a map object 
4. . delete () => to remove a key value pair from a map object. 
5. .size => return key pair values size.


If we return map () data using console.log() print statement they shown output in {} with key pair values

If we return map() data using forof or for each loop..they shown output 
In key pair values singel key value single line..
 */

let map = new Map();
console.log(map); // Map(0) {}

let student = new Map();
student.set("name", "John");
student.set("age", 20);
student.set("pincode", 411057);
console.log(student); // Map(3) { 'name' => 'John', 'age' => 20, 'pincode' => 411057 }

//has() method
console.log(student.has("name")); // true retuerns true
console.log(student.has("age")); // true
console.log(student.has("pincode"));  // true
console.log(student.has("address")); // false returns false

//delete 
student.delete("age");
console.log(student.has("age")); // false returns false
