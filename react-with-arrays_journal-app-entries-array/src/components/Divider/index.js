import "./Divider.css";

export default function Divider({ hideDivider }) {
  return (
    <hr
      className="divider"
      role="none"
      style={{ display: hideDivider ? "none" : "" }}
    />
  );
}
