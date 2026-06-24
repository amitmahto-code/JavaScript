console.log("Practice set of object");

// Create an object for a student with name, age, and isEnrolled
let student = {
    name : "Amit",
    age : 28,
    isEnrolled : true,
}

//Can an object key be a number or boolean?
const obj1 = {
    true : "yes",
    42  : "Answer",
}
console.log(obj1.true);
console.log(obj1[42]);

//Access the value of "first-name" from this object
const user1 = {
    "first-name" : "Amit",

};
console.log(user1["first-name"]);

//Given a dynamic key let kay = "Age",how will you access user[key]?
let key = "age";
const user2 = {
    age : 36,
}
console.log(user2[key]);

// from the object below, print the latitude;
const locations = {
    city : "Bhopal",
    coordinates : {
        lat : 23.45,
        lng : 99.56,
    },

}
console.log(locations?.coordinates?.lat);

//destructure the key "fist-name" as a variable called firstName

const user3 ={
    "first-name" : "Ram",
};

let firstName = user3["first-name"];

//Use for-in to log all keys in this object:
const course = {
    title : "JavaScript",
    duration : "4 weeks",
};
for( let key in course){
    console.log([key]);
};
//Use object.entries() to print all key-value pairs as:
//title : JavaScript
Object.entries(course).forEach(function (val){
    console.log(val[0] + ": " + val[1]);
});

//Deep clone the obj1 safely
const obj2 = {info: {score: 80},};
let newObj = JSON.parse(JSON.stringify(obj2)); 