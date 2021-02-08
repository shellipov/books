import React, { useState, useEffect } from "react";
import book from "../../images/book.jpg";

import Modal from "../Modal";
import { useParams } from "react-router-dom";
import "./style.scss";

function EditBook() {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    book_name: "",
    autors: "",
    page_number: "",
    publisher_name: "",
    year_of_publishing: "",
    book_image: "",
  });

  const {
    book_name,
    autors,
    page_number,
    publisher_name,
    year_of_publishing,
    book_image,
  } = inputs;
  const year = new Date().getFullYear();
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

    if (inputs.autors.split(' ').length%2 !== 0) {
      errors++;
      setError("Введите Имя и Фамилю автора через пробел");
    }

    if (inputs.autors.split(' ').find(word => word.length > 20)) {
      errors++;
      setError("Имя или Фамилия не должны быть длиннее 20 символов");
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
        <h1>Редактор книг</h1>
        <span className="book_id">Книга - {id}</span>
        <form onSubmit={handleSubmit} className="add_book_form">
          <label>
            Название книги
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: Война и мир"
              type="text"
              name="book_name"
              onChange={(e) => changeInputValue(e)}
              value={book_name}
              maxlength={30}
            />
          </label>

          <label>
            Автор книги
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: Лев Толстой (Если авторов несколько, введите их через запятую)"
              type="text"
              name="autors"
              onChange={(e) => changeInputValue(e)}
              value={autors}
            />
          </label>

          <label>
            Количесво страниц
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: 850"
              type="number"
              name="page_number"
              onChange={(e) => changeInputValue(e)}
              value={page_number}
              min={1}
              max={10000}
            />
          </label>

          <label>
            Название издательства
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: Просвещение"
              type="text"
              name="publisher_name"
              onChange={(e) => changeInputValue(e)}
              value={publisher_name}
              maxlength={30}
            />
          </label>

          <label>
            Год издательства
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: 1920"
              type="number"
              name="year_of_publishing"
              onChange={(e) => changeInputValue(e)}
              value={year_of_publishing}
              min={1800}
              max={year}
            />
          </label>

          <label>
            Обложка
            <input
              required
              className="form-control form-control-sm"
              placeholder="Например: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg"
              type="text"
              name="book_image"
              onChange={(e) => changeInputValue(e)}
              value={book_image}
            />
          </label>

          <div className="row justifu-content-center align-items-center">
            <div className="col-md-4">
              {isImageLoad ? (
                <>
                  <img className="book" src={book_image} alt="book_image" />
                </>
              ) : (
                <>
                  <img className="book" src={book} alt="book_image" />
                </>
              )}
            </div>
            <div className="col-md-8">
              <button type="submit" className="btn btn-success">
              Сохранить
              </button>
            </div>
          </div>

          {error && <p className="error">Ошибка: {error}</p>}
        </form>
        <img
          onLoad={() => setIsImageLoad(true)}
          onError={() => setIsImageLoad(false)}
          hidden={true}
          src={book_image}
          alt="book_image"
        />
      </div>
    </>
  );
}

export default EditBook;
