// function 
// verb

function funname() {
    console.log("statement1");
    console.log("statement2");
    console.log("statement3");
    console.log("statement4");

}
funname();


b();
// function declartion
function b()
{
    var b=25;
    console.log(b);
}

// javascript function first citizen

function sayname()
{

    console.log("balaji");
}
sayname();

//1
function saymy (name)
// parameter name
{
    console.log(`hi ${name} nice knowing you`);
}
saymy("ruse");  ///  ruse arguments

//2
function par(name1,name2)
{
    console.log(`hi ${name1} and ${name2} pretty boy`);
}
par("balaji","kasini")

//3
const groot = function(age)
{
    console.log("hii kasimni");
}

groot();

//4
const age =function ()
{
    return 35;
}
console.log(age);


function myname (fn)
{
    return fn;
}
console.log(myname(age));


//5

function returnmyname (name)
{
    return name;

}
const myname1= returnmyname("balaji");

console.log(myname);

//6

function myage(age)
{
    return age;
}
console.log(myage(25));



function exe ( fu ,arg)
{
    console.log(fu (arg));
}
exe(myage,23);

//7

function name2 (name1)
{
    return `hey ${name1} welcome to guvi`;
}

function exce ( fun , arg)
{
    //fn-> name2 ,arg- balaji
    //fn() -> name2()
    //fn(arg) -> name2("balaji")

    console.log(fun(arg));
}
exce(name2,"balaji");


// 8
// what is pure function

// any function that returns same not for same input

function add (num1,num2){
    console.log("value :", num1+num2);

}
add(5,3);


//9 

// higer order function 

function mulitple (mul)
{
    return 5*mul;
}

const double= mulitple(2);

console.log(double);


//ex 2


function mulit (muli){
    return function (number){
        return number*muli;
    };
}

const m = mulit(2);
console.log(m(15));


function find (number,mulite)
{
    for(let i=1 ; i<=mulite;i++)
    {
        console.log(number * i);
    }
}
find(5,7);


function anotherfc (age)
{
    return age;
}
let another=anotherfc;
console.log(another);

function high (fac){
    return function (numb){
        return numb*fac
    }
}
const excc= high(8);
console.log(excc(5));

//arrow function 
// no return statement
// varibale

const result =(num1,num2) => (num1+num2)
const val =result(5,8)
console.log(val);


//annoymous function

const saywife= function ()
{
    console.log(5*5);
}
saywife();



//IIFE
//() ()
// function bracket (call bracket)
(function (){
    console.log("say kasini");
})
();

// IIFE , ARROW
(() => console.log("balaji")) ();



const arrodd =[1,2,3,4,5,6,7,8,9];

function printod(arr)
{
    for(let i=0 ; i<arr.length; i++)
    {
        if(arr[i] %2 !==0)
        {
            console.log(arr[i]);
        }
    }
}
printod(arrodd);

/// anonoyms

const print = function (arr1){
    for(let i=0; i<arr1.length;i++)
    {
        if(arr1[i] % 2 !==0)
        {
            console.log(arr1[i]);
        }
    }
}
print(arrodd);

//IIFE

(function (arr2){
    for (let i=0; i<arr2.length;i++)
    {
        if(arr2[i] %2 !==0)
        {
            console.log(arr2[i]);
        }
    }
})

(arrodd);

// higer ex1

function TopLayerFunc(value1) {
    return function (value2) {
      return value1 + value2;
    };
  }
  
  const returnStore = TopLayerFunc(10); // function
  const result3 = returnStore(10);
  console.log(result3);



/// task 
let rev = "mom";
const reversout= rev.split("").reverse().join("");
console.log(rev === reversout)


let sampleOne = "madam";
const reversable = sampleOne.split("").reverse().join("");
console.log(sampleOne === reversable);




















