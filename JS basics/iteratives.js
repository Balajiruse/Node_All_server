console.log(" iteratives");

const log =(logvalue) => console.log(logvalue)
log("working");


// loops or iterations

// basic for loop

for(let i=1;i<=5;i++){
    log(i);
}

// for loop array

const countryarray =[ "IND","CHN","US","UK","EUR","GER"];
 for ( let i=0 ; i<=countryarray.length;i++)
 {
    log(countryarray[i]);
 }



 //object

 const countryobj ={
    india : "IND",
    china :"CHN",
    unitedstated :"US",
    unitedkingdom :"UK",
    europe :"EUR",
    germany :"GER",
 }

 const valuess = Object.values(countryobj);
 log(valuess);

 // for loop for object

 for (let i=0; i<=valuess.length ; i++)
 {
    log(valuess[i]);
 }


 //keys
 const valuesskey = Object.keys(countryobj);
 log(valuesskey);

 // for loop for object

 for (let i=0; i<=valuesskey.length ; i++)
 {
    log(valuesskey[i]);
 }




// type of loop
// forin , forof ,foreach
// foe each -> best use case in array;
//const countryarray =[ "IND","CHN","US","UK","EUR","GER"];
log("..........for each loop");

countryarray.forEach((value,index,accarr) => {
    
    log(`
value :${value}
index :${index}
accarr : ${accarr}

    `);
});
c
valuesskey.forEach((value,index,accarr) => {
    
    log(`
value :${value}
index :${index}
accarr : ${accarr}

    `);
});


/// for in loop
// best uesd for object
log(" for in loop..................................");

for (key in countryobj){
    log(`
    keys :${key}
    values :${countryobj[key]}
    `);
}


log(" for in array..................................");

for (k in countryarray)
{
    log(`
    index of array : ${k}
    values of array : ${countryarray}
    `);
}






log(" for of..........................................................");

// best used for string

const countrystring =" allcountrydata";
for( str of countrystring)
{
    log(`"value :"${str}`);
}



log(" for of array");

for (value of countryarray)
{
    log(` array value : ${value}`)
}


log(" for of in object.....................");

for (objval of valuesskey)
{
    log(`object keys : ${objval}
    object values : ${countryobj[objval]}`)
}














