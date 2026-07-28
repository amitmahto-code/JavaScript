let users = [
    {
        name: "amisha rathor",
        pic: "https://i.pinimg.com/736x/51/3a/89/513a8929e1db83d31d6e6b1c239d1aa0.jpg",
        bio: "outfit check that person stand and clicking pic by another phone some saw and smile"
    },
    {
        name: "riya sharma",
        pic: "https://i.pinimg.com/736x/c4/b5/59/c4b559ca36da5e1bae6dc1ae62bd5dc6.jpg",
        bio: "casual street style look with confident pose and trendy fashion vibes"
    },
    {
        name: "priya verma",
        pic: "https://i.pinimg.com/736x/6f/aa/85/6faa8525e06915d299412b88d3c44c4e.jpg",
        bio: "enjoying a sunny day while showing a simple and elegant outfit"
    },
    {
        name: "ananya singh",
        pic: "https://i.pinimg.com/736x/d0/75/8e/d0758e062d3c7ab112a8993cb9dc45e3.jpg",
        bio: "fashion inspired picture with relaxed pose and aesthetic background"
    },
    {
        name: "kavya patel",
        pic: "https://i.pinimg.com/736x/71/92/0a/71920a442239640eaa92fcd90becbe1b.jpg",
        bio: "modern outfit and natural expression captured during an outdoor walk"
    },
    {
        name: "neha gupta",
        pic: "https://i.pinimg.com/736x/71/92/0a/71920a442239640eaa92fcd90becbe1b.jpg",
        bio: "minimal fashion look with confident smile and stylish appearance"
    },
    {
        name: "isha mehta",
        pic: "https://i.pinimg.com/1200x/27/4f/93/274f93e28415b39a3c397687c0c4767f.jpg",
        bio: "capturing a memorable moment with trendy outfit and positive energy"
    }
];


function showUser(arr){
    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        const content = document.createElement("div");
        content.classList.add("content");

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;


        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);

    })
}
 
showUser(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
    let newUser = users.filter((user) => {
        return user.name.startsWith(inp.value);
    });

    if (newUser.length > 0) {
        document.querySelector(".cards").innerHTML = "";
        showUser(newUser);
    } else {
        document.querySelector(".cards").innerHTML = "<h1>User not found</h1>";
    }
});