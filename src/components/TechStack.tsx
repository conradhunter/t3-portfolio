import Image from "next/image";
import React from "react";
import html from "../assets/tech-icons/html.png";
import css from "../assets/tech-icons/css3.png";
import javascript from "../assets/tech-icons/javascript.png";
import typescript from "../assets/tech-icons/typescript.png";
import tailwind from "../assets/tech-icons/tailwind-css.png";
import firebase from "../assets/tech-icons/firebase.png";
import node from "../assets/tech-icons/node-js.png";
import next from "../assets/tech-icons/next.png";
import react from "../assets/tech-icons/react.png";
import git from "../assets/tech-icons/git.png";
import creativecloud from "../assets/tech-icons/creative-cloud.png";
import auth0 from "../assets/tech-icons/auth0.png";

function TechStack() {
  return (
    <div className="mb-20">
      <h1 className="mb-20 text-center text-5xl font-bold text-indigo-500">
        Tech Stack
      </h1>
      <div className="grid grid-cols-4 grid-rows-2 gap-14 max-[640px]:grid-cols-2 max-[640px]:grid-rows-4 max-[425px]:grid-cols-2 max-[425px]:grid-rows-4 sm:grid-cols-3 sm:grid-rows-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={html}
            className="w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={css}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="flex w-24 items-center justify-center rounded-lg">
          <Image
            src={tailwind}
            className="w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={javascript}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={typescript}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="flex h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={react}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={next}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-30 h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={node}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-30 h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={git}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-30 h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={firebase}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-30 h-24 w-24 items-center justify-center rounded-lg">
          <Image
            src={creativecloud}
            className="h-24 w-24 text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
        <div className="h-24 items-center justify-center rounded-lg">
          <Image
            src={auth0}
            className="h-24 w-auto text-gray-600 duration-300 hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
