import type { NextPage } from "next";
import React, { useState } from "react";
import { SectionHeader } from "../components/Typography";

const Quote: NextPage = (): JSX.Element => {
  const [info, setInfo] = useState({ name: "", email: "", message: "" });
  const submitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      info.name &&
      info.email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(info.email)
    ) {
      alert("Submitted");
    } else {
      alert("Invalid Info");
    }
  };

  return (
    <div className="w-full h-screen md:bg-gray-800 flex flex-col items-center justify-center">
      <div className="md:w-1/3 md:p-5 bg-white md:rounded-lg">
        <SectionHeader title="Info" />
        <p className="text-gray-600 mt-5 text-center">
          Fill your info and we will send you a quotation
        </p>
        <div className="w-full px-3 mt-8">
          <form onSubmit={submitInfo}>
            <div>
              <label htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="text-black p-3 border border-indigo-600 focus:ring-indigo-900 focus:border-indigo-900 block sm:text-sm rounded-md w-full my-2"
                placeholder="Your Name"
                value={info.name || ""}
                onChange={(e) => {
                  setInfo({ ...info, name: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="name">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="text-black p-3 border border-indigo-600 focus:ring-indigo-900 focus:border-indigo-900 block sm:text-sm rounded-md w-full my-2"
                placeholder="yourmail@example.com"
                value={info.email || ""}
                onChange={(e) => {
                  setInfo({ ...info, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="name">Message</label>
              <textarea
                name="message"
                id="message"
                className="text-black p-3 border border-indigo-600 focus:ring-indigo-900 focus:border-indigo-900 block sm:text-sm rounded-md w-full my-2"
                rows={5}
                placeholder="Optional Message..."
                value={info.message || ""}
                onChange={(e) => {
                  setInfo({ ...info, message: e.target.value });
                }}
              />
            </div>
            <div>
              <button
                className="p-3 inline bg-indigo-600 text-white hover:bg-indigo-700 sm:text-sm border-gray-300 rounded-md w-full mb-3"
                type="submit"
              >
                Get Quote
              </button>
              <button
                className="p-3 inline bg-gray-300 hover:bg-gray-400 sm:text-sm border-gray-300 rounded-md w-full"
                type="reset"
                onClick={() => window.location.assign("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
