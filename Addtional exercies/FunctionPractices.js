console.log("Practice set of function");

//convert this in arrow function
let multiply = (a,b) => {
    return a * b;
}

//Use rest parameter to accept any number of scores and return the total
function scoresSum(...sum){
    let totalSum = 0;
    for(let i = 0; i<sum.length; i++){
        totalSum += sum[i];
    }
   return totalSum;
} 
console.log( scoresSum(1,2,3,4,5));

// fix the function with early return 
function checkAge(age){
    if(age < 18) return "Too young" ;
    return "Allowed" ;    
}
console.log(checkAge(23));

// Can you assign a function to a variable and then call it show how
let v1 = function(){
    console.log('hello');
}
v1();

function ab(val){
    val();
}
ab(function(){console.log("inside a function")}); 

// write a BMI calculator

function bmi(weight,height){
    return weight / (height*height);
}
console.log(bmi(50,1.7).toFixed(2)); // toFixed is method after point how much number see

// discounter calculator
function discounterCalculator(discount){
    return function(price){
        return price - price * (discount / 100);
    }
}
let discount = discounterCalculator(10);
console.log(discount(200)); 