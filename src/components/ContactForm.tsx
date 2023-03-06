import React, { useState } from "react";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // You can add your logic to handle form submission here
    setCompany("");
    setEmail("");
    setFullName("");
    setMessage("");
    console.log("Form submitted!");
  };

  return (
    <div className="w-7/12 rounded-lg bg-slate-700 p-8">
      <h2 className="mb-4 text-2xl font-bold text-white">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-white" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="w-full appearance-none border-b-2 border-indigo-500 bg-transparent py-2 px-3 leading-tight text-white focus:border-indigo-700 focus:outline-none"
            id="fullName"
            type="text"
            required={true}
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-full appearance-none border-b-2 border-indigo-500 bg-transparent py-2 px-3 leading-tight text-white focus:border-indigo-700 focus:outline-none"
            id="email"
            type="email"
            required={true}
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-white" htmlFor="company">
            Company (optional)
          </label>
          <input
            className="w-full appearance-none border-b-2 border-indigo-500 bg-transparent py-2 px-3 leading-tight text-white focus:border-indigo-700 focus:outline-none"
            id="company"
            type="text"
            required={false}
            placeholder="Enter your company name"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full appearance-none border-b-2 border-indigo-500 bg-transparent py-2 px-3 leading-tight text-white focus:border-indigo-700 focus:outline-none"
            id="message"
            placeholder="Enter your message"
            required={true}
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold text-white hover:bg-indigo-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
