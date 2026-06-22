console.log("Dom topic");

//selecting elements
//id selector
let abcd = document.getElementById("Abcd");
console.log(abcd);
//class selector
let x = document.getElementsByClassName("Abcd");

//querySelector
let y = document.querySelector("#Abcd");
//querySelectorAll
let All = document.querySelectorAll("Abcd");

//Text/Content access
let h1 = document.querySelector("#Abcd");
console.dir(h1);
h1.textContent = "Hello Amit";

//TextContent and innerText are have same work, Change inner text

//innerHTML Use to change the inner HTML
let z = document.querySelector("#Abcd");
console.dir(z);
z.innerHTML = "<i> Hello Amit</>";

//Attribute manipulation
//setAttribute
z.setAttribute("style","background-color: red");
//getAttribute return the attribute value
console.log(z.getAttribute("style"));
//removeAttribute
// z.removeAttribute("style");

// Daynamic DOM manipulation
// createElement
let h2 = document.createElement("h2");
h2.textContent = "My name is amit";
document.querySelector("div").append(h2);

//CSS upadate
h2.style.color = "red";
h2.classList.add("color");
//h2.classList.remove("color");

//toggle is agar class lagi hogi to hatadega or nhi hoga to laga dega
// h2.classList.toggle("color");


