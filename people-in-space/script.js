console.log("Sanity check");
const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const spaceHeroList = document.querySelector('[data-js="space-hero-list"]');
const buttonAll = document.querySelector('[data-js="button-all"]');
const buttonIss = document.querySelector('[data-js="button-iss"]');
const buttonTiangong = document.querySelector('[data-js="button-tiangong"]');

const url = "http://api.open-notify.org/astros.json";

async function fetchPeopleInSpaceData() {
  const response = await fetch(url);
  const data = await response.json();

  peopleInSpace.textContent = data.number;
  const spaceHeroes = data.people;
  displaySpaceHeroCard(spaceHeroes);

  buttonAll.addEventListener("click", () => {
    displaySpaceHeroCard(spaceHeroes);
  });
  buttonIss.addEventListener("click", () => {
    displaySpaceHeroCard(
      spaceHeroes.filter((spaceHero) => spaceHero.craft === "ISS")
    );
  });
  buttonTiangong.addEventListener("click", () => {
    displaySpaceHeroCard(
      spaceHeroes.filter((spaceHero) => spaceHero.craft === "Tiangong")
    );
  });
}

function spaceHeroCard(spaceHero) {
  const newSpaceHero = document.createElement("li");
  newSpaceHero.classList.add("hero-card");
  newSpaceHero.innerHTML = `
    <h3>${spaceHero.name}</h3>
    <p>Craft: ${spaceHero.craft}</p>
    `;
  return newSpaceHero;
}

function displaySpaceHeroCard(spaceHeroes) {
  spaceHeroList.innerHTML = "";
  spaceHeroes.forEach((spaceHero) => {
    spaceHeroList.appendChild(spaceHeroCard(spaceHero));
  });
}

fetchPeopleInSpaceData();
