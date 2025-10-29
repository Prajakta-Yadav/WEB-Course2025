//rest function parameter and reduce() method
//reduce() method is used to reduce an array to a single value by executing a reduce function on each element of the array.

//... is spread operator which is used to spread the elements of an array.

function add(...num){
    return num.reduce((total,num) => total + num, 0);
}

let ret = add(2,3,4,5);
console.log(ret); // 14 
