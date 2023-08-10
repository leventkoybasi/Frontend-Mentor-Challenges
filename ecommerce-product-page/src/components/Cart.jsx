import React from "react";
import iconDelete from "../assets/icon-delete.svg";
import thumbnail from "../assets/image-product-1-thumbnail.jpg";

export default function Cart() {
  const text = "Autumn Limited Edition Sneakers";
  return (
    <>
      <article
        className="bg-white rounded-2xl shadow-2xl p-8 absolute right-8 top-32 left-8 lg:w-96 lg:left-auto lg:top-20"
        style={{ zIndex: 1000 }}
      >
        <h2 className="border-b border-slate-400 font-bold pb-2 mb-8">Cart</h2>
        <div className="flex items-center justify-between">
          <img className="  rounded-xl w-14" src={thumbnail} alt="" />
          <ul>
            <li className=" text-slate-600 text-sm">{`${text.substring(
              0,
              19
            )}...`}</li>
            <li className=" text-slate-600 text-sm">
              $125.00 x 3{" "}
              <span className="text-slate-900 font-bold">$375.00</span>
            </li>
          </ul>
          <button>
            <img src={iconDelete} alt="" />
          </button>
        </div>

        <button className=" bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full hover:bg-orange-600 transition-all duration-200">
          Checkout
        </button>
      </article>
    </>
  );
}
