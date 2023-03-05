import Image from "next/image";
import Link from "next/link";
import React from "react";
import personalLogo from "../assets/trans-words.png";
import ContactButton from "./ContactButton";

function Nav() {
  return (
    <nav className="flex w-full justify-between py-6 px-[7%]">
      <Link href="/">
        <Image src={personalLogo} alt="" height={50} />
      </Link>
      <div className="flex items-center">
        <Link href="/contact">
          <ContactButton />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
