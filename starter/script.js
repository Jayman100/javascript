// 'use strict';

const btn = document.querySelector('.btn-country');
const container = document.querySelector('.country');
const countriesContainer = document.querySelector('.countries');
const searchBar = document.querySelector('.search');
const searchBtn = document.querySelector('.btn');

searchBtn.addEventListener('click', () => {
  getCountryData(searchBar.value);
});

// function countriesInfo(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error: ${response.status}`);
//       }

//       return response.json();
//     })

//     .then(data => {
//       console.log(data);

//       document.querySelector('img').src = data[0].flags.png;
//       document.querySelector('.country__name').textContent =
//         data[0].name.common;

//       if (!Object.keys(data[0]).includes('borders')) {
//         throw new Error('No neighbour found');
//       }

//       const neighbour = data[0].borders[0];

//       console.log(neighbour);

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })

//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })

//     .catch(error => {
//       getErr(error);
//       console.log(error);
//     });

//   countriesContainer.style.opacity = 1;
// }

// countriesInfo('portugal');
// countriesInfo('Germany');

// const request = fetch(
//   `https://restcountries.com/v3.1/name/portugal?fullText=true`
// );
//? To display the error message on the window rather than just loggin it into the console
const getErr = function (msg) {
  // para = `<p>${msg}</p>`;
  countriesContainer.insertAdjacentHTML('beforeend', msg);
};

//? To display the whole country card for the main country selected and bordering country

//Todo: Use Use DOM manipulation to manipulate the content of the HtmlElement tags rather than just exporting the markup to the html file ....

const renderCountry = function (data, className = '') {
  html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫 </span>${(
      data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.entries(data.currencies)[0][1].name
    }(${Object.keys(data.currencies)})</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

//Function to fetch and get the response , this is done avoid repeating codes
const getJson = function (url) {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) {
      throw new Error(`country not found (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(data => {
      console.log(data[0]);

      renderCountry(data[0]);
      //Throw an exception immediately if there is no neighbor country for the selected country , so that only the country selected will be display with the error message
      if (Object.keys(data[0]).includes('borders') === false) {
        throw new Error(`No neighbour found!`);
      }

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(err);
      getErr(`${err.message}`);
    })

    //This will always run regardless of whether there is an error(rejection) or not -> just like the finally in the try..catch

    .finally(() => (countriesContainer.style.opacity = 1));
};

// btn.addEventListener('click', () => {
//   getCountryData('australia');
// });
// getCountryData('portugal');

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resolved promise 1').then(res => console.log(res));
// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

const url =
  ' https://api.bigcommerce.com/stores/{store_hash}/v3/catalog/brands';
async function getdata() {
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getdata();
