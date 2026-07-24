function CreateBisuits(name,price,qty,company,category){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}


let Bisuits1 = new CreateBisuits("Oreo",10,5,"Parle","regular");
let Bisuits2 = new CreateBisuits("Fantasy",20,2,"Parle","choclate-field");


// we learn that, ek blueprint bana do ki har object kaisa dikhega and hum log naye naye object with different values bana paayege,yahi upar upar se poora kaam hai OOPS mein

class CreatePencil{
    constructor(name,price,color,company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    
};
    write(text = this.name  ){
        let h1 =  document.createElement("h1");
        h1.style.color = this.color;
        h1.textContent = text;  
        document.body.appendChild(h1);
    }; 
}
let pencil1 =  new CreatePencil("Doms",10,"black","Doms");
let pencil2 =  new CreatePencil("Natraj",5,"red","Natraj");
