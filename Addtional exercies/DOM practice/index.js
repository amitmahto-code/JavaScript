let toggleBtn = document.querySelector("#toggleBtn");
let box = document.querySelector("#box");
toggleBtn.addEventListener("click",function(){
    if(toggleBtn.textContent === "Hide"){
        box.style.display = "none";
        toggleBtn.textContent = "Show";
    }else{
        box.style.display = "initial";
        toggleBtn.textContent = "Hide";
    }

});
let minus = document.querySelector("#minus");
let count = document.querySelector("#count");
let plus = document.querySelector("#plus");

minus.addEventListener("click",function(){
    if(Number(count.textContent) > 0){
        count.textContent -= 1;
    }
});
plus.addEventListener("click",function(){
    count.textContent = Number(count.textContent) + 1;

});

let pass =  document.querySelector("#password");
let msg = document.querySelector("#message");
pass.addEventListener("input",function(event){
    if(event.target.value.length < 8 ){
        msg.textContent = "Password too short";
        
    }else {
        msg.textContent = "Password looks good";
    }
    
});

let text = document.querySelector("#text");
let msg1 = document.querySelector("#msg");
text.addEventListener("input",function(event){
    if(event.target.value.length > 20){
        msg1.textContent = "Character limit exceeded";
    }else{

        msg1.textContent = `${event.target.value.length} / 20`;
    }
});

let password = document.querySelector("#passsword");
let toggle = document.querySelector("#toggle");

toggle.addEventListener("click", function(){

    if(password.type === "password"){

        password.type = "text";
        toggle.textContent = "Hide";

    } else {

        password.type = "password";
        toggle.textContent = "Show";

    }

});

let start = document.querySelector("#start");
let counts = document.querySelector("#counts");


start.addEventListener("click",function(){
    let time = setInterval(() => {
        if(Number(counts.textContent) > 0){
            counts.textContent = Number(counts.textContent) - 1;
        }else{
            clearInterval(time);
        }
    }, 1000);    
})


setInterval(function(){
    let newdate = new Date();
    document.querySelector("#clock").textContent = `${newdate.getHours()}:${newdate.getMinutes()}:${newdate.getSeconds()}`;
},1000);

let box1 = document.querySelector("#box1");
let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

let count1 = document.querySelector("#count1");
let st = document.querySelector("#st");
let stop = document.querySelector("#stop");
let timer;
st.addEventListener("click",function(){
    timer = setInterval(() => {
        count1.textContent =Number(count1.textContent) + 1;
    }, 100);
});

stop.addEventListener("click",function(){
    clearInterval(timer);
})

let srt = document.querySelector("#srt");
let stp = document.querySelector("#stp");
let reset = document.querySelector("#reset");
let p = document.querySelector("#time");

let time = null;

srt.addEventListener("click", function(){

    if(time !== null) return;

    time = setInterval(() => {
        p.textContent = Number(p.textContent) + 1;
    }, 1000);

});

stp.addEventListener("click", function(){

    clearInterval(time);
    time = null;

});

reset.addEventListener("click", function(){

    clearInterval(time);
    time = null;

    p.textContent = 0;

}); 