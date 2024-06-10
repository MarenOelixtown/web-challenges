import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  const randomVolume = getRandomElement(volumes);

  const handleRandomVolume = () => {
    console.log("Button clicked");
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <Head>
        <title>List of Volumes</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <StyledListItem key={volume.title}>
            <StyledLink href={`volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </StyledListItem>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
const StyledLink = styled(Link)`
  background-color: grey;
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  margin: 3rem 0;
  border-radius: 5px;
  &:hover {
    text-decoration: underline;
    background-color: red;
  }
`;
const StyledListItem = styled.li`
  margin: 3rem 0;
  list-style: none;
`;
