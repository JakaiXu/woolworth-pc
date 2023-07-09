interface InitialState {
  name: string;
  quantity: number;
  price: number;
  id: number;
}
export type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "inputchange"; payload: number };

const addFoodsReducer = (state: InitialState, action: ActionType) => {
  let newState;
  switch (action.type) {
    case "increment":
      newState = {
        ...state,
        quantity: state.quantity + 1,
        price: state.price,
        id: state.id,
        name: state.name,
      };
      break;
    case "decrement":
      newState = {
        ...state,
        quantity: state.quantity - 1,
        price: state.price,
        id: state.id,
        name: state.name,
      };
      break;
    case "inputchange":
      newState = {
        ...state,
        quantity: action.payload,
        price: state.price,
        id: state.id,
        name: state.name,
      };
      break;
    default:
      throw new Error();
  }
  return newState;
};
export { addFoodsReducer };
