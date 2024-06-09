import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <div>
      <Link href="/volumes">All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        <li>
          {volume.books[0].ordinal} / {volume.books[0].title}
        </li>
        <li>
          {volume.books[1].ordinal} / {volume.books[1].title}
        </li>
      </ul>
      <Image
        src={volume.cover}
        height={230}
        width={140}
        alt={`The picture of the book ${volume.title}`}
      />
      <br />
      <Link href="/volumes/the-two-towers">
        <button>Previous</button>
      </Link>
      <Link href="">
        <button>Next</button>
      </Link>
    </div>
  );
}
