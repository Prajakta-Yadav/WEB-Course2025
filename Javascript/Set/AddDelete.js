let numbers = new Set([1,2,3,4,5]);

//add() method is used to add elements to a Set object
numbers.add(100)
numbers.add(200)
numbers.add(1)
numbers.add(78)
numbers.add(78)
console.log(numbers);

//delete() method is used to remove an element from a Set object
numbers.delete(100);
console.log(numbers);

set2.delete();
console.log("DELETE: ", set2);  //no delete any value

set2.delete(3);
console.log("DELETE: ", set2);  //delete argument value

set3.clear(4);
console.log("CLEAR: ", set3);  //clear whole set values

set3.clear();
console.log("CLEAR: ", set3); //clear whole set values

