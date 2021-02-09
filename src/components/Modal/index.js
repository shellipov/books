import React, { useRef } from "react";
import ReactDom from "react-dom";
import {useHistory} from 'react-router-dom';
import "./style.scss";

function Modal({ setModalVisible, message }) {

  const history = useHistory();
  const modalWindow = useRef(null)

  function close() {
    modalWindow.current.classList.remove("animate__zoomIn");
    modalWindow.current.classList.add("animate__zoomOut");
    setTimeout(() =>{
      setModalVisible(false);
    },350)
  }

  function toBookList() {
    modalWindow.current.classList.remove("animate__zoomIn");
    modalWindow.current.classList.add("animate__zoomOut");
    setTimeout(() =>{
      history.push('/')
    },350)
    
  }
  return ReactDom.createPortal(
    <>
      <div className="modal_background">
        <div ref={modalWindow} className="modal_window animate__animated animate__zoomIn">

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
