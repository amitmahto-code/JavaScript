let form = document.querySelector("form");
let naam = document.querySelector("#naam");
let hidden = document.querySelector("#hidden");
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(naam.value.length <= 2){
        hidden.style.display = "initial"
    }else{
        hidden.style.display = "none"

    };
});
// form.addEventListener("submit",function(event){
//     event.preventDefault(); 
//     const regex = /^[a-2A-Z0-9_] {3,20}$/;
//     // let ans = regex.test(event.value);
//     // console.log(ans);
// });