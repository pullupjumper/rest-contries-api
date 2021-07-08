import '../scss/index.scss';
import initToggleBtn from './toggle-btn';
import RESTCountryApi from './rest-country-api';

const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownText = document.querySelector('.dropdown-text');
const countryList = document.querySelector('.country-list');
const content = document.querySelector('.content');

const regionList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
let selectedRegionIndex = 0;

initComponents();


function initComponents() {
  initToggleBtn();
  initDropdown();
  initCountryList();
}


function initDropdown() {
  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown-show');
  });

  regionList.forEach((region, index) => {
    const div = document.createElement('div');
    div.classList.add('dropdown-item');
    div.innerHTML = region;
    div.dataset['regionName'] = region;
    div.dataset['regionIndex'] = index;
    dropdownMenu.appendChild(div);
  });

  dropdownMenu.addEventListener('click', selectDropdownMenuItem);
}

function selectDropdownMenuItem(e) {
  if (e.target.classList.contains('dropdown-item')) {
    selectedRegionIndex = e.target.dataset['regionIndex'];
    dropdownText.innerHTML = e.target.dataset['regionName'];
    updateCountryList();
  }
}

async function initCountryList() {
  content.addEventListener('click', toDetailPage);
  const region = regionList[selectedRegionIndex];
  let response = await RESTCountryApi.getCountriesByRegion(region);

  if (response != null) {
    response.forEach(country => {
      const item = createCountryListItem(country);
      countryList.appendChild(item);
    });
  }
}

async function updateCountryList() {
  const region = regionList[selectedRegionIndex];
  let response = await RESTCountryApi.getCountriesByRegion(region);

  if (response != null) {
    countryList.innerHTML = '';

    response.forEach(country => {
      const item = createCountryListItem(country);
      countryList.appendChild(item);
    });
  }
}

function createCountryListItem(country) {
  const li = document.createElement('li');
  li.classList.add('country-list-item');
  li.dataset['alpha3Code'] = country['alpha3Code'];
  const HTML = `<div class="card">
              <div class="card-header">
                <img src="${country.flag}" alt="">
              </div>
              <div class="card-content">
                <div class="card-title">${country.name}</div>
                <p><span>Population:&nbsp;</span>${country.population}</p>
                <p><span>Region:&nbsp;</span>${country.region}</p>
                <p><span>Capital:&nbsp;</span>${country.capital}</p>
              </div>
            </div>`;
  li.innerHTML = HTML;
  return li;
}

function toDetailPage(e) {
  const data = getParentElementData(e.target);

  if (data != null) {
    window.location.assign('http://localhost:3000/detail.html?alpha3code=' + data);
  }
}

function getParentElementData(el) {
  if (el) {
    while (el.parentElement) {
      if (el.parentElement.classList.contains('country-list-item')) {
        return el.parentElement.dataset['alpha3Code'];
      } else {
        el = el.parentElement;
      }
    }
  }

  return null;
}