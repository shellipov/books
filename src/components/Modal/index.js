import React, { useRef } from "react";
import ReactDom from "react-dom";
import {useHistory} from 'react-router-dom';
import Button from "../IU/Button/Button";
import "./style.scss";

function Modal({ setModalVisible, message }) {

  const history = useHistory();
  const modalWindow = useRef(null)

  function close() {
    modalWindow.current.classList.remove("animate__zoomIn");
    modalWindow.current.classList.add("animate__zoomOut");
    setTimeout(() =>{
      setModalVisible(false);
    },220)
  }

  function toBookList() {
    modalWindow.current.classList.remove("animate__zoomIn");
    modalWindow.current.classList.add("animate__zoomOut");
    setTimeout(() =>{
      history.push('/')
    },220)
    
  }
  return ReactDom.createPortal(
    <>
      <div className="modal_background">
        <div ref={modalWindow} className="modal_window animate__animated animate__zoomIn">

          <div className="row justify-content-center ">
            <h3 className="massage">{message}</h3>
          </div>

          <div className="row justify-content-center">
            <Button
              onClick={close}
            >
              Ok
            </Button>

            <Button
              onClick={toBookList}
            >
              К списку книг
            </Button>

          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default Modal;
