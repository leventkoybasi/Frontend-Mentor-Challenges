import React, { useState, useEffect } from "react";
import "../index.css";
import iconDelete from "../assets/icon-delete.svg";
import thumbnail from "../assets/image-product-1-thumbnail.jpg";
import iconThumbsup from "../assets/icon-thumbsup.svg";

export default function Cart({ amount, setAmount, setCartIsOpen }) {
  const text = "Autumn Limited Edition Sneakers";
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    setAmount(0);
  };

  const handleCheckout = () => {
    setIsCheckedOut(true);
  };

  useEffect(() => {
    if (isCheckedOut) {
      const timer = setTimeout(() => {
        setCartIsOpen(false);
        setAmount(0);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCheckedOut, setCartIsOpen]);

  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{ zIndex: 1000 }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
        {!isCheckedOut ? (
          <div className="cardBox flex items-center justify-between">
            <img className="rounded-xl w-14" src={thumbnail} alt="" />
            <ul className="cartCheckout">
              <li className="text-slate-600 text-sm">{`${text.substring(
                0,
                19
              )}...`}</li>
              <li className="text-slate-600 text-sm">
                $125.00 x {amount}{" "}
                <span className="text-slate-900 font-bold">{`$${
                  125 * amount
                }.00`}</span>
              </li>
            </ul>
            <button onClick={handleDelete}>
              <img src={iconDelete} alt="" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <h2 className="flex items-center">
              Your Purchase Transaction is Completed...
              <img
                className="h-10 w-10 img-svg"
                style={{ fill: "#F97316" }}
                src={iconThumbsup}
                alt="everythingOk"
              />
            </h2>
          </div>
        )}

        <button
          className="bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </article>
    </>
  );
}
