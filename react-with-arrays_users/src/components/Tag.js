import "./Tag.css";

export default function Tag({ tag, admin }) {
  return <li className={`tag ${admin ? "tag--highlight" : ""}`}>{tag}</li>;
}
