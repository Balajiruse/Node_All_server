
console.log("Docment object model");


// creating an elements

let DivElement = document.createElement("div")

// Adding Attributs

DivElement.setAttribute("class","Js")
DivElement.setAttribute("id","script")
console.log(DivElement)

//task
// create element p,a
// setAttributes ,href "google.com"
// P class or id

let pargaraph = document.createElement("p")
pargaraph.setAttribute("class","balaji")
pargaraph.setAttribute("id","balaji")
console.log(pargaraph);


let anchortag =document.createElement("a")
anchortag.setAttribute("href","www.google.com");
anchortag.setAttribute("target","_blank")
console.log(anchortag);


// Access element using id and class

let headElement = document.getElementById("heading");
let subHead = document.getElementsByClassName("head");
console.log(headElement);

console.log(subHead);


//Query selector

let queryElement = document.querySelector(".query-class");
let Queryclass=document.querySelector("#heading")
queryElement.style.backgroundColor="red";
console.log(queryElement);
console.log(Queryclass);


//Query SelectorAll

let queryElementAll=document.querySelectorAll(".query-class")
console.log(queryElementAll)


const colors=[ "brown","green","orange","blue"]

for( let i=0;i<queryElementAll.length;i++)
{
    console.log(queryElementAll[i]);
    queryElementAll[i].style.backgroundColor=colors[i];
}


//InnerText
anchortag.innerText+=`google`;

DivElement.innerText+=` Hello i am balaji`;

//InnerHtml

DivElement.innerHTML+=`
<h2> Haeding </h2>
<p> king oF know</p>
`;

console.log(DivElement);
console.log(anchortag);



queryElement.innerText+=` hello   iam      balaji `;

queryElement.textContent+=` Hello im text html       and i am add`;

console.log(queryElement.innerText);
console.log(queryElement.textContent);


//append the content

document.body.append(DivElement);


let newElement =document.createElement("div");
newElement.style.backgroundColor="gray";
newElement.style.margin="30px";


// append the content

document.body.append(newElement);
const append=newElement.append(DivElement,anchortag,"Appending Text");
console.log(append);




//appendchild (tradional method)
// const appendChild = newElements.appendChild(anchorElement);
// console.log(appendChild);

// diffence
//1. append - multiple nodes canbe appended not in appendchild
//2. appednchild - return's the node but append return the undefined.













