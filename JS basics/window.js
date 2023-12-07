// object will be of 
// key and value
// key -> var name
// value -> any data type

const testwindow={
    a:20,
    sampleobj:{
        key:"value",
    },
};
//console.log(testwindow.a);
//console.log(testwindow.sampleobj.key);

var a=15;
var sampleobj={
    name:"balajiruse",
};
//alert("hey kasini");
console.log(window);
console.log(testwindow);

// introduction to array
// Array and JSON iteration
// XMLHttpRequest
// Hoisting & scope

const arr=[4,"string",true,[0,2,"s"],{a:"aaa"}];
console.log(arr);
//lookup [0]
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3][2]);
console.log(arr[4].a);


// json iterations

//javascript object notations
//key : value

const jsondata ={
    string: "balaji",
    number: 7,
    array:[1,2,{obje:"nestedvalue"}],
    objec:{
        batch:1,
        name:"balaji",
        stack:["javascript","html","css"]},


itsud: true,
};
console.log(jsondata);
console.log(jsondata.array[2].obje);
console.log(jsondata.objec.stack);
console.log(jsondata.objec);
console.log(jsondata.itsud);


const samarr=[1,2,3,4];
  console.log("before",samarr);
  //push
  samarr.push(5);

  console.log("after", samarr);


  console.log("before",samarr);
  //pop last elements remove
  samarr.pop();

  console.log("after", samarr);

  console.log("before",samarr);
  //unshift first add
  samarr.unshift(0);

  console.log("after", samarr);


  console.log("before",samarr);
  //shift last fisrt remove
  samarr.shift();

  console.log("after", samarr);




  const obj1={
    age: 5,
    name: "balaji",
};
const obj2={
name :"balaji",
age :5,
};

console.log(JSON.stringify(obj1)===JSON.stringify(obj2));


let xml=new XMLHttpRequest;
console.log(xml);
xml.open("GET","https://restcountries.com/v3.1/all");
xml.send();
xml.onload= function (){
    const data =JSON.parse(xml.response);
    console.log(data);
    console.log(xml.status);
    for(let i=0;i<data.length;i++)
{
    console.log(`NAME : ${data[i].name.common}
    
FLAG : ${data[i].flags.png}  
population : ${data[i].population}
regions : ${data[i].region}
sub region : ${data[i].subregion}
`);
    
}
};

name1();
function name1()
{
    console.log("bala");
}



