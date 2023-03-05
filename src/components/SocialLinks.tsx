import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

function SocialLinks() {
  return (
    <div className="mt-10 flex w-full justify-center gap-8 text-3xl">
      <a href="https://github.com/conradhunter">
        <FontAwesomeIcon
          className="w-10 text-indigo-400 duration-150 hover:text-indigo-600"
          icon={faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/conrad-hunter-906a57226/">
        <FontAwesomeIcon
          className="w-10 text-indigo-400 duration-150 hover:text-indigo-600"
          icon={faLinkedin}
        />
      </a>
      <a href="mailto:conrad@conradhunterdev.com">
        <FontAwesomeIcon
          className="w-10 text-indigo-400 duration-150 hover:text-indigo-600"
          icon={faEnvelope}
        />
      </a>
      <a href="">
        <FontAwesomeIcon
          className="w-10 text-indigo-400 duration-150 hover:text-indigo-600"
          icon={faFilePdf}
        />
      </a>
    </div>
  );
}

export default SocialLinks;
