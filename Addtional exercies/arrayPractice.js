console.log("Array practices set");

//create an array with 3 fruit and print the second fruit;
let fruitName = ['apple', 'banana', 'grapes'];
console.log(fruitName[1]);

//add "mango" at the end and "pineapple" at the beginning of this array
fruitName.push("Mango");
fruitName.unshift("Pineapple");

//Replae "banana" with "Kiwi" in the array above

fruitName[1] = "Kiwi";

//Insert "Red" and "Blue" at index 1 in this array;
let color = ["Green", "Yellow"];
color.splice(1,0,"Red","Blue"); 

//sort this array alphabetically and then reverse it;
let name = ["Zara", "Arjun", "Mira", "Bhavya"];
name.sort().reverse();

//Use .Map() to square each number:
let num = [1,2,3,14];
let squareNum = num.map(function(val){ return val*val});

//Use .filter() to keep number greater than 10
let newnum = num.filter(function(val){if(val >10) return true});
console.log(newnum);

//Use ,reduce() to finc the sum of this array;
let ab = [10,20,30];
let sum = ab.reduce(function (sum , val){
    return sum + val;
}, 0);

//use .find to get the first number less then 10
let array3 = [12,15,3,8,20];
let newArray4 = array3.find(function(val){return val < 10;});

// Destructure this array to get firstName and lastName
let fullName = ["Mahto","Amit"];
let [firstName,lastName] = fullName;

//merge two arrays using spread operator
let a = [1,2];
let b = [3,4];
let c = [...a,...b];