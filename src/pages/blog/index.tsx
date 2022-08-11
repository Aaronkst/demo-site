import { PageHeader } from "../../components/Typography";
import Link from "next/link";
import Head from "next/head";

const HeroSection = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>addTech | Blogs</title>
      </Head>
      <div className="h-screen bg-gray-800 flex flex-col justify-center items-center">
        <p>
          <PageHeader title={"Blog"} white={true} />
        </p>
        <div className="lg:w-2/4 mt-5 lg:mt-16">
          <p className="text-center italic  text-white text-4xl mb-8">Blogs</p>
        </div>
        <div className="mt-5 sm:mt-8 sm:flex sm:flex-col sm:justify-center lg:justify-start">
          <div className="rounded-md drop-shadow-lg m-3">
            <Link href="/blog/blog1">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10">
                Blog 1
              </a>
            </Link>
          </div>
          <div className="rounded-md drop-shadow-lg m-3">
            <Link href="/blog/blog2">
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 lg:py-4 lg:text-lg lg:px-10">
                Blog 2
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
