const URL = 'https://restcountries.eu/rest/v2/';

class RESTCountryApi {

  getCountriesByRegion(region) {
    return fetch(URL + 'region/' + region)
      .then((res) => {
        return res.json();
      });
  }

  getCountryByAlpha3Code(alpha) {
    return fetch(URL + 'alpha/' + alpha)
      .then(res => {
        return res.json();
      });
  }
}

export default new RESTCountryApi();