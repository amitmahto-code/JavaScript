let h1 = document.querySelector("h1");
window.addEventListener("keydown",function (val){
    if (val.key === " ") return h1.textContent = "Space";
    else return h1.textContent = val.key;
    
})