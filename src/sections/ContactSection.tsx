import React, { useState } from "react";
import { SubTitle } from "../components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  {
    name: "(959) 250 154 050",
    href: "tel:+959250154050",
    icon: faPhone,
  },
  {
    name: "dev.kst.aaron@gmail.com",
    href: "mailto:dev.kst.aaron@gmail.com",
    icon: faEnvelope,
  },
];

const ContactSection = (): JSX.Element => {
  const [mail, setMail] = useState("");

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mail && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      alert("Subscribed");
      setMail("");
    } else {
      alert("Invalid Email");
    }
  };

  return (
    <>
      <div id="about" className="flex flex-col items-center bg-gray-800 py-24">
        <div className="md:grid md:grid-cols-3 md:divide-x gap-5 lg:w-9/12 text-white">
          <div className="p-5">
            <p>
              <SubTitle title="Get in Touch!" />
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              sit amet dictum sit amet.
            </p>
          </div>
          <div className="p-5">
            <p>
              <SubTitle title="Contact Info" />
            </p>
            {contacts.map((contact) => {
              return (
                <p key={contact.name} className="mb-4">
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="inline"
                    width={15}
                  />{" "}
                  <a href={contact.href} className="">
                    {contact.name}
                  </a>
                </p>
              );
            })}
          </div>
          <div className="p-5">
            <p>
              <SubTitle title="Subscribe to Email" />
            </p>
            <div>
              <form onSubmit={subscribe}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="text-black p-3 focus:ring-indigo-500 focus:border-indigo-500 inline sm:text-sm border-gray-300 rounded-l-md w-9/12"
                  placeholder="yourmail@example.com"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                />
                <button
                  className="p-3 inline bg-indigo-600 hover:bg-indigo-700 sm:text-sm border-gray-300 rounded-r-md w-3/12"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
