import { SectionHeader, SubTitle } from "../components/Typography";
import Image from "next/image";

import imgMain from "../images/main.jpg";

const abouts = [
  {
    name: "Subtitle 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet. Aliquam nulla facilisi cras fermentum. Viverra nam libero justo laoreet sit.",
    img: imgMain,
  },
  {
    name: "Subtitle 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet. Aliquam nulla facilisi cras fermentum. Viverra nam libero justo laoreet sit.",
    img: imgMain,
  },
  {
    name: "Subtitle 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet. Aliquam nulla facilisi cras fermentum. Viverra nam libero justo laoreet sit.",
    img: imgMain,
    imgHide: true,
  },
];

const AboutSection = (): JSX.Element => {
  return (
    <div id="about" className="flex flex-col items-center bg-slate-300 py-24">
      <p>
        <SectionHeader title="About" />
      </p>
      {abouts.map((about, index) => {
        return index % 2 == 0 ? (
          <div
            key={index}
            className="px-2 lg:w-9/12 mt-16 md:mt-24 md:grid md:grid-cols-2"
          >
            <div className="block">
              <Image src={about.img} alt="Image Description" />
            </div>
            <div className="flex items-center">
              <p className="text-lg pb-3 md:p-5 my-5 md:my-0 text-center md:text-left border-b-1 border-indigo-600 md:border-r-2 md:border-b-0">
                <SubTitle title={about.name} />
                {about.description}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="px-2 lg:w-9/12 mt-16 md:mt-24 md:grid md:grid-cols-2"
          >
            <div className="block md:hidden">
              <Image src={about.img} alt="Image Description" />
            </div>
            <div className="flex items-center">
              <p className="text-lg pb-5 md:p-5 my-3 md:my-0 text-center md:text-right border-b-1 border-indigo-600 md:border-l-2 md:border-b-0">
                <SubTitle title={about.name} />
                {about.description}
              </p>
            </div>
            <div className="hidden md:block">
              <Image src={about.img} alt="Image Description" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutSection;
