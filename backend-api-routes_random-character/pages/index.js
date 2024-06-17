import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function HomePage() {
  const { data: character } = useSWR(`/api/random-character`, fetcher);

  if (!character) {
    return "loading";
  }
  return (
    <div>
      <h3>Hey, I'am a random Character</h3>
      <h2>
        My name is {character.firstName} {character.lastName}
      </h2>
      <p>My favorite anmials are {character.favAnimal}.</p>
      <p>You find me on Twitter: {character.twitterName}</p>
      <p>Location via geoHash: {character.geoHash}</p>
    </div>
  );
}
