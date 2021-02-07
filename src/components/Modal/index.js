import React from "react";
import ReactDom from "react-dom";
import {useHistory} from 'react-router-dom';
import "./style.scss";

function Modal({ setModalVisible, message }) {

  const history = useHistory();

  function close() {
    setModalVisible(false);
  }

  function toBookList() {
    history.push('/')
  }

  return ReactDom.createPortal(
    <>
      <div className="modal_background">
        <div className="modal_window">

          <div className="row justify-content-center ">
            <h2 className="massage">{message}</h2>
          </div>

          <div className="row justify-content-center">
            <button
              className="btn btn-primary btn-sm add_book_botton"
              type="button"
              onClick={close}
            >
              OK
            </button>

            <button
              className="btn btn-primary btn-sm add_book_botton"
              type="button"
              onClick={toBookList}
            >
              К списку книг
            </button>

          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default Modal;
