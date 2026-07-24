let form = document.querySelector("form");
let userName = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userMassage = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
     },
    submitForm: function (e) {
        e.preventDefault();
        this.addfrom();
        
    },
    addfrom : function(){
        this.users.push({
            userName : userName.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value
        });
        form.reset();

    },
    renderUi : function(){},
    removeUser : function(){},

}

userMassage.init()