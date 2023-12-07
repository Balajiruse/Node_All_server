const Api = "https://emojihub.yurace.pro/api/all/category/smileys-and-people";
const art = document.getElementById("display");

fetch(Api)
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
      const info = {
        name: element.name,
        category: element.category,
        group: element.group,
        code: element.htmlCode[0]
      };
      emoji(info);
    });
  })
  .catch(error => console.log(error));

  function emoji(element) {
    const container = document.createElement("div");
    container.className = "col-lg-4 col-md-6 col-sm-12 mb-4  Main";
    container.innerHTML = `
      <div class="card">
        <h5 class="card-title">Name: ${element.name}</h5>
        <p class="card-text">Category: ${element.category}</p>
        <p class="card-text">Group: ${element.group}</p>
        <button type="button" class="btn btn-primary mt-auto" onclick="showemoji(this, '${element.code}')">Show Emoji</button>   
      </div>
    `;
    art.appendChild(container);
  }
  

function showemoji(button, code) {
  button.textContent = code;
}