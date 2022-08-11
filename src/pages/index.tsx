import { PageHeader } from "../components/Typography";
import Link from "next/link";

const Hub = (): JSX.Element => {
  const scrollNext = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
      <p>
        <PageHeader title={"addTech | Demo"} white={true} />
      </p>
      <div className="lg:w-2/4 mt-5 lg:mt-16">
        <p className="text-center italic  text-white text-4xl mb-8">
          Available Packages
        </p>
      </div>
      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div className="rounded-md drop-shadow-lg m-3">
          <Link href="/base" passHref>
            <a
              target="_blank"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10"
            >
              Base Package
            </a>
          </Link>
        </div>
        <div className="rounded-md drop-shadow-lg m-3">
          <Link href="/medium" passHref>
            <a
              target="_blank"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10"
            >
              Medium Package
            </a>
          </Link>
        </div>
        <div className="rounded-md drop-shadow-lg m-3">
          <Link href="/premium" passHref>
            <a
              target="_blank"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10"
            >
              Premium Package
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hub;
