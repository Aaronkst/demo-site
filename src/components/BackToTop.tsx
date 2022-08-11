import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type Props = {
  showButton: boolean;
};

const BackToTop = ({ showButton }: Props): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          title="Top"
          type="button"
          className="hidden lg:inline-block py-3 px-4 bg-pink-600 text-white font-medium rounded-full leading-tight drop-shadow-md hover:bg-pink-700 hover:drop-shadow-lg focus:bg-pink-700 focus:drop-shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:drop-shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed z-50"
        >
          <FontAwesomeIcon icon={faArrowUp} width={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;
