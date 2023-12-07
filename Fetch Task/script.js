function getAllCountries() {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => { console.log(data)
            data.forEach(country => {
                createCountryCard(country);
            });
        })
        .catch(error => console.error('Error:', error));
  }
  
  function createCountryCard(country) {
    const carddiv = document.createElement('div');
    carddiv.classList.add('card', 'border-secondary');
    
  
  
    const cardheader = document.createElement('div');
    cardheader.classList.add('card-header');
    cardheader.textContent = country.name.common;
  
    const flag = document.createElement('img');
    flag.classList.add('flag')
    flag.src = country.flags.png; 
    flag.alt = `${country.name.common} Flag`;
  
    const cardbody = document.createElement('div');
    cardbody.classList.add('card-body', 'text-secondary');
    
    const region = document.createElement('p');
    region.classList.add('card-text');
    region.textContent = `Region: ${country.region}`;
  
    const population = document.createElement('p');
    population.classList.add('card-text');
    population.textContent = `Population: ${country.population}`;
  
    const capital = document.createElement('p');
    capital.classList.add('card-text');
    capital.textContent = `Capital: ${country.capital}`;
  
    const latlng = document.createElement('p');
    latlng.classList.add('card-text');
    latlng.textContent = `latlng: ${country.latlng[0]} & ${country.latlng[1]} `;
  
    const  countrycode= document.createElement('p');
    countrycode.classList.add('card-text');
    countrycode.textContent = `Country code: ${country.altSpellings[0]} `;
  
    const weather = document.createElement('button')
    weather.classList.add('Weather')
    weather.textContent='Click to know Weather'
  
    weather.addEventListener('click',()=>{
      const apiKey = '1605d3ad619cec6f5d8562870e98f53c';
      const countryName = country.name.common;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
          .then(response => response.json())
          .then(weatherData => {
            
            const   weatherinfo= weatherData.weather[0].description
            weather.innerHTML = weatherinfo
          })
          .catch(error =>(weather.innerHTML=`Weather cant found`));
  });
  
  
  
  
  
   
    carddiv.appendChild(cardheader);
    carddiv.appendChild(flag);
    
    carddiv.appendChild(cardbody);
    cardbody.appendChild(capital);
    cardbody.appendChild(region);
    cardbody.appendChild(population);
    cardbody.appendChild(latlng);
    cardbody.appendChild(countrycode);
  
    cardbody.appendChild(weather);
  
  
    document.getElementById('card-container').appendChild(carddiv);
  }
  
  getAllCountries();
  
  
