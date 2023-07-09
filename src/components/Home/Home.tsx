import classNames from "classnames";
import { BiSort } from "react-icons/bi";
import { RiArrowDownSFill } from "react-icons/ri";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import ItemsBox from "./ItemsBox";
const Home = () => {
  const paternClass = classNames(
    "border border-gray-700 px-5 h-[40px] rounded-[3.125rem] flex items-center"
  );
  return (
    <div className="mt-16 mx-10">
      <div className="sticky top-[300px]">
        <h2 className="text-3xl text-gray-700 font-bold my-[1rem] text-left">
          Winter Fruit & Veg
        </h2>
        <div className="flex justify-between">
          <div className={paternClass}>
            <BiSort />
            Sort by
          </div>
          <div className={paternClass}>In stock</div>
          <div className={paternClass}>Specials</div>
          <div className={paternClass}>
            Sold by <RiArrowDownSFill />
          </div>
          <div className={paternClass}>
            Brand <RiArrowDownSFill />
          </div>
          <div className={paternClass}>
            Allergens <RiArrowDownSFill />
          </div>
          <div className={paternClass}>
            Dietary and Lifestyle <RiArrowDownSFill />
          </div>
          <div className={paternClass}>
            Health Star Rating <RiArrowDownSFill />
          </div>
          <div className={paternClass}>
            <TbAdjustmentsHorizontal />
            All filters
          </div>
        </div>
        <p className="my-5">1-36 of 80 Products</p>
        <div >
          <ItemsBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
