import Link from "next/link";
import React from "react";
import ContactForm from "~/components/ContactForm";

function Contact() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-slate-600 p-8">
      <span className="absolute left-8 top-8 text-white duration-200 hover:text-gray-300">
        <Link href="/">return</Link>
      </span>
      <ContactForm />
    </section>
  );
}

export default Contact;
