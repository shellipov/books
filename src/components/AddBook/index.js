import React, { useState } from "react";
import book from "../../images/book.jpg";
import Modal from "../Modal";
import "./style.scss";

function AddBook() {
  const initialInputs = {
    book_name: "",
    autors: "",
    page_number: "",
    publisher_name: "",
    year_of_publishing: "",
    book_image: "",
  };
  const [inputs, setInputs] = useState(initialInputs);
  const {
    book_name,
    autors,
    page_number,
    publisher_name,
    year_of_publishing,
    book_image,
  } = inputs;
  const year = new Date().getFullYear();
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
              maxLength={30}
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
            {error && <span className="error">Ошибка: {error}</span>}
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
              maxLength={30}
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

          <div className="row justify-content-center align-items-center">
            <div className="col-md-10">
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
                <span className="description">
                  Найдите подходящую картинку в интернете и вставте её url{" "}
                </span>
              </label>
            </div>
            <div className="col-md-2">
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
          </div>

          <div className="row justify-content-center align-items-center">
              <button type="submit" className="btn btn-success">
                Добавить
              </button>
          </div>
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

export default AddBook;
