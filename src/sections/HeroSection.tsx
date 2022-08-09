import { PageHeader } from "../components/Typography";

const HeroSection = (): JSX.Element => {
  const scrollNext = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
      <p>
        <PageHeader title="Page Title" white={true} />
      </p>
      <div className="md:w-2/4 mt-5 lg:mt-16">
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
        <div className="rounded-md drop-shadow-lg">
          <a
            href="/quote"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get Quote
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            onClick={scrollNext}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Learn More &darr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
