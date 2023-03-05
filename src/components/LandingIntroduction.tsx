import React from "react";
import SocialLinks from "./SocialLinks";

function LandingIntroduction() {
  return (
    <div className="mt-28 flex flex-col items-center">
      <h1 className="font-poppins text-5xl font-bold text-indigo-500">
        Conrad Hunter
      </h1>
      <h2 className="text-3xl font-bold text-indigo-500">Frontend Developer</h2>
      <p className="mt-10 w-1/3 text-center text-base font-medium text-white">
        I&apos;m Conrad Hunter, a 24-year-old frontend developer. I take pride
        in crafting visually stunning and easy-to-use web interfaces. With a
        keen attention to detail and a deep understanding of user experience, I
        deliver intuitive designs that elevate brands and delight users.
      </p>
      <SocialLinks />
    </div>
  );
}

export default LandingIntroduction;
