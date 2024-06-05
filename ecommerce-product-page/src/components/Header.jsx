import { useState } from "react";
import Cart from "./Cart";
import logo from "../assets/logo.svg";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";
import avatar from "../assets/image-avatar.png";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <header className=" relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <ul className="flex items-center justify-start gap-4">
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className="lg:hidden">
                <img className=" cursor-pointer" src={menu} alt="menu" />
              </li>
            )}
            {isOpen && (
              <li onClick={() => setIsOpen(false)} className="lg:hidden close">
                <img className=" cursor-pointer w-6" src={close} alt="menu" />
              </li>
            )}
            <li>
              <img src={logo} alt="logo" />
            </li>
          </ul>

          <nav className={isOpen ? "open" : undefined}>
            <ul className="">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4">
            <li>
              <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className="text-2xl text-slate-600" />
              </button>
            </li>
            <li>{cartIsOpen && <Cart />}</li>
            <li>
              <img className="w-12 rounded-full" src={avatar} alt="image" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
export default Header;
