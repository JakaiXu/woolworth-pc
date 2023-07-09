import { MdPlaylistAdd, MdDelete } from "react-icons/md";
import { useShoppingCart } from "../../store/ShoppingCartContext";
import ItemInCart from "./ItemInCart";

const UnEmptyCartContent = () => {
  const { cartQuantity, cartItems,} = useShoppingCart();

  return (
    <div className="bg-gray-100 h-[82vh] ">
      <p className="text-right py-5 pr-5"><span className="pr-1 font-bold">{cartQuantity}</span>item(s)</p>
      <div className="m-5 shadow bg-white">
        <div className="h-[60%]">
          {cartItems.map((item) => (
            <ItemInCart key={item.id} {...item} />
          ))}
        </div>
        <div className="flex h-[40%] items-center h-[50px]">
          <div className="w-[50%] text-center text-green-700 font-bold flex items-center justify-center bg-white ">
            Save as a list{" "}
            <i className="text-xl ml-2">
              <MdPlaylistAdd />
            </i>
          </div>
          <hr className="border h-[2rem] " />
          <div  className="w-[50%] text-center text-green-700 font-bold flex items-center justify-center bg-white">
            Remove all{" "}
            <i className="ml-2 text-lg">
              <MdDelete />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnEmptyCartContent;
