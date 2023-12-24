import React from "react";
import LinkedInLogo from "../assets/LinkedInLogo";
import TwitterLogo from "../assets/TwitterLogo";
import GitHubLogo from "./GitHubLogo";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-end text-white font-[poppins]">
      <p>Aadarsh Kumar Tiwari</p>
      <p>Final year student at IIT(ISM) Dhanbad</p>
      <br />
      <p>aadarshkt1729@gmail.com</p>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/aadarshkt/" target="_blank" rel="noopener noreferrer">
          <LinkedInLogo />
        </a>
        <a href="https://github.com/aadarshkt" target="_blank" rel="noopener noreferrer">
          <GitHubLogo />
        </a>
        <a href="https://twitter.com/aadarsh_kt" target="_blank" rel="noopener noreferrer">
          <TwitterLogo />
        </a>
      </div>
    </div>
  );
};

export default Contact;
