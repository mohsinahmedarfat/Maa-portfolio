import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="m-2 text-4xl">Maa</h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2x1">
        <a
          href="https://www.linkedin.com/in/mohsin-ahmed-arfat"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-cyan-300 cursor-pointer" />
        </a>
        <a
          href="https://github.com/mohsinahmedarfat"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-cyan-300 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/mohsin.arfat"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="hover:text-cyan-300 cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/mohsin.ahmed.arfat"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="hover:text-cyan-300 cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
