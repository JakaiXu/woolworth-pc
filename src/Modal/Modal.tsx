import { createPortal } from "react-dom";
type ShowCartHandler = {
  handleShowCart: () => void;
};
function Modal({ handleShowCart }: ShowCartHandler) {
  const modalEl = document.getElementById("modal");
  return modalEl
    ? createPortal(
        <div>
          <div
            className="fixed bg-gray-200 inset-0 opacity-[40%]"
            onClick={handleShowCart}
          ></div>
        </div>,
        modalEl
      )
    : null;
}

export default Modal;
