import { useState, useEffect, useCallback } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CiShare1 } from "react-icons/ci";
import { PiMapPin } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import classNames from "classnames";
import { AiOutlineMenu } from "react-icons/ai";
const Navibar = () => {
  const navClass = classNames(
    "border-t border-b mt-[1rem] h-[4rem] shadow flex items-center font-bold justify-around navMain"
  );
  const [showNavMain, setShowNavMain] = useState(true);
  const [showNavDeli, setShowNavDeli] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show, setShow] = useState(false);
  const handleShowLabel = () => {
    setShow(!show);
  };
  const controlNavMain = useCallback(() => {
    if (typeof Window !== "undefined") {
      if (window.pageYOffset > lastScrollY) {
        setShowNavDeli(false);
      } else {
        setShowNavDeli(true);
      }

      if (window.pageYOffset > lastScrollY + 50) {
        setShowNavMain(false);
      } else {
        setShowNavMain(true);
      }
      setLastScrollY(lastScrollY);
    }
  }, [lastScrollY]);
  useEffect(() => {
    if (typeof Window !== "undefined") {
      window.addEventListener("scroll", controlNavMain);
      return () => {
        window.removeEventListener("scroll", controlNavMain);
      };
    }
  }, [controlNavMain]);
  return (
    <div className="sticky top-[6rem] mr-1 w-[100%]">
      <div
        className={`flex justify-between  w-full ${navClass}  ${
          !showNavMain && "hidden"
        }`}
      >


        <div className="flex justify-start   w-[70%] overflow-hidden">
          <div className="flex items-center mr-10 min-w-max" onClick={handleShowLabel}>
            <i className="mx-1">
              <AiOutlineMenu />
            </i>
            Browse Products
          </div>
          <div className="flex items-center mr-10 min-w-max">
            Specials & catalogue{" "}
            <i className="mx-1">
              <SlArrowDown />
            </i>
          </div>
          <div className="flex items-center mr-10 min-w-max">
            Recipes & ideas{" "}
            <i className="mx-1">
              <SlArrowDown />
            </i>
          </div>
          <div className="flex items-center mr-10 min-w-max">
            A better tomorrow{" "}
            <i className="mx-1">
              <SlArrowDown />
            </i>
          </div>
          <div className="flex items-center mr-10 min-w-max">
            Ways to shop{" "}
            <i className="mx-1">
              <SlArrowDown />
            </i>
          </div>
          <div className="flex items-center mr-10 min-w-max">
            Help{" "}
            <i className="mx-1">
              <SlArrowDown />
            </i>
          </div>

        </div>


        <div className="flex justify-end w-[30%]">
          <div className="flex items-center  min-w-max">
            Shop for business{" "}
            <i className="mx-1">
              <CiShare1 />
            </i>
          </div>
          <div className="flex items-center store">
            <i className="mx-1">
              <PiMapPin />
            </i>
            Store
          </div>
        </div>


      </div>

      <div
        className={`md:flex h-[3rem] bg-gray-100 shadow nav-delivery ${
          !showNavDeli && "hidden"
        }`}
      >
        <div className="flex justify-between md:w-[50%] sm:w-[100%]">
          <div className="flex items-center">
            <i className="mx-[2rem]">
              <TbTruckDelivery />
            </i>
            <p className="text-[rgb(19,108,52)] underline min-w-max">
              Delivery to: Set your Delivery address
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[rgb(19,108,52)] underline choose">Choose</p>
            <i className="-rotate-90 mx-1">
              <SlArrowDown />
            </i>
          </div>
        </div>
        <hr className="border border-gray-300 h-8 text-center mx-4 mt-2 divider-select" />
        <div className="flex justify-between md:w-[50%] sm:w-[100%]">
          <div className="flex items-center">
            <i className="mx-[2rem]">
              <BsClock />
            </i>
            <p className="text-[rgb(19,108,52)] underline  min-w-max">
              Select a time: View available times
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-[rgb(19,108,52)] underline choose">Choose</p>
            <i className="-rotate-90 mx-1">
              <SlArrowDown />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
