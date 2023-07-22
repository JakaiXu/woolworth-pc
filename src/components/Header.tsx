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
    <div className="sticky top-0 z-50 bg-white h-[100px] pt-6 shadow-lg w-[100vw] flex justify-between items-center">


      <div className="flex items-center justify-between ">
        <div className="flex items-center w-[350px] ml-5">
          <img src={logo} alt="woolworth-logo " />
          <hr className="border border-gray-300 h-8 text-center mx-4" />
          <div className="flex items-center w-[220px] text-[14px]">
            <p className="pr-2" onClick={handleShowDummy}>
              Everyday & Other Services{" "}
            </p>

            <i className="hover:rotate-180">
              <SlArrowDown />
            </i>
          </div>
        </div>
        </div>

        <div className="relative search-bar ">
          <input
            className="border h-[3rem] px-[1rem] rounded-lg bg-gray-100 w-full "
            placeholder="Search products, receips & ideas "
          />
          <i
            className="
        absolute right-2 top-4"
          >
            <FiSearch />
          </i>
        </div>


        <div className="flex">
          <div className="ml-2">
            <MyAccount />
          </div>
          <div className="mr-4 ml-2">
            <Cart />
          </div>
        </div>



      
      {show && (
        <div className="ml-[150px]">
          <DummyCart />
        </div>
      )}
    </div>
  );
};

export default Header;
