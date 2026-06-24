console.log("Object topic");

let obj = {
    name : "Mahto Amit",
    age : 25,
    year : "sy",
}

let fullName = "name";
console.log(obj[fullName]);

const user = {
    name : "Harsh",
    address : {
        city : "Bhopal",
        pin : 124956,
        location :{
            lat : 22.7,
            lng : 34.86,
        },
    },
};

// desturcuture 
let {lat,lng} = user.address.location;

//for-in loop

let role = "Admin";
let objj = {
    name : "Amit",
    age : 20,
    email : "amit@gmail.com",
    address : {
        taluka : "palsana",
        pin : 358903,
    },
    [role] : "Amit",
}

for( let key in objj){
    console.log(key , objj[key]);
} 

//optional chanining that if the key not exisist that not rise error  
console.log(objj?.addreses?.taluka);

