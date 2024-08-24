import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modalBackdrop">
      <div className="modal">{children}</div>
    </div>,
    document.body
  );
}

export default Modal;
