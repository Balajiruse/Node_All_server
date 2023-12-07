console.log("hi");
const obj = {
    person : " balaji",
    frds : {
        person: " sakthi",
    },
};
// dot method 
console.log(obj.person);
console.log(obj.frds.person)

//map method 
console.log(obj["person"]);
console.log(obj["frds"]["person"]);

for (key in obj){
    console.log("keys: ", key);
    console.log(obj[key])
}


// basic carmaking object

const carobject ={
    name: "BMW",
    engin : "1 liter",
    seat : "leather",
    varient : " petrol",
    length : " above 4 meter",

    makewheel : function (){
        console.log("making wheels for thr car");
    },
    makechase : function()
    {
        console.log(" making chase of length",carobject.length);
    },

    startproduction : function()
    {
        carobject.makewheel();
        carobject.makechase();
    },
};
console.log(carobject);
carobject.startproduction();



//short hand property

const data1 = " sampledata";
const sampleobj ={
    data1,
};
console.log(" sample obj : " , sampleobj);


// factory method 
// returs Nan object

function manufacturecar ( name,engine,seat,variant)
{
    return {
        name,
        engine,
        seat,
        variant,
    
    startmanu : function ()
    {
        console.log(`
starting manufacturing ${name},
crating a engine of ${ engine} litter and variant ${variant},
craeting a body for ${name},
attaching seats of type ${seat},
complete the chase of car ${name}
        

`);

    },
};
}


const make = manufacturecar("bnm",1,"4 seat leather","petrol");
const make1 = manufacturecar("audi",1.5,'4 seat is leather',"disel");

console.log(make);
make.startmanu();
console.log(make1);
make1.startmanu();


// this keyword

const grfather ={
    houes : "grandfather",
    gethouse : function()
    {
        console.log(this.houes);
    },
get : function()
{
    console.log(this);
},

father :  {
    houes : " father",

    gethouse : function()
    {
        console.log(this.houes);

    },
    
    getdetails : function () {
        console.log(this);
    }
}

};

grfather.gethouse();
grfather.father.gethouse();
grfather.get();
grfather.father.getdetails();



// constructor funtion
// crates a object

function creatcar ( name,seat,engine,variante)
{
    this.name = name,
    this.seat =seat,
    this.engine = engine,
    this.variante = variante,
    this.power = engine*100,

    this.getcardetails = function()
    {
console.log(`
name of the car is ${this.name},
no of seat ${this.seat},
engine capacity ${this.engine},
variant of the car is ${this.variante},
horse power is ${this.power} BHP

`);
    };
}
const past = new creatcar("audi",4,1.5,"petrol");
console.log(past);
past.getcardetails();


function ManfuctureCar(name, seat, engine, variant) {
    this.name = name;
    this.seat = seat;
    this.engine = engine;
    this.variant = variant;
    this.power = engine * 100;
    this.getCarDetails = function () {
      console.log(`
        Name of the car is ${this.name}
        No of seats ${this.seat}
        Engine capacity ${this.engine} liter
        Variant of the car is  ${this.variant} 
        Horse power is ${this.power}BHP
      `);
    };
  }
  
  const passat = new ManfuctureCar("passat", 4, 2, "petrol");
  console.log(passat);
  passat.getCarDetails();


  // creats o obj manufatcure
  // this ={}
  // this.name =name
  // { name : " passat"}




// class
// 4 millars
// encapsulation -> ablitity to define a date with methods
// inheritance
// abstaction
// polymorphism
// class in js


class carprodication {
    // encapsulation
    constructor ( name, color,fuel, enginecapacity)
    {
        this.name = name;
        this.color = color;
        this.fuel = fuel;
        this.enginecapacity = enginecapacity;

    }
    // businnes logic or methods



    getDetails () { 
    console.log (`

    name :${this.name}
    color :${this.color}
    fuel_ type : ${this.fuel}
    enginecapacity : ${this.enginecapacity}
    `);
}
getspecial()
{
    console.log(`special details are ${this.fuel} emgine`);
}
}

// inheritance
class Feature extends carprodication {
    constructor(
        name,
        color,
        fuel,
        enginecapacity,
        safety,
        model,
        seattype,
        type
    )
    {
        super(name,color,fuel,enginecapacity)
        this.safety= safety;
        this.model = model;
        this.type = type;
        this.seattype = seattype;
    }
// getter method
get safety () {
    return this._safety;
}

// setter  method
set safety (newstarrating)
{
    if(newstarrating<0) {
    console.log("error : star rating cannot be less than 0");
    } else if (newstarrating> 5)
    {
        console.log("error : star rating cannot be grater than 5")
    } else {
        this._safety = newstarrating;
    }
}
    grtcarfeature () {
        // abstration
        let bhp = (this.enginecapacity*100) / 1.8
        console.log(`
        star ratings : ${this._safety}
        model : ${ this.model}
        seat : ${this.seattype} seats
        car-bodt type : ${this.type}
        BHP : ${bhp.toFixed(1)} BHP
        `);
    }



// polymorphism
getspecial()
{
    console.log(`special details are ${this.seattype} seat`);
}
}

const car1 = new carprodication ( " polo","red","diesel",1.5);
const car2 = new carprodication ( "tigun","gray","petrol",4);
console.log(car1);
car1.getDetails();
console.log(car2);
car2.getDetails();


const car3 = new Feature (
    "jetta",
    "lava blue",
    "petrol",
    4,
    5,
    "topline",
    'suv',

)
console.log(car3);
car3.getDetails();
car3.bhp=400; /// cannot do this 
car3.grtcarfeature();


console.log(car3.safety);
car3.safety= -1;
car3.safety= 4;
console.log(car3.safety);
car3.getspecial();
