
// setTimeout()
setTimeout(function(){
    console.log("heyyy");
},5000);

// setInterval()
// setInterval(function(){
//     console.log("hello World");
// },5000);//this function continue print after 5s

// clearTimeout();
let time = setTimeout(() => {
   console.log("Happy"); 
}, 3000);
clearTimeout(time);

// clearInterval()
let tm = setInterval(() => {
    console.log("heyyy");
}, 3000);
clearInterval(tm);

// count number 10 to 1
let count = 10;
let cs = setInterval(function(){
    if(count >= 1){
        console.log(count);
        count--;
    }else{
        clearInterval(cs);
    }
},1000);

let ptext = document.querySelector("#percentText");
let progress = document.querySelector("#progressBar");
let num = 1;
let h2 = document.querySelector("h2");

let intv = setInterval(function(){
    if(num <= 99){
        num++;
        progress.style.width = `${num}%`;
        ptext.textContent = `${num}%`;
    }else{
        h2.textContent = "Downloaded.";
        clearInterval(intv);
    }
},30);
setTimeout(() => {
    document.querySelector(".glass").style.display = "none";
},3000);
