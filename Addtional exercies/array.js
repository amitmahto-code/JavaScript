console.log("Array topic");

let arr = [1,2,3,4,5,6];

// foreach loop access all element in array one by one
arr.forEach(function (val){ console.log(val)});

//map
// map srif tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par
//map dikhte hi saath maan mein ek blank array bana liya kro
let newArr1 = arr.map(function(val){return 12;});
console.log(newArr1); 
// filter same as map but it return boolen value,if value true then it make newArray 
let newArr2 = arr.filter(function (val){
    if (val > 4) return true;
})
console.log(newArr2); 

// reduce
let newArr3 = arr.reduce(function(accumlator ,val){
    return accumlator + val;
}, 0);
 
// spread operator
let array = [1,2,3,4,56,];
let array1 = [...array];

//destructing 
let array2 = [1,2,3,4,5];
let [a,b, ,c] = array2;
console.log(a,b,c);
