let obj = {name: "Harry", 
    age: 25,
    marks: 456
}

let i;
    for(i in obj){
        console.log(i,"=", obj[i]);
    }


//create nested object

let student ={
    name: "Rohan Das",
    age: 26,
    address: {
        city:"Pune",
        pincode: 411057
    }

};

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