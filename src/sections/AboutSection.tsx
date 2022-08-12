import { SectionHeader, SubTitle } from "../components/Typography";
import Image from "next/image";

import imgMain from "../images/main.jpg";
import { useState } from "react";

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
  const [imgError, setImgError] = useState(false);
  return (
    <div className="flex flex-col items-center bg-indigo-100 py-24">
      <p>
        <SectionHeader title="About" />
      </p>
      {abouts.map((about, index) => {
        return index % 2 == 0 ? (
          <div
            key={index}
            className="px-2 lg:w-9/12 mt-16 lg:mt-24 lg:grid lg:grid-cols-2"
          >
            <div className="block">
              {!imgError && (
                <Image
                  src={about.img}
                  alt="Image Description"
                  onError={() => {
                    //!imgError && setImgError(true);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              )}
              {/*imgError && <img src={about.img.src} alt="Image Description" />*/}
            </div>
            <div className="flex items-center">
              <p className="text-lg pb-3 lg:p-5 my-5 lg:my-0 text-center lg:text-left border-b-1 border-indigo-600 lg:border-r-2 lg:border-b-0">
                <SubTitle title={about.name} />
                {about.description}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="px-2 lg:w-9/12 mt-16 lg:mt-24 lg:grid lg:grid-cols-2"
          >
            <div className="block lg:hidden">
              {!imgError && (
                <Image
                  src={about.img}
                  alt="Image Description"
                  onError={() => {
                    //!imgError && setImgError(true);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              )}
              {/*imgError && <img src={about.img.src} alt="Image Description" />*/}
            </div>
            <div className="flex items-center">
              <p className="text-lg pb-5 lg:p-5 my-3 lg:my-0 text-center lg:text-right border-b-1 border-indigo-600 lg:border-l-2 lg:border-b-0">
                <SubTitle title={about.name} />
                {about.description}
              </p>
            </div>
            <div className="hidden lg:block">
              {!imgError && (
                <Image
                  src={about.img}
                  alt="Image Description"
                  onError={() => {
                    //!imgError && setImgError(true);
                  }}
                  onContextMenu={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                />
              )}
              {/*imgError && <img src={about.img.src} alt="Image Description" />*/}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutSection;
