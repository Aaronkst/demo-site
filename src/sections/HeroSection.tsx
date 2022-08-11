import { PageHeader } from "../components/Typography";
import Link from "next/link";

type IProps = {
  base?: Boolean;
  title?: string;
};

const HeroSection = ({ base = false, title }: IProps): JSX.Element => {
  const scrollNext = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
      <p>
        <PageHeader
          title={base ? "Base Package" : title + " Package" || "Page Title"}
          white={true}
        />
      </p>
      <div className="lg:w-2/4 mt-5 lg:mt-16">
        <p className="text-center italic  text-white text-4xl mb-8">
          &quot;Lorem ipsum slogan&quot;
        </p>
        <p className="text-lg lg:text-xl text-white py-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit
          amet dictum sit amet. Aliquam nulla facilisi cras fermentum. Viverra
          nam libero justo laoreet sit.
        </p>
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        {!base && (
          <div className="rounded-md drop-shadow-lg">
            <Link href="/quote">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10">
                Get Quote
              </a>
            </Link>
          </div>
        )}
        {base && (
          <div className="rounded-md drop-shadow-lg">
            <a
              href="mailto:dev.kst.aaron@gmail.com"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10"
            >
              Get Started
            </a>
          </div>
        )}
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            onClick={scrollNext}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 lg:py-4 lg:text-lg lg:px-10"
          >
            Learn More &darr;
          </button>
        </div>
      </div>
      {title == "Premium" && (
        <>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <div className="rounded-md drop-shadow-lg">
              <Link href="https://www.wix.com/blog" passHref>
                <a
                  target="_blank"
                  className="w-full flex items-center justify-center lg:mt-5 border border-transparent text-base font-medium rounded-md text-white hover:underline lg:py-4 lg:text-lg lg:px-10"
                >
                  View Blogs &rarr;
                </a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HeroSection;
