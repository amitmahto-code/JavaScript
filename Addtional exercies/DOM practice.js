//T1- select the heading of a page by id and change its text to "Welcome to sheryians"
let heading = document.querySelector("#heading");
heading.textContent = "Welcome to sheryians!"

//T2- Select all <li> elements and print their text using a loop
let tagLi = document.querySelectorAll("li");
for(let i = 0; i < tagLi.length; i++){
    console.log(tagLi[i].textContent);
}



//T3- Select a paragraph and replace its content with:
// <b>Updated</b> by JavaScript
let p = document.querySelector("p");
p.innerHTML = "<b>Updated</b> by JavaScript";

//how do you get the src of an image using JavaScript?
let img = document.querySelector("img");
// two way to set src of image 
console.log(img.src); // 1st way
console.log(img.getAttribute("src"));

// T-4 Select a link and update its href to point to https://google.com;
let link = document.querySelector("a");
link.href = "https://www.google.com/";

//T-5 Add a litle attribute to a div dynamically.
let title = document.querySelector("#title");
title.setAttribute("title","ram");

//T-6 Remove the disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

//create a new list item <li>New Task </li> anf add it to end of a <ul>
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New task";
ul.appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div
let div = document.querySelector("#photo");
let img2 = document.createElement("img");
img2.setAttribute("src","myntra_logo.webp");
img2.classList.add("myntra");
div.prepend(img2);

//Select the first item in a list and delete it from the dom
let list = document.querySelector("ul");
let li1 = document.querySelector("li");
list.removeChild(li1);

//Add a highlisht class to every even item in a list
let items = document.querySelectorAll("li");

for (let i = 1; i < items.length; i = i + 2) {
    items[i].classList.add("highlight");
}

// advenced level salution
// let all = document.querySelectorAll("ul li:nth-child(2n)");
// all.forEach(function (val){val.classList.add("highlight")});

// set the font size of all <p> elements to 18px using.style
let pp = document.querySelectorAll("p");
pp.forEach(function(element){
    element.style.fontSize = "18px";
});

