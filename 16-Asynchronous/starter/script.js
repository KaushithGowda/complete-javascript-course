'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// 28. Our First AJAX Call: XMLHttpRequest

const renderCountry = (country) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        // console.log(data);
        const currencies = data.currencies;
        const lang = data.languages;

        let currencyName;
        for (const currencyCode in currencies) {
            if (currencies.hasOwnProperty(currencyCode)) {
                currencyName = currencies[currencyCode].name;
            }
        }

        let langName;
        for (const langCode in lang) {
            if (lang.hasOwnProperty(langCode)) {
                langName = lang[langCode];
            }
        }

        const html = `<article class='country'>
    <img class="country__img" src=${data.flags.png} />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.capital}</h4>
      <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${langName}</p>
      <p class="country__row"><span>💰</span>${currencyName}</p>
    </div>
  </article>`;
        countriesContainer.insertAdjacentHTML('afterend', html);
        countriesContainer.style.opacity = 1;
    });
};

// This way of making api calls will lead to uncontrolled renders or unpredictable executions. To counter this we can try nesting of api calls using callback functions. This via we can control the api calls. But the code gets messi and form a triangle. The solution for these problems are using fetch and consuming promise

// renderCountry('usa');
// renderCountry('india');
// renderCountry('spain');
// renderCountry('portugal');
// renderCountry('brazil');
// renderCountry('france');
// renderCountry('italy');
// renderCountry('germany');

// 252. Consuming promises

const renderCountryFetch = () => {
    // Fetch return a promise. To handle the promise we use then. Then to see the repsonse we need to call json() which also returns a promise which inturn needs to be handled by one more then()
    fetch('https://restcountries.com/v3.1/name/usa').then(function name(responce) {
        // console.log(responce);
        return responce.json();
    }).then(d => {
        const [data] = d;
        const currencies = data.currencies;
        const lang = data.languages;

        let currencyName;
        for (const currencyCode in currencies) {
            if (currencies.hasOwnProperty(currencyCode)) {
                currencyName = currencies[currencyCode].name;
            }
        }

        let langName;
        for (const langCode in lang) {
            if (lang.hasOwnProperty(langCode)) {
                langName = lang[langCode];
            }
        }

        const html = `<article class='country'>
    <img class="country__img" src=${data.flags.png} />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.capital}</h4>
      <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}M people</p>
      <p class="country__row"><span>🗣️</span>${langName}</p>
      <p class="country__row"><span>💰</span>${currencyName}</p>
    </div>
  </article>`;
        countriesContainer.insertAdjacentHTML('afterend', html);
        countriesContainer.style.opacity = 1;
    });
};

renderCountryFetch();