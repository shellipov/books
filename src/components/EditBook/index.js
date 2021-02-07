import React, { useState, useEffect } from "react";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const editableBook = JSON.parse(window.localStorage.getItem("books")).find(
      (book) => book.id === id
    );
    setInputs(editableBook);
  }, [id]);

  function changeInputValue({ target: { name, value } }) {
    setInputs({ ...inputs, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = 0;
    if (inputs.book_name.length >= 30) {
      errors++;
      setError("Название книги слишком длинное");
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
        <span>Книга - {id}</span>
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

          {error && <p className="error">Ошибка: {error}</p>}

          <button type="submit" className="btn btn-success">
            Сохранить
          </button>
        </form>
      </div>
    </>
  );
}

export default EditBook;
