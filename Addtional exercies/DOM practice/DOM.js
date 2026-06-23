let h1 = document.querySelector("#title");
h1.textContent = "Welcome Amit";

let p = document.querySelector("#para");
p.style.color = "red";
p.style.backgroundColor = "yellow";

let div = document.querySelector("#box");
div.style.width = "200px";
div.style.height = "200px";
div.style.background = "blue";
div.style.color = "white";

let btn = document.querySelector("#btn");
btn.addEventListener("click",function(){
    btn.textContent = "clicked";
    btn.style.backgroundColor = "red"
});
let togglebtn = document.querySelector("#toggleBtn");
let text = document.querySelector("#text");
togglebtn.addEventListener("click",function(){
    if(text.textContent === "OFF"){ 
        text.textContent = "ON";
    }else{
        text.textContent = "OFF";
    }
});
let inp = document.querySelector("#inp");
let addbtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
inp.addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        if(inp.value.trim() === "") return;
        let li = document.createElement("li");
        li.textContent = inp.value; 
        

        let delbtn = document.createElement("button");
        delbtn.textContent = "Delete"
        li.appendChild(delbtn);
        list.appendChild(li);

        delbtn.addEventListener("click",function(event){
            event.stopPropagation();
            li.remove();
        })

        li.addEventListener("click",function(){
            this.classList.toggle("completed");
        })
        delbtn.style.margin = "5px"

        inp.value = "";
        
    }
})
addbtn.addEventListener("click",function(){
    if(inp.value.trim() === "") return;
    let li = document.createElement("li");
    li.textContent = inp.value; 
    

    let delbtn = document.createElement("button");
    delbtn.textContent = "Delete"
    li.appendChild(delbtn);
    list.appendChild(li);

    delbtn.addEventListener("click",function(event){
        event.stopPropagation();
        li.remove();
    })

    li.addEventListener("click",function(){
        this.classList.toggle("completed");
    })
    delbtn.style.margin = "5px"

    inp.value = "";
});

let text1 = document.querySelector("#text1");
let p2 = document.querySelector("#count");
text1.addEventListener("input",function(){
    p2.textContent = text1.value.length;
});


let colors = document.querySelector("#colors");
colors.addEventListener("change",function(event){
    document.body.style.backgroundColor = event.target.value;
    
});

let form = document.querySelector("#form");
let input = document.querySelector("#name");
let sbtn = document.querySelector("#sbtn")
form.addEventListener("submit",function(event){
    event.preventDefault();  
    if(input.value.trim() === ""){
        alert("Information required");
        return;
    }
    input.value = "";
});

let list1 = document.querySelector("#list1");
list1.addEventListener("click",function(event){
    console.log(event.target.textContent);
});
