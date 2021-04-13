
(async function() {
  const table = document.querySelector(".tab");
  const btnPrev = document.querySelector("#prev");
  const btnNext = document.querySelector("#next");
  const tbody = table.querySelector("tbody");
  const cnt = document.querySelector(".tab-cnt");
};

(async function() {
  ...
  const apiUrl = `http://localhost:3000/users`
  const request = await fetch(`${apiUrl}`);
  console.log(request.json())
})();

(async function() {
  ...
  const apiUrl = `http://localhost:3000/users`
  const request = await fetch(`${apiUrl}?_page=${page}&_limit=${limit}`);
  console.log(request.json())



{
  "name": "4-tabela",
  "version": "1.0.0",
  "description": "Pobierz dane z adresu:\r https://restcountries.eu/rest/v2/all?fields=iso2Code;name\r W odpowiedzi dostaniesz listę państw.\r Na jej podstawie wygeneruj option'y i wrzuć je do selekta o id #countrySelect\r Każdy option powinien mieć postać np. &lt;option value=\"Afganistan\">Afganistan&lt;/option>\r Po wrzuceniu optionów musisz aktywować ten selekt, bo jest obecnie disabled",
  "main": "index.js",
  "scripts": {
    "start": "json-server --watch data/data.json"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "json-server": "^0.16.1"
  }
}


