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
          <li key={volume.title}>
            <Link href={`volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
