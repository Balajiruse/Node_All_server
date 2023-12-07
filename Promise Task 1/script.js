const Api = "https://poetrydb.org/title/Ozymandias/lines.json";
const art = document.getElementById("display");

fetch(Api)
  .then(res => res.json())
  .then(data => {
    const poet = data[0].lines;
    poet.forEach(element => {
      console.log(element);
      const imageUrl = `https://source.unsplash.com/200x200/?random=${Math.random()}`; 
      Poeticlines(element, imageUrl);
    });
  })
  .catch(error => console.error(error));

function Poeticlines(element, imageUrl) {
  const container = document.createElement("div");
  container.className = "col-lg-4 col-md-6 col-sm-12 mb-4 Main";
  container.innerHTML = `
    <div class="card">
      <h1 class="Name">Ozymandias Lines </h1>
      <img src="${imageUrl}" class="card-img-top" alt="Random Image"> 
      <div class="card-body">
        <p class="card-text">${element}</p>
      </div>
    </div>
  `;
  art.appendChild(container);
}
``