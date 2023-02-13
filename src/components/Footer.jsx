import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="py-9 px-28 bg-green-color flex justify-between">
      <div className="w-96 h-40 bg-grey-color rounded-2xl">
        <img
          src={Logo}
          alt="Little Lemon Logo"
          className="w-full h-full px-3 py-3"
        />
      </div>
      {/* vertical navigation */}
      <ul className="text-grey-color">
        <li>
          <Link className="block mb-2" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="block mb-2" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="block mb-2" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="block mb-2" to="/reservation">
            Reservations
          </Link>
        </li>
        <li>
          <Link className="block mb-2" to="/order">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="block" to="/login">
            Login
          </Link>
        </li>
      </ul>
      <ul className="text-grey-color">
        <li className="block mb-2">8169678142</li>
        <li className="block mb-2">12, newman street, chicago.</li>
        <li className="block mb-2">contact@littlelemon.com</li>
      </ul>
      <ul className="text-grey-color">
        <li>
          <a
            className="block mb-2"
            href="https://instagram.com/stoicpushkar"
            target="_blank"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="block mb-2"
            href="https://twitter.com/stoicpushkar"
            target="_blank"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="block mb-2"
            href="https://youtube.com/stoicpushkar"
            target="_blank"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            className="block mb-2"
            href="https://github.com/pushkarsingh019"
            target="_blank"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
