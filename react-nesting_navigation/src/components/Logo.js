import logo from "../img/logo.jpg";
import { Image } from "../components/Image.js";
import { Link } from "../components/Link.js";

export function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
