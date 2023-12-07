//promise
let task=100
let promisedata = new Promise((resolve,reject)=>
{
  if(task<=95)
  {
    resolve("you completed the task")
  }
  else{
    reject("you  not completes task")
  }
})
promisedata.then((data1)=>{
    console.log(data1)   
})
.catch((data1)=>{
    console.log(data1)
})


// Analysing the result of the promise (cosumer)
// three different states
// pending
// fullfiled
// reject

let Chainpromise= new Promise((resolve,reject)=>{

    let value =0
    if(value>0){
        resolve(value)

    }
    else{
        reject("it s a negative value")
    }
});
Chainpromise
.then((data)=>
{
    console.log(data)
    return data*2
}
)
.then((data2)=>{
    console.log(data2)
    return data2*2
})
.then((data3)=>
{
    console.log(data3)
    return data3 *2
})
.catch((err)=>{
    console.log(err)
})


// normal function in promises
// disadvantages

// details name and age


function getname(name)
{
    return new Promise ((resolve, reject)=>{
        if(name.length==0){
            reject(" enter your Name")
        }
        else{
            resolve(name)
        }
    })
}

function getage(age){
    console.log(`enter your age ${age}`)
}

function getDetails(name,age)
{
    console.log(`hi ${name} you age ${age}`)
}

getname("balaji")
.then((data)=>{
    console.log(data)
    return data
}
)
.then((name)=>{
    getage(25)
    return name
})
.then((resname)=>{
    getDetails(resname,25)
})
.catch((err)=>{
    console.log(err)
})





// Promise All Method to club all promise 
// all the promise should get resolved


// functionality1

let promise1 = new Promise ((resolve, rejest)=>{
    console.log("promise1 is called")
    resolve(10)
    rejest("invalid")
})


// function2
let promise2 = new  Promise ((resolve, reject)=>{
    console.log("promise2 is  called")
    resolve(30)
    reject("invalid")
})

//  function 3

let promise3= new Promise ((resolve,reject)=>
{
    console.log("promise3 is called")
    resolve(40)
    reject("invaild")
})


Promise.all([promise1,promise2,promise3])
.then((value)=>{
    console.log("Promise value",value)
})
.catch((err)=>{
    console.log("Error:" ,err)
}
)

  
// promise







// fetch returns a promise
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((element) => {
      const countryObject = {
        ...element,
        name: element.name.common,
        flags: element.flags.png,
        population: element.population,
        region: element.region,
        capital: element.capital,
        countryCode: element.cca3 ? element.cca3 : "no countrycode",
      };
      createCountryCard(countryObject);
    });
  })
  .catch((err) => console.log("error : ", err));

// fetch functionality
// weather api
function getWeather(name) {
  // fetch
  // return
}
function createCountryCard(element) {
  document.body.innerHTML += `
          <div class="container">
          <img id="flag" src="${element.flags}" alt="${element.name}"/>
          <div class="info">
          <h2>${element.name}</h2>
          <p><span>Population : ${element.population}</span></p>
          <p><span>Region : ${element.region}</span></p>
          <p><span>Capital : ${element.capital}</span></p>
          <p><span>Country Code : ${element.countryCode}</span></p>
          <button onclick="${getWeather(element.name)}">get weather</button>
          </div>
          </div>
          `;
}

//   img - flag
//   name - name
//   population
//   region
//   captal