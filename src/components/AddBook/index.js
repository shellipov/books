import React, { useState } from "react";
import book from "../../images/book.jpg";
import video from "../../video/add_image.mp4";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import LabelInput from "../IU/Input/LabelInput";
import Button from "../IU/Button/Button";
import {initialInputs} from '../../constants';
import "./style.scss";

function AddBook() {

  const [inputs, setInputs] = useState(initialInputs);
  const {
    name,
    autors,
    page_number,
    publisher_name,
    year,
    image,
  } = inputs;
  
  const this_year = new Date().getFullYear();
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isImageLoad, setIsImageLoad] = useState(false);

  function changeInputValue({ target: { name, value } }) {
    setError(null);
    setInputs({ ...inputs, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = 0;

    if (inputs.autors.split(" ").length % 2 !== 0) {
      errors++;
      setError("Введите Имя и Фамилию автора через пробел");
    }

    if (inputs.autors.split(" ").find((word) => word.length > 20)) {
      errors++;
      setError("Имя или Фамилия должны быть не длиннее 20 символов");
    }

    if (errors === 0) {
      const data = JSON.parse(window.localStorage.getItem("books"));
      const books = data ? data : [];
      const id = new Date()
        .toJSON()
        .replace(/-/g, "")
        .replace(/:/g, "")
        .replace(/\./g, "");
      books.push({ ...inputs, id: id });
      window.localStorage.setItem("books", JSON.stringify(books));
      setInputs(initialInputs);
      setModalVisible(true);
    }
  };

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          message={"Книга успешно добавлена"}
        />
      )}
      <div className="add_book_page">
        <h1 className="animate__animated animate__slideInDown">Новая книга</h1>
        <form onSubmit={handleSubmit} className="add_book_form">
          <LabelInput
            label="Название книги"
            placeholder="Например: Война и мир"
            type="text"
            name="name"
            onChange={(e) => changeInputValue(e)}
            value={name}
            maxLength={30}
          />

          <LabelInput
            label="Автор книги"
            placeholder="Например: Лев Толстой (Если авторов несколько, введите их через запятую)"
            type="text"
            name="autors"
            onChange={(e) => changeInputValue(e)}
            value={autors}
          >
            {error && <span className="error">Ошибка: {error}</span>}
          </LabelInput>

          <LabelInput
            label="Количесво страниц"
            placeholder="Например: 850"
            type="number"
            name="page_number"
            onChange={(e) => changeInputValue(e)}
            value={page_number}
            min={1}
            max={10000}
          />

          <LabelInput
            label="Название издательства"
            placeholder="Например: Просвещение"
            type="text"
            name="publisher_name"
            onChange={(e) => changeInputValue(e)}
            value={publisher_name}
            maxLength={30}
          />

          <LabelInput
            label="Год издательства"
            placeholder="Например: 1920"
            type="number"
            name="year"
            onChange={(e) => changeInputValue(e)}
            value={year}
            min={1800}
            max={this_year}
          />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-10">
              <LabelInput
                label="Обложка"
                placeholder="Например: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg"
                type="text"
                name="image"
                onChange={(e) => changeInputValue(e)}
                value={image}
              />
              <span className="description">
                Найдите подходящую картинку в интернете и вставте её url{" "}
                <a
                  className="customer fansy_link primary_link"
                  data-fancybox="gallery"
                  href={video}
                >
                  <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
                </a>
              </span>
            </div>
            <div className="col-md-2">
              <img
                className="book"
                src={isImageLoad ? image : book}
                alt="book_image"
              />
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <Button type="submit" color="blue">
              Добавить
            </Button>
          </div>
        </form>
        <img
          onLoad={() => setIsImageLoad(true)}
          onError={() => setIsImageLoad(false)}
          hidden={true}
          src={image}
          alt="book_image"
        />
      </div>
    </>
  );
}

export default AddBook;
