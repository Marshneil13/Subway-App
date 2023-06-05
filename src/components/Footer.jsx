import React from "react";
import { FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="myFooter">
      <div className={`text-center p-4`} style={{ backgroundColor: "#ffffff" }}>
        Made with <FaReact style={{ width: "27px", height: "27px" }} /> {`by `}
        <a
          className="githubLink"
          href="https://github.com/Marshneil13"
          target="_blank"
          rel="noreferrer"
        >
          Marshneil
        </a>
      </div>
    </footer>
  );
};
export default Footer;
