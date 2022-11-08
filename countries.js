// const country1 = {
//   name: "Portugal",
//   capital: "Lisbon",
//   population: 10310000,
//   minimumSalary: 740,
//   flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
// };

// const country2 = {
//   name: "Spain",
//   capital: "Madrid",
//   population: 47350000,
//   minimumSalary: 1050,
//   flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
// };

// function displayCountryPortugal() {
//   document.querySelector(".country-desc-js").style.display = "block";
//   document.querySelector("img").src = country1.flag;
//   document.querySelector(".country-name-js span").innerHTML = country1.name;
//   document.querySelector(".country-capital-js span").innerHTML =
//     country1.capital;
//   document.querySelector(".country-population-js span").innerHTML =
//     country1.population;
//   document.querySelector(".country-minimumSalary-js span").innerHTML =
//     country1.minimumSalary;
// }

// function displayCountrySpain() {
//   document.querySelector(".country-desc-js").style.display = "block";
//   document.querySelector("img").src = country2.flag;
//   document.querySelector(".country-name-js span").innerHTML = country2.name;
//   document.querySelector(".country-capital-js span").innerHTML =
//     country2.capital;
//   document.querySelector(".country-population-js span").innerHTML =
//     country2.population;
//   document.querySelector(".country-minimumSalary-js span").innerHTML =
//     country2.minimumSalary;
// }

const countries = [
  {
    name: "Portugal",
    capital: "Lisbon",
    population: 10310000,
    minimumSalary: 740,
    flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    name: "Spain",
    capital: "Madrid",
    population: 47350000,
    minimumSalary: 1050,
    flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    name: "France",
    capital: "Paris",
    population: 67390000,
    minimumSalary: 1539,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg",
  },
  {
    name: "Germany",
    capital: "Berlin",
    population: 83240000,
    minimumSalary: 1584,
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
  },
  {
    name: "United Kingdom",
    capital: "London",
    population: 67220000,
    minimumSalary: 1598,
    flag: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    name: "The Netherlands",
    capital: "Amsterdam",
    population: 17440000,
    minimumSalary: 1635,
    flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
];

countries.forEach((country) => {
  let button = document.createElement("option");
  button.setAttribute("class", "btn btn-primary");
  button.innerHTML = country.name;
  button.value = country.name;
  document.querySelector(".buttons-js").appendChild(button);
});

function displayCountry(countryId) {
  document.querySelector(".country-desc-js").style.display = "block";

  let country = countries.find((country) => country.name === countryId);
  document.querySelector("img").src = country.flag;
  document.querySelector(".country-name-js span").innerHTML = country.name;
  document.querySelector(".country-capital-js span").innerHTML =
    country.capital;
  document.querySelector(".country-population-js span").innerHTML =
    country.population;
  document.querySelector(".country-minimumSalary-js span").innerHTML =
    country.minimumSalary;
}
