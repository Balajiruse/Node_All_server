console.log("es6 modules");

// var let const

// recap
// redeclartion - not possiable range
// const a=15;
// const a= 20
// console.log(a);

//let b = 15;
//let b=25;
//console.log(b); // not possiable range


//  possiable range
// var c = 13;
 //var c = 15;
 // console.log(c);


 //re intialization
// not possible range 
// const a= 15;
// a =20;
//console.log(a);


// possible range 

 let a=25;
 a =30;
 console.log(a);

 var d=25;
 d=30;
 console.log(a);


 // regarding hoisting 

// console.log(c);
 //const c =15    is let and const hoisted or not


 // pername // 1000 // debug
 // pername // 1500

 // let pername = "name" // 2000

 // block scope 

 if( true)
 {
    var block = 30;
    console.log(block)
 }

 console.log(block);



 if( true)
 {
    var outblock = 45;
    if (true)
    // console.log(InBlock) // not accesible
    {
        let inBlock = 40;
        console.log(outblock)
    }
 }

 function scopingfunc()
 {
    let funcvar = 20;
    if(true)
    {
        console.log(funcvar);
    }
 }
 scopingfunc();

 // shadowing property


 if(true)
 {
    const shadow ="sx";
    if(true)
    {
        const shadow =" xy";
        console.log("xy block :", shadow );
    }
    console.log("sx block :", shadow);
 }

// templet iterlation
const name1 = " balaji";
const position = " mentor";
console.log(`my name is ${name1} and iam a ${position}`);


// spread operator

let fruititems = [ "mango","papaya","orange"];
let vegitems = [ "potato", "onion","brinjal"];

let dairyitems =["milk","chcolate","icecreams"];

let fridgeTray =[ " carrot" , " cucumber",...fruititems,...vegitems,...dairyitems];

console.log(fridgeTray);

// rest operator

const [value1,value2,value3,...rest] = fridgeTray;
console.log(value1);
console.log(value2);
console.log(value3);
console.log(rest);


// Destructuring

// we can destruture obj and array

// Array Destructuring

const studentarray =[ " balaji","maha"," harish","siva"];


console.log(" before destructuring............................................")

// before destructuring
console.log(studentarray[0]);
console.log(studentarray[1]);
console.log(studentarray[2]);
console.log(studentarray[3]);

console.log("after destructuring...................................................")
const [stu1,stu2,stu3,stu4] = studentarray
// after destructuring
console.log(stu1);
console.log(stu2);
console.log(stu3);
console.log(stu4);


// skipping values

console.log(" skipping  valuess................................")

const [stud,stud1]=studentarray;
console.log(stud);
console.log(stud1);



const week =[ 1,2,3,4];
const [firstweek,secondweek,...restweek]=week;
console.log(firstweek);
console.log(secondweek);
console.log(restweek);

// nested destructuring

const [restparam1,restparam2]= restweek;
console.log(restparam1)



// task 

const tesrarray =[1,2,5,7,["kasini","15"],6,];
const [, , , , [name3,age]]=tesrarray
console.log(name3)
console.log(age);




// object destructuring

const personobj ={

   firstname: "kasini",
   lastname: " balaji",
   pos :" wife",
   location1: "chennai",
   address:{
      state : "tamil nadu",
      country : "india",
   },
};
console.log("before destructuring..................")

console.log(personobj.firstname);
console.log(personobj.lastname);
console.log(personobj.pos);


console.log("after destructuring...........................")
const {firstname,lastname,pos}=personobj
console.log(firstname);
console.log(lastname);
console.log(pos);

console.log("renaming the object............");

const {location1 : city} =personobj;
console.log(city);


//nested object 

const { address :{ state,country}}=personobj;
console.log(state);
console.log(country);







