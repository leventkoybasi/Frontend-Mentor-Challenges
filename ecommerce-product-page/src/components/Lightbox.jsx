import close from "../assets/icon-close.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Lightbox({
  products,
  slideIndex,
  nextSlide,
  previousSlide,
  setShowLightbox,
}) {
  return (
    <>
      <article className="bg-black bg-opacity-75 fixed top-0 right-0 left-0 bottom-0 z-50">
        <button onClick={() => setShowLightbox(false)}>
          <img className="w-10 absolute top-10 right-10" src={close} alt="" />
        </button>
        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                className="big-image lg:w-full lg:rounded-2xl"
                src={item.mainImage}
                alt=""
              />
              <ul>
                <li>
                  <button
                    className="bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                    onClick={previousSlide}
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    className="bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={nextSlide}
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default Lightbox;
