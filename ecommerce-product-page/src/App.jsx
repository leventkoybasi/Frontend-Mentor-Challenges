import { useState } from "react";
import { data } from "../src/data/data";
import minus from "./assets/icon-minus.svg";
import plus from "./assets/icon-plus.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";

function App() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);

  const [slideIndex, setSlideIndex] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);

  const [price, setPrice] = useState("$" + 125 + ".00");
  const [amount, setAmount] = useState(0);

  const { mainImage } = products[value];
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const previousSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };
  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };

  return (
    <>
      <Header
        amount={amount}
        setAmount={setAmount}
        cartIsOpen={cartIsOpen}
        setCartIsOpen={setCartIsOpen}
      />
      {showLightbox && (
        <Lightbox
          products={products}
          slideIndex={slideIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          setShowLightbox={setShowLightbox}
        />
      )}

      <section className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:place-items-center lg:py-20">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={index}
                className={slideIndex === index + 1 ? "relative" : "hidden"}
              >
                <img
                  className=" w-full lg:rounded-2xl cursor-pointer "
                  onClick={() => setShowLightbox(true)}
                  src={item.mainImage}
                  alt=""
                />
                <ul className="lg:hidden">
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

          <div className="hidden lg:block">
            <img
              className=" w-full lg:rounded-2xl cursor-pointer "
              onClick={() => setShowLightbox(true)}
              src={mainImage}
              alt=""
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursor-pointer`}
                key={item.id}
                onClick={() => setValue(index)}
              >
                <img className="w-20" src={item.thumbnail} alt="" />
              </li>
            ))}
          </ul>
        </article>
        <article className="px-8 pb-10">
          <h2 className=" bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
            Sneakers Company
          </h2>
          <h1 className=" text-slate-900 mb-10 font-bold text-3xl lg:text-4xl ">
            Fall Limited Edition Sneakers
          </h1>
          <p className=" text-slate-600 mb-10 leading-relaxed">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className=" flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className=" text-slate-900 font-bold text-2xl">{price}</li>
              <li className=" bg-orange-100 py-1 px-2 text-orange-400  tracking-wide text-sm font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>

            <p className=" text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>
          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className=" flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li className=" cursor-pointer" onClick={handleMinus}>
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                className=" cursor-pointer"
                onClick={() => setAmount(amount + 1)}
              >
                <img src={plus} alt="" />
              </li>
            </ul>
            <div className="lg:flex-1">
              <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full lg:mt-0 hover:bg-orange-600 transition-all duration-200">
                <AiOutlineShoppingCart /> Add to card
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
