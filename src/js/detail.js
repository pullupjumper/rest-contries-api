import '../scss/detail.scss';
import initToggleBtn from './toggle-btn';
import RESTCountryApi from './rest-country-api';


const content = document.querySelector('.content');
const img = document.querySelector('img');
const title = document.querySelector('.title');
const tagContainer = document.querySelector('.tag-container');


initToggleBtn();
initDetail();


async function initDetail() {
  const queryStr = getQueryStr();
  const data = await RESTCountryApi.getCountryByAlpha3Code(queryStr['alpha3code']);

  const currencies = data.currencies.reduce((pre, curr, index) => {
    if (index === 0) {
      return pre = pre + curr.name;
    }

    pre = pre + ', ' + curr.name;
    return pre;
  }, '');

  const languages = data.languages.reduce((pre, curr, index) => {
    if (index === 0) {
      return pre = pre + curr.name;
    }

    pre = pre + ', ' + curr.name;
    return pre;
  }, '');

  const HTML = `<div>
            <p class="info"><span>Native name:&nbsp;</span>${data.name}</p>
            <p class="info"><span>Population:&nbsp;</span>${data.population}</p>
            <p class="info"><span>Region:&nbsp;</span>${data.region}</p>
            <p class="info"><span>Sub Region:&nbsp;</span>${data.subregion}</p>
            <p class="info"><span>Capital:&nbsp;</span>${data.capital}</p>
          </div>
          <div>
            <p class="info"><span>Top Level Domain:&nbsp;</span>${data.topLevelDomain}</p>
            <p class="info"><span>Currencies&nbsp;</span>${currencies}</p>
            <p class="info"><span>Languages:&nbsp;</span>${languages}</p>
          </div>`;

  const tagHTML = data.borders.reduce((pre, cur) => {
    pre = pre + `<a href="#" class="tag">${cur}</a>`;
    return pre;
  }, '');

  img.src = data.flag;
  title.innerHTML = data.name;
  content.innerHTML = HTML;
  tagContainer.innerHTML = tagHTML;
}


function getQueryStr() {
  const url = location.href;
  const result = {};

  if (url.indexOf('?') !== -1) {
    const arr = url.split('?')[1].split('&');

    arr.forEach(str => {
      result[str.split('=')[0]] = str.split('=')[1];
    });
  }

  return result;
}

