import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ handleTurnOn, handleTurnOff, disabled }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        handleTurnOn={handleTurnOn}
        handleTurnOff={handleTurnOff}
        disabled={disabled}
      />
    </>
  );
}
