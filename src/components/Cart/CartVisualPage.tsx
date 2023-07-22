import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { SlArrowDown } from "react-icons/sl";
import CheckOut from "./CheckOut";
import ShowSummay from "./ShowSummay";
import EmptyCartContent from "./EmptyCartContent";
import UnEmptyCartContent from "./UnEmptyCartContent";
import { useShoppingCart } from "../../store/ShoppingCartContext";

import _ from "lodash";
type ShowCartProps = {
  setShowCart: () => void;
  total: number;
};
const CartVisualPage: React.FC<ShowCartProps> = ({ setShowCart, total }) => {
  const handleClose = () => {
    setShowCart();
  };
  const [showSummary, setShowSummary] = useState(false);
  const handleShowSummary = () => {
    setShowSummary(!showSummary);
  };
  const { cartQuantity } = useShoppingCart();

  return (
    <div className="absolute right-0 top-0 h-[100vh] w-[31.25rem] borderz-100 bg-white">
      <div className="flex items-center justify-between p-2 border-b-2 border-gray-800 border-dotted h-[6rem]">
        <div className="pl-4" onClick={handleClose}>
          <i className="text-4xl">
            <RxCross2 />
          </i>
          <p>Close</p>
        </div>
        <hr className="border border-gray-300 h-[50px]" />
        <h2 className="text-2xl text-gray-800 font-bold pr-[10rem]">
          Your Cart
        </h2>
        <div>
          <CheckOut />
        </div>
      </div>
      {cartQuantity === 0 ? (
        <EmptyCartContent showSummary={showSummary} />
      ) : (
        <UnEmptyCartContent />
      )}
      <div
        className="border shadow-md text-center text-green-700 font-bold flex justify-center items-center"
        onClick={handleShowSummary}
      >
        Order summary
        <i className="rotate-180 text-xs ml-2">
          <SlArrowDown />
        </i>
      </div>
      {showSummary && <ShowSummay />}
      <div className="h-[10rem]">
        <div className="flex justify-between px-2 items-center">
          <div className="pt-2 pl-2">
            <p>Your Cart</p>
            <p className="text-2xl font-bold">${total}</p>
            <p className="text-xs">Excluding service fees</p>
          </div>
          <div>
            <CheckOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartVisualPage;
