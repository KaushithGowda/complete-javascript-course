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

// 258. The Event Loop in Practise

// Global context
console.log('Test start');

// Callbacks queue : Normal async callbacks
// Callback functions which goes to callbak queue and get executed in the queue of functions
setTimeout(() => console.log('Timeout Call after 0sec!'), 0);

// Microtasks queue : Promise related callbacks
// Microtasks queue has priority over Callback queue
// Callback functions related to promises goes to Microtasks queue and get executed in the queue of functions
Promise.resolve('Promise 1').then(res => {
    // The promise callback has to finish for callback queue functions to execute 
    // for (let i = 0; i < 10000000000; i++) { }
    console.log(res);
});
Promise.resolve('Promise 2').then(res => console.log(res));

// Global context
console.log('Test end');

// 259. Building a Simple Promise

// Promises are special type of objects. The object is created using new keyword and constructor of Promise and it takes in executor function. 
// As soon as Promise constructor runs. It will execute the executor function.
// The executor function takes in resolve and reject arguments.
const lotteryPromise = new Promise(function (resolve, reject) {
    // This function is responsible for asynchronous behaviour which we are trying to handle.
    // This function will have the future result value.
    setTimeout(() => {
        if (Math.random() > 0.5) resolve(`Bingo 💵`);
        else reject(new Error(`Ahh now you're broke 💩`));
    }, 2000);
})

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Normally we just consume promises. We built promises only to wrap old callback based functions to promises.
// Promisifying: This is a process of converting callback asynchronous behaviour to promise based.

// Promisifying Timeout
const wait = function (secs) {
    return new Promise(function (resolve) {
        setTimeout(resolve, secs * 1000);
    })
};

wait(2).then(() => {
    console.log('I waited for 2 secs')
    return wait(1);
}).then(() => {
    console.log('I waited for 3 secs')
    return wait(1);
}).then(() => {
    console.log('I waited for 4 secs')
    return wait(1);
}).then(() => {
    console.log('I waited for 5 secs')
    return wait(1);
})

// resolve and reject are static methods on Promise constructor. These can be resolve immediately
Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('Issue!')).catch(err => console.error(err));

// 262. Consuming Promises from Async/Await

const getCountry = async function () {
    try {
        const responce = await fetch('https://restcountries.com/v3.1/name/usa');
        const [res] = await responce.json();
        console.log(res);
        if (res) throw new Error('SOmething');
        return `Your data: ${[res]}`
    } catch (err) {
        console.log(err);
    }
}

console.log('Before Api call');
// In the then handler callback, the argument that is passed is the resolved value of promise
getCountry().then(res => console.log(res));
console.log('After Api call');

// 263. Error Handling with try and catch
try {
    const x = 10;
    let y = 5;
    x = 11;
} catch (error) {
    console.log(error);
}

// 265. Running promises in parallel

const getJson = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    return await res.json();
}

const parallel = async function () {
    try {
        // const res1 = await fetch('https://restcountries.com/v3.1/name/usa');
        // const [data1] = await res1.json();
        // const res2 = await fetch('https://restcountries.com/v3.1/name/uk');
        // const [data2] = await res2.json();
        // const res3 = await fetch('https://restcountries.com/v3.1/name/spain');
        // const [data3] = await res3.json();
        // console.log(data1, data2, data3);
        const [res] = await Promise.all([getJson('uk'), getJson('usa'), getJson('spain')]);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

parallel();