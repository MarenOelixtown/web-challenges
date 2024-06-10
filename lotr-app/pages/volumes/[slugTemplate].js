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

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledLink href="/volumes">← All Volumes</StyledLink>
      <h1>{title}</h1>
      <p>{description}</p>
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
      {previousVolume ? (
        <StyledLinkWrapper>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </StyledLink>
        </StyledLinkWrapper>
      ) : null}
      {nextVolume ? (
        <StyledLinkWrapper>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </StyledLink>
        </StyledLinkWrapper>
      ) : null}
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
const StyledLinkWrapper = styled.div`
  margin: 2rem 0;
`;
