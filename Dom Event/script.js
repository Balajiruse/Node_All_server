
// browwr inbuild methods

// result element
const resulte =document.getElementById("result");

function alretmethod (msg)
{
alert(msg) // returns nothing
}
//alretmethod("hello alret");

function promptmsg ()
{
const name1=prompt("say my name"," default value balaji");
// returns a string
// if cancel returns null

console.log(name1);

resulte.innerText=name1
}
//promptmsg()

function confirmmsg(){
    const result=confirm(" develpoer")
    console.log(result);
    // confirm true or flase
    

}


//setTimeout(()=>{
    //console.log("timeout")
//},1000)



//setTimeout(function () // setTimeout(function,sec)
//{
  //console.log("print")
//},3000)


// result sceerr
let timecount =10;
function count()
{
console.log(timecount);
timecount--
const id =setTimeout(count,1000)

const scr = document.getElementById("rel")
scr.append(id)

if(timecount==0)
{   

clearTimeout(id);

}
}

//count()

//const counting = 10
//function start ()
//{
  //  console.log(counting);
    //counting--
    //const stop =setTimeout(start,1000)
    //if(counting==0)
    //{
      //  clearTimeout(stop)
    //}

//}
//start()


const PageE =document.getElementById("page")

const btn  =document.getElementById("style")

btn.addEventListener("click",(e) =>{
  console.log(e)
  PageE.style.color="red";
  
})


let Deloverytime= true;
// set time out

const set_timeout = setTimeout(()=> {

  console.log("delivered the order at 1pm ")
  Deloverytime=false;
  clearTimeout(set_timeout);
},4000)

function clearTimeout(id)
{
  if(id && Deloverytime)
  {
    clearTimeout(id)
  }
  
}





// set INTERVAL

let tricks=0
const maxTick=5
const interval = setInterval( handleticks,1000)


function handleticks ()
{
  if (tricks === maxTick) {
    clearInterval(interval)
  } 
  else{
    tricks++
    console.log(tricks);
  }
}




