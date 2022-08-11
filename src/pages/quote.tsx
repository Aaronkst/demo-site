import type { NextPage } from "next";
import React, { useState } from "react";
import { SectionHeader } from "../components/Typography";
import axios from "axios";
import Link from "next/link";

const Quote: NextPage = (): JSX.Element => {
  const [info, setInfo] = useState({ name: "", email: "", message: "" });
  const submitInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      info.name &&
      info.email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(info.email)
    ) {
      /*axios
        .post("/api/mail", { receiver: [info.email] })
        .then((data) => {
          console.log(data);
          alert("success");
        })
        .catch((err) => console.log(err));*/
      alert("success");
    } else {
      alert("Invalid Info");
    }
  };

  return (
    <div className="w-full h-screen lg:bg-gray-800 flex flex-col items-center justify-center">
      <div className="lg:w-1/3 lg:p-5 bg-white lg:rounded-lg">
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
                className="p-3 block bg-indigo-600 text-white hover:bg-indigo-700 sm:text-sm rounded-md w-full mb-3"
                type="submit"
              >
                Get Quote
              </button>
              <Link href="/">
                <a className="p-3 block text-indigo-700 bg-indigo-100 hover:bg-indigo-200 sm:text-sm rounded-md w-full text-center">
                  Cancel
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
