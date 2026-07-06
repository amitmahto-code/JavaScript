// localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga

// sessionStorage -> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gya

// cookies -> ye bhi data store karta hai and aapka data browser ke cookies naam ki property mein save hota hai and ye cookie concept kam data ya light data ke liye hota hai 

// localStorage
// setItem -> localStorage me save karne ke liye 
localStorage.setItem("name","harshita");
// getItem
let name = localStorage.getItem("name");
console.log(name);
// removeitem
localStorage.removeItem("name");

// sessionStorage same property as localstorage
// sessionStorage.setItem()
// sessionStorage.getItem()
// sessionStorage.removeItem()

// in localstorage we can't store array,object that store in string but if you want to store use JSON.stringify
localStorage.setItem("name",JSON.stringify(["AMIT","GAURAV","SUMIT"]));
// if you want to actualy from that string use JESO.PARS
let friend = JSON.parse(localStorage.getItem("name"));
console.log(friend);