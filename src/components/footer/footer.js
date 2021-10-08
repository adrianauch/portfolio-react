import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="text-muted text-center">
        {" "}
        <a href="https://www.linkedin.com/in/aauchterlonie/">
          <FaLinkedin />
        </a>
        Adrian Auchterlonie 2021{" "}
        <a href="https://github.com/adrianauch ">
          <FaGithub />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
