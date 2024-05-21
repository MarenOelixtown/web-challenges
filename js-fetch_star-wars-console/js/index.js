console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  console.log(data.results[3]);
  console.log("Eye-Color of R2-D2: ", data.results[2].eye_color);
}

fetchData();
