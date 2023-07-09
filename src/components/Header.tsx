import logo from "../assets/icon-header-logo-only.webp";
import MyAccount from "./Home/MyAccount";
import Cart from "./Cart/Cart";
import { SlArrowDown } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import DummyCart from "./Home/DummyCart";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShowDummy = () => {
    setShow(!show);
  };
  return (
    <div className="sticky top-0 z-50 bg-white h-[100px] pt-6 shadow-lg">
      <div className="flex items-center justify-around ">
        <div className="flex items-center">
          <img src={logo} alt="woolworth-logo " />
          <hr className="border border-gray-300 h-8 text-center mx-4" />
          <div className="flex items-center ">
            <p className="pr-2" onClick={handleShowDummy}>
              Everyday & Other Services{" "}
            </p>
            
            <i className="hover:rotate-180">
              <SlArrowDown />
            </i>
          </div>
          
        </div>
        <div className="relative">
          <input
            className="border ml-[3rem] h-[3rem] px-[1rem] w-[150%] rounded-lg bg-gray-100 grow"
            placeholder="Search products, receips & ideas"
          />
          <i
            className="
        absolute right-[-64%] top-[30%]"
          >
            <FiSearch />
          </i>
        </div>
        <div className="ml-[10%]">
          <MyAccount />
        </div>
        <div className="mr-5">
          <Cart />
        </div>
      </div>
      {show && <div className="ml-[150px]"><DummyCart /></div>}
    </div>
  );
};

export default Header;
