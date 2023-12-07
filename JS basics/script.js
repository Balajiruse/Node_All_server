// Basic of language 
// line breaker // not necessary
// comment out line

console.log(" first line");
//console.log(" second line");

// creation of variable
// syntax -> variable keyword variablename = value
var a = 15;
console.log(a);

// declaring a variable
var b;
b=30;
console.log(b);


// differt types of variable declaration
// var
//let
//const

//var



k=40;      // we can resign a value
var k =45; // we can redeclare
console.log(k);


// let

let ab =50;
ab=55;  // we can reassign a value

//let ab =60 ;  we cannot redeclartion
console.log(ab);

//const
//camlecasing
//elehant casing all caps

const studentname = "bala";
// we cannot re assign
//we connat redeclare

console.log(studentname);

// data type 
// primtive 

// string -> " "or''
// boolean -> true or flase
// Number -> 012345
// null -
// undefined
// float 88.90

// non primtive 
// array
// object

//string
//const name =" balaa";
//const name1 =" kiran";

// console.log(name , name1);

// null 
// let value =null; // nothing
// console.log(value);

//undefined
// let value2;
// console.log(value2);

//let samplevalue = null;
// consloe.log(samplevaluve);
// samplevalue =55;
// console.log(samplevalue);

// array
const arr =[ 0 , "sanjay" ,true, null ,88.90];
console.log(arr);
// acccesing array a index
console.log(arr[1]);

//  object
const sampleObj ={
    name2 : "balaji",
    education : " mca",
    age : 23 ,
}
 console.log(sampleObj);
 // accesing object index

 console.log(sampleObj.age);
console.log("-------------------------------------------------------");


// operators
//loops
//conditions
//function with return keyword
// inbuild functions

console.log("operators");
// opertor
// two differnt values comapre and a result
// arthimetic opertors
// + - * / % ++ --

let val1 =90;
let val2 =100;

console.log("add :",val1+val2);
console.log("sub : ",val1-val2);
console.log("div :",val1/val2);
console.log("mul :",val1*val2);
console.log("remindre :",val1%val2);

console.log("before inc val1 :",val1);
val1++;
console.log("after inc :", val1);

console.log("before dec val1 :",val1);
val1--;
console.log("after dec val1 :",val1    );

console.log("----------------------------");

console.log(" assigment opertor");
 console.log(val1);
 val1 +=50; // val1 = val1 +50 // -= ,*=, /=, %=
console.log(val1);
console.log("---------------------------");

console.log(" comparison opertors");
const comval1 = 10;
const comval2 = 10;

console.log(" non strict comaprison :" ,comval1 == comval2);
console.log(" strict comparison :", comval1 == comval2);
console.log("Not Equal :" , comval1 !== comval2);
console.log(" Not Equal comaprision :", comval1 !== comval2);
console.log("greater than :" ,val1 > val2);
console.log("lesser than equal :", val1 < val2);

const eqlVal =10;
const eqlVal2 =10;
console.log("greater than equal :" , eqlVal >= eqlVal2);
console.log("lesser than eqaul :", eqlVal2 <= eqlVal2);

// logical operators
console.log("-----------------------------------------------")
console.log(" logical opertors");
// && || !

const task =80;
const attendence = 75;
const score = 77;

console.log(score > task && score > attendence);
console.log(score > task || score > attendence);
console.log(!(score > task && score > attendence));
console.log(!(score > task || score > attendence));

//loop

console.log("--------------------------------------");
 console.log( "forloop");

// let i ( variable ) = 0, 0 1 2 3 4 
// value update agum
// day = 1 -> day <= (true) , day++ = 2
// day = 2 -> day <= (true) , day++ = 3
// day = 3 -> day <= (true) , day++ = 4
// day = 4 -> day <= (true) , day++ = 5
// day = 5 -> day <= (true) , day++ = 6
// day = 6 -> day <= (flase) , 

for (let day= 1; day<= 5; day++) {

console.log(" buyed mike for day ",day);
}
 
for (let day= 1; day>= 5; day--) {

    console.log(" buyed mike for day ",day);
    }
     

    // conditions 

    console.log("--------------------------------");
    console.log(" conditions");


    let average = 35;
    let good = 60;
    let excellence =90;

    let yourmark =80;

    if (yourmark >= excellence)
    {
        console.log("you are excellent");
    }
else if (yourmark>= good)
{
    console.log("you scored good mark");
}
else if(yourmark>=average)
{
    console.log( " you have just passed");

}else{
    console.log("you have failed");
}

// switch case (result)

console.log( " switch case");
const day = 6;

switch(day)
{

case 1:
    console.log(" sunday");
    break;

    case 2:
        console.log(" monday");
        break;

        case 3:
    console.log(" thusday");
    break;

    case 4:
    console.log(" wednesday");
    break;

    case 5:
    console.log(" thursday");
    break;

    case 6:
    console.log(" friday");
    break;

    case 7:
    console.log(" saturday");
    break;
default:
    console.log("you have not enterd a date")
}

// function with returm keyword
// function funtionname(){
// logic of a function
//}

function pedal(){
    console.log(" move the cycle forward");

}

function handlebar()
    {
        console.log(" move the cycle to a direction");
    }
 // call function
 pedal();
 handlebar();


 // ex1

 function add()
 {
    console.log(5+7);
 }
 add()

 //ex2

 function add1( num1,num2 )
 {
    console.log(num1+num2);

 }
 function sub( num1, num2){
    console.log(num1-num2);
 }
 function mul( num1, num2){
    console.log(num1*num2);
 }
 add1(5,8)
 sub(8,9)
 mul(8,9)

 function calulator( type,num1,num2)
 {
    switch(type)
    {
        case "add":
            return num1+num2;
            case "sub":
                return num1-num2;
                case "mul":
                    return num1 *num2;

                    default:
                    return " please check you inputs";
    }
 }

const result = calulator( "add",7,8);
console.log(result);

function mulp(num,mul)
{
    for(i=1;i<=mul;i++)
    {

    console.log( num *i + " ");
    
}
}

// windows global object

var d=88;
var name="balaji";
console.log(window)
console.log(window.name);
console.log(window.d);

var bb={name:"balajiruse"};
console.log(window.document);
console.log(window.bb);


let obj1={name: "objecte"};

let obj2=obj1;
obj2.name="ruse";
console.log(obj1);
console.log(obj2);


function greetm (name1)
{
    return `hey ${name1} welcome to guvi`
}
function funcExecuteGreetFuc(fn,arg)
{
    console.log(fn(arg));
}
 funcExecuteGreetFuc(greetm,"balaji");


 /// function deepcomparsion (obj1,obj2)
 //check for object type
 // null
// object key

//example


 const demoobj = {
name : " balaji",
age : 5,    
};
console.log(Object.keys(demoobj));
console.log(Object.values(demoobj));
console.log(Object.entries(demoobj));

// Declare an array of numbers
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (var i = 0; i < arr1.length; i++) {
  // Check if the current element is odd by using the modulo operator
  if (arr1[i] % 2  !== 0) {
    // Print the odd element
    console.log(arr1[i]);
  }}






