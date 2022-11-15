let countries = [];

fetch("https://restcountries.com/v2/all")
  .then((resp) => resp.json())
  .then((countriesList) => {
    console.log(countriesList);
    countries = countriesList;
    countries.forEach((country) => {
      let button = document.createElement("option");
      button.setAttribute("class", "btn btn-primary");
      button.innerHTML = country.name;
      button.value = country.name;
      document.querySelector(".buttons-js").appendChild(button);
    });
  });

function displayCountry() {
  document.querySelector(".country-desc-js").style.display = "block";

  let selectedCountry = document.querySelector("select").value;
  let country = countries.find((country) => country.name === selectedCountry);
  document.querySelector("img").src = country.flag;
  document.querySelector(".country-name-js span").innerHTML = country.name;
  document.querySelector(".country-capital-js span").innerHTML =
    country.capital;
  document.querySelector(".country-population-js span").innerHTML =
    country.population;
  document.querySelector(".country-region-js span").innerHTML = country.region;
}
