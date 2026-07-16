// This keyword special keyword hai, kyuki jaise ki baaki saare keyword ki value ya unko same rehta hai this ki value ya nature badal jaata hai is baat se ki aap usey kaha youse kar rahe ho

// global this value
console.log(this);

// in function value
function abcd(){
    console.log(this);
}

// in method
let obj = {
    name : "Amit",
    age : 24,
    serName: function(){
        console.log(this);
    }
}
obj.serName();

// EVENT handler
document.querySelector("h1").addEventListener("click",function(){
    console.log(this);
});


// this ki value
// -------------------------------------------
// global - window
// function - window
// method with es5 fnc - object
// method with es6 arrow function fnc - window
// es5 function inside es5 method - window
// arroe function inside es6 method - object
// event handler - element 
// class - blank object

// call

let obj1 = {
    name : "amit",
    age : 34
}

function xyz(){
    console.log(this);
}
xyz.call(obj1);

// apply
let obj2 = {
    name : "amit",
    age : 34
}

function xyz1(a,b,c){
    console.log(this);
}
// apply methos only take to perameter 
xyz1.apply(obj2,[1,2,3]);


// bind
let obj3 = {
    name : "amit",
    age : 34
}

function xyz2(a,b,c){
    console.log(this);
}
// bind method maket new function, that method not run it retur new function with this keyword replace 
let fnc = xyz2.bind(obj3,[1,2,3]);
fnc(); 
