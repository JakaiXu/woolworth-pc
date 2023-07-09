import { useShoppingCart } from "../../store/ShoppingCartContext";

interface ItemCardProps {
  id: number;
  name: string;
  price: string;
  imgUrl: string;
}
const ItemCard = ({ id, name, price, imgUrl }: ItemCardProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <div className="border rounded-xl w-[15rem] h-[30rem] mb-5">
      <div>
        <div className="justify-center flex h-[40%] m-5">
          <img className="rounded-[50%]" alt="food photos" src={imgUrl}></img>
        </div>
        <div className="h-[50%] pl-2 pt-5">
          <h2 className="font-bold text-2xl">${price}</h2>
          <h2>${price}/Each</h2>
          <p className="mt-2 text-lg font-bold">{name}</p>
        </div>
      </div>
      {/* {state.quantity > 36 && <p className="text-red-500">36 item limit</p>} */}
      <div className="px-3 ">
        {quantity === 0 ? (
          <button
            onClick={() => {
              increaseCartQuantity(id);
            }}
            type="button"
            className="mt-3 bg-green-600 w-full h-10 rounded text-white"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex items-center border rounded h-10 mt-5">
            <button
              type="button"
              className="bg-green-600 text-white w-[15%] h-full rounded-l"
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <input
              title="quantity"
              max="36"
              type="number"
              value={quantity}
              onChange={() => getItemQuantity(id)}
              // onChange={(e) => {
              //   if (+e.target.value === 0) {
              //     setShowAddButton(false);
              //   }
              //   if (+e.target.value > 36) {
              //     dispatch({ type: "inputchange", payload: 36 });
              //   } else {
              //     dispatch({ type: "inputchange", payload: +e.target.value });
              //   }
              // }}
              className="w-[70%] bg-gray-200 h-full text-center"
            />
            <button
              type="button"
              onClick={() => increaseCartQuantity(id)}
              className="bg-green-600 text-white w-[15%] h-full rounded-r"
            >
              +
            </button>
          </div>
        )}

        <button
          type="button"
          className="border h-10 rounded border-gray-800 w-full my-3"
        >
          Save to list
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
