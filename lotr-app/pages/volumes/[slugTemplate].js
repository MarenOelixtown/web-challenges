import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";
import { useRouter } from "next/router.js";
import Head from "next/head.js";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slugTemplate } = router.query;

  const volumeIndex = volumes.findIndex(({ slug }) => slug === slugTemplate);

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books, color } = volume;

  const WrapperBackgorund = styled.div`
    background-color: ${(props) =>
      props.$volumeColor === color ? `${color}` : null};
  `;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <WrapperBackgorund $volumeColor={color}>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}: <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </WrapperBackgorund>

      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
