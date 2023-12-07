// logger
const log =(par) => console.log(par);

//methods in array
// division
// impact in original array

const array =[1,2,3,4,5,6,7,8,9];
log(array);

// push 
// add a value is last index 
log("-----------------------push method---------------------");
array.push(10);
log(array);


// pop 
// remove a value is last index
log("------------------pop method--------------------");
array.pop();
log(array);

// unshift
// add a value first index
log("---------------------unshift method-----------------");
array.unshift(0);
log(array);

// shift
// remove a value is first index
log("-----------------------------shift------------------------");
array.shift();
log(array);

// sort
log("----------------sort method-------------");
const arr1 =[5,6,8,4,7,1,2,3,9];
const str1 = ["c","d","a","b","e","f"];

arr1.sort();
str1.sort();
log(arr1);
log(str1);

// reverse 
 log("---------------------reverse-------------");

 const array2 =[1,2,3,4,5];
 array2.reverse();
 log(array2);

 const array3 =[11,33,22,88,99];
 array3.sort((a,b) =>a-b).reverse();
 log(array3);

 // doesn"t impact oringnal array
 // returns a new array or value 
 log("------------------------concat method-----------------");
 const arr=["a","b"];
 const arr2=["c","d"];

 const concatarr = arr.concat(arr2);
 log(concatarr);

 // map filter reduce (mrf)
 
log("-----------------MRF-------------------");
log("-----------------------foreach--------------------");
 const mrf = [1,2,3,4,5,6,9];
const newmrf = mrf.forEach((valuve ,index,accArr) =>
{
   log(`value: ${valuve}
    index : ${index}
    accArr : ${accArr}
    `);
}
);


// map method 

log("----------------------------map method---------------");

const mapme =[ 2,6,7,8,3];
const newmap = mapme.map((value,index,accArr)=> {
    log(`valuue ; ${value}
    index : ${index}
    accarr : ${accArr}
    `);
    return value * 2;
});
log(mapme);
log(newmap);


// filter 

log("---------------------filter--------------------");

// filter also returns a new array
 const arra =[0,1,2,3,4,5,6,7,8];

 const newarra = arra.filter((value)=>
 {
    return value %2 !==0;
 });
 log(newarra)

 
// reduce
// reduce returns a value

log("---------reduce------------");

const sum = arra.reduce((acc, value, index, accArr) => {
  return (acc += value);
}, 0);
log(arra);
log(sum);

// chaining of MRF

const result = arra.map((val) => val * 3)
  .filter((val) => val % 2 == 0)
  .reduce((acc, val) => (acc += val), 0);

console.log(result);



const number = [2,3,4,5]
const newArr=number.map(myfuc)
function myfuc(num)
{
  return num*10
}
console.log(newArr)

