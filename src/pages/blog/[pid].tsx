import { PageHeader, SubTitle } from "../../components/Typography";
import { useRouter } from "next/router";
import Head from "next/head";

const DynamicBlog = (): JSX.Element => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>
          addTech |{" "}
          {pid ? (Array.isArray(pid) ? pid.join("") : pid) : "Empty Blog"}
        </title>
      </Head>
      <div className="bg-gray-800 flex flex-col py-16 items-center">
        <p>
          <PageHeader
            title={
              pid ? (Array.isArray(pid) ? pid.join("") : pid) : "Empty Blog"
            }
            white={true}
          />
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="py-5">
          <p>
            <SubTitle title={"Author John"} />
          </p>
        </div>
        <div className="p-5 w-9/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit
          amet dictum sit amet. Aliquam nulla facilisi cras fermentum. Viverra
          nam libero justo laoreet sit.
        </div>
      </div>
    </>
  );
};

export default DynamicBlog;
