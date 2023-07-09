import { useState } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import CartVisualPage from "./CartVisualPage";
import Modal from "../../Modal/Modal";
import storeItems from "../../data/items.json";
import _ from "lodash";
import { useShoppingCart } from "../../store/ShoppingCartContext";
const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const handleCart = () => {
    setShowCart(!showCart);
  };
  const handleShowCart = () => {
    setShowCart(false);
  };
  const { cartQuantity, cartItems } = useShoppingCart();

  const filteredItems = storeItems.filter(function (j) {
    return (
      cartItems.filter(function (i) {
        return i.id == j.id;
      }).length !== 0
    );
  });

  const mergedItems = _.map(filteredItems, function (item) {
    return _.assign(item, _.find(cartItems, ["id", item.id]));
  });
  const total = mergedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);
  console.log(total);
  return (
    <div>
      {!showCart && (
        <div
          className="w-[8rem] h-[3rem] border bg-gray-100 rounded-[1.5rem] flex items-center justify-center hover:border-2 hover:border-gray-600 relative"
          onClick={handleCart}
        >
          <i>
            <PiShoppingCartFill />
          </i>
          <p className="ml-1 font-bold">${total}</p>
          <div className="absolute right-0 top-0 bg-red-700 text-white w-[15px] h-[15px] rounded-[7.5px] text-xs text-center">{cartQuantity}</div>
        </div>
      )}
      {showCart && (
        <CartVisualPage setShowCart={handleShowCart} total={total} />
      )}
      {showCart && <Modal handleShowCart={handleShowCart} />}
    </div>
  );
};

export default Cart;
