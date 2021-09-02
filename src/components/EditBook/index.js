import React, { useState, useEffect } from "react";
import book from "../../images/book.jpg";
import Modal from "../Modal";
import { useParams } from "react-router-dom";
import LabelInput from "../IU/Input/LabelInput";
import Button from "../IU/Button/Button";
import { initialInputs } from "../../constants";

import "./style.scss";

function EditBook() {
  const { id } = useParams();

  const [inputs, setInputs] = useState({ initialInputs });

  const {
    name,
    autors,
    page_number,
    publisher_name,
    year,
    image,
  } = inputs;
  const that_year  = new Date().getFullYear();
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);
  const [isImageLoad, setIsImageLoad] = useState(false);

  useEffect(() => {
    const editableBook = JSON.parse(window.localStorage.getItem("books")).find(
      (book) => book.id === id
    );
    setInputs(editableBook);
  }, [id]);

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
      const books = JSON.parse(window.localStorage.getItem("books"));
      const EditableBook = books.find((book) => book.id === id);
      const indexEditableBook = books.indexOf(EditableBook);
      books.splice(indexEditableBook, 1, inputs);
      window.localStorage.setItem("books", JSON.stringify(books));
      setModalVisible(true);
    }
  };

  return (
    <>
      {modalVisible && (
        <Modal
          setModalVisible={setModalVisible}
          message={"Изменения успешно внесены"}
        />
      )}
      <div className="add_book_page">
        <h1 className="animate__animated animate__slideInDown">
          Редакторовать
        </h1>
        <form onSubmit={handleSubmit} className="add_book_form">
          <LabelInput
            label="Название книги"
            placeholder="Например: Война и мир"
            type="text"
            name="name"
            onChange={(e) => changeInputValue(e)}
            // defaultValue={name}
            value={name}
            maxLength={30}
          />

          <LabelInput
            label="Автор книги"
            placeholder="Например: Лев Толстой (Если авторов несколько, введите их через запятую)"
            type="text"
            name="autors"
            onChange={(e) => changeInputValue(e)}
            // defaultValue={autors}
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
            // defaultValue={page_number}
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
            // defaultValue={publisher_name}
            value={publisher_name}
            maxLength={30}
          />

          <LabelInput
            label="Год издательства"
            placeholder="Например: 1920"
            type="number"
            name="year"
            onChange={(e) => changeInputValue(e)}
            // defaultValue={year}
            value={year}
            min={1800}
            max={that_year}
          />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-10">
              <LabelInput
                label="Обложка"
                placeholder="Например: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg"
                type="text"
                name="image"
                onChange={(e) => changeInputValue(e)}
                // defaultValue={image}
                value={image}
              >
                <span className="description">
                  Найдите подходящую картинку в интернете и вставте её url{" "}
                </span>
              </LabelInput>
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
              Сохранить
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

export default EditBook;
