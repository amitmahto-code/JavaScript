console.log("Function topic");

// function types
//function decalration
function print(){
    console.log("hello world");
}
print();

//function expression
let pt = function (){
    console.log("Hello world"); 
}

//fat arrow function
let printt = ()=>{
    console.log("Hello world");
}

//default perameter
function sum(v1 = 0,v2 = 0){
    console.log(v1+v2);
}
sum(); 

//rest perameter
function xyz(...v1){
    console.log(v1);
}
xyz(1,2,3,4,5,6,7,8,9,9);

//first  class function -> function ko value ki tarah treat karna
function abcd(val){
    val();
}
abcd(function(){console.log('hello');})

//high value function -> wo function hota hai jo ki return kare function ya fir accept kare ek function ape perameter mein

function aa(){
    return function(){
        console.log("hello world");
    }
}
aa()();  // first small bracket 1st function ke liye second wala return function ko chalane ke liye 

//closure -> ek function jo return kare ek aur function aur return hone waala function humesha use karega parent function ko koi variable

function closure(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

//IIFE(Immediately invoked function expression)
(function(){
    console.log('Hello Amit');
}) ();


