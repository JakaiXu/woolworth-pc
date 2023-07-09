import emptyCart from "../../assets/empty-cart.svg";
import { SlArrowDown } from "react-icons/sl";
import classNames from "classnames";
type ShowSummary = {
  showSummary: boolean;
};
const EmptyCartContent = ({ showSummary }: ShowSummary) => {
  const cartHeight = showSummary ? "h-[68vh]" : "h-[82vh]";
  const cartMiddleClass = classNames(
    "flex flex-col bg-gray-100 items-center",
    cartHeight
  );
  return (
    <div className={cartMiddleClass}>
      <img src={emptyCart} alt="empty-cart" className="pt-[8vh] pb-[2vh]"></img>
      <p className="font-bold text-2xl text-gray-800 py-[2vh]">
        Your cart is empty
      </p>
      <p>Continue shopping to browse and search for items.</p>
      <div className="bg-green-600 text-white w-[12.5rem] rounded-lg justify-center flex h-10 items-center mt-[2vh]">
        <p className="mr-1">Continue shopping </p>
        <i className="-rotate-90 text-xs">
          <SlArrowDown />
        </i>
      </div>
    </div>
  );
};

export default EmptyCartContent;
