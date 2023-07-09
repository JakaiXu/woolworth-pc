import React from "react";
import storeItems from "../../data/items.json";
import { useShoppingCart } from "../../store/ShoppingCartContext";
type CartItemProps = {
  id: number;
  quantity: number;

};

const ItemInCart = ({ id, quantity }: CartItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
   
  } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  const total = (item.price * quantity).toFixed(2)

  
  return (
    <div className="m-2 border-b pb-5 relative">
      <div className="flex items-center ">
        <img
          src={item.imgUrl}
          alt="seletedImages"
          className="w-[80px] mx-3 mt-3"
        />
        <h3 className="font-bold">{item.name}</h3>
      </div>
      <div className="pl-[100px]">
        <button
          onClick={() => {
            decreaseCartQuantity(id);
          }}
          type="button"
          className=" bg-green-600 w-[8%] h-8 rounded-l text-white"
        >
          -
        </button>
        <input
          title="quantity"
          max="36"
          type="number"
          value={quantity}
          className="w-[70px] bg-gray-100 h-8 border-y text-center pl-4"
          onChange={() => getItemQuantity(id)}
        />
        <button
          onClick={() => {
            increaseCartQuantity(id);
          }}
          type="button"
          className="bg-green-600 w-[8%] h-8 rounded-r text-white"
        >
          +
        </button>

        <p className="absolute right-5 bottom-10 text-2xl font-bold"><span className="text-xl">$</span>{total}</p>
      </div>
    </div>
  );
};

export default ItemInCart;
