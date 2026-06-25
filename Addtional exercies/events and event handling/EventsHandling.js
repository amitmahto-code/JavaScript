//Browser mein page par koi bhi harkat kro event raise ho jaayega
//Event matlab hota hai koi action hua
//Event listener ka matlab hai aapne koi action ka reaction diya 


//EventListener
//this action happen only single click 
let p = document.querySelector("p");
p.addEventListener("click",clk);

//doulble click

let pdbl = document.querySelector("p");
pdbl.addEventListener("dblclick",function(){
    pdbl.style.color = "green";
});

//Eventremove
// let clk = ()=>{p1.style.color = "black"};
function clk(){
    p1.style.color = "red";
}
let p1 = document.querySelector("p");
p.removeEventListener("click",clk);

//input
let inp = document.querySelector("input");
inp.addEventListener("input",function (dtl){
    if(dtl.data !== null) return console.log(dtl.data);
})

//change
//change event tab chalta hai jab aapka koi input select ya textarea mein koi change hojaaye 
let sel = document.querySelector("select");
let h1 = document.querySelector("#Head");
sel.addEventListener("change",function(dtl){
    // console.log(dtl);
    h1.textContent = `${dtl.target.value} Device selected`;
})

// mouseover and mouseout
let divAbcd = document.querySelector("#abcd");
divAbcd.addEventListener("mouseover",function(){
    divAbcd.style.backgroundColor = "yellow";
});
divAbcd.addEventListener("mouseout",function(){
    divAbcd.style.backgroundColor = "red";
});

window.addEventListener("mousemove",function(detls){
    divAbcd.style.top = detls.clientY + "px";
    divAbcd.style.left = detls.clientX + "px";
})

//event bubblig
// jispe event aayega agar uspar listener nahi hua to humaara event uske parent par listener dhundhega aur ais karte upar ki tarf move karega
let ul = document.querySelector("ul");
ul.addEventListener("click",function(event){
    event.target.classList.toggle("lt");
});