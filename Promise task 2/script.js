
const Api = "https://api.openbrewerydb.org/v1/breweries";
const art = document.getElementById("display");

fetch(Api)
  .then(res => res.json())
  .then(data => {
    data.forEach(element => {
        console.log(element)
        breweries(element)
    });
  })
  .catch(error => console.error(error));





  
  function breweries(element) {
    const carddiv = document.createElement('div');
    carddiv.classList.add('card', 'border-secondary');
  
    const cardheader = document.createElement('div');
    cardheader.classList.add('card-header');
    cardheader.textContent = element.name;
  
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body', 'text-secondary');
    
    const Type = document.createElement('p');
    Type.classList.add('card-text');
    Type.textContent = `Type: ${element.brewery_type}`;
  
    const street = document.createElement('p');
    street.classList.add('card-text');
    street.textContent = `Street: ${element.street}`;
  
    const city = document.createElement('p');
    city.classList.add('card-text');
    city.textContent = `City: ${element.city}`;
  
    const state = document.createElement('p');
    state.classList.add('card-text');
    state.textContent = `State: ${element.state} `;
  
    const country = document.createElement('p');
    country.classList.add('card-text');
    country.textContent = `Country: ${element.country} `;
  
    const Zipcode = document.createElement('p');
    Zipcode.classList.add('card-text');
    Zipcode.textContent = `Zipcode: ${element.postal_code} `;
  
    const Contact = document.createElement('p');
    Contact.classList.add('card-text');
    Contact.textContent = `Contact No: ${element.phone} `;
  
    cardbody.appendChild(Type);
    cardbody.appendChild(city); 
    cardbody.appendChild(street);
    cardbody.appendChild(state);
    cardbody.appendChild(country);
    cardbody.appendChild(Zipcode);
    cardbody.appendChild(Contact);
  
    carddiv.appendChild(cardheader);
    carddiv.appendChild(cardbody);
  
    art.appendChild(carddiv);
  }
  
