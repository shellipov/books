import React, { useState, useEffect } from "react";
import book from "../../images/book.jpg";
import Modal from "../Modal";
import { useParams } from "react-router-dom";
import Input from "../IU/Input/Input";
import Button from "../IU/Button/Button";
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
          <Input
            label="Название книги"
            placeholder="Например: Война и мир"
            type="text"
            name="book_name"
            onChange={(e) => changeInputValue(e)}
            value={book_name}
            maxLength={30}
          />

          <Input
            label="Автор книги"
            placeholder="Например: Лев Толстой (Если авторов несколько, введите их через запятую)"
            type="text"
            name="autors"
            onChange={(e) => changeInputValue(e)}
            value={autors}
          >
            {error && <span className="error">Ошибка: {error}</span>}
          </Input>

          <Input
            label="Количесво страниц"
            placeholder="Например: 850"
            type="number"
            name="page_number"
            onChange={(e) => changeInputValue(e)}
            value={page_number}
            min={1}
            max={10000}
          />

          <Input
            label="Название издательства"
            placeholder="Например: Просвещение"
            type="text"
            name="publisher_name"
            onChange={(e) => changeInputValue(e)}
            value={publisher_name}
            maxLength={30}
          />

          <Input
            label="Год издательства"
            placeholder="Например: 1920"
            type="number"
            name="year_of_publishing"
            onChange={(e) => changeInputValue(e)}
            value={year_of_publishing}
            min={1800}
            max={year}
          />

          <div className="row justify-content-center align-items-center">
            <div className="col-md-10">
              <Input
                label="Обложка"
                placeholder="Например: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg"
                type="text"
                name="book_image"
                onChange={(e) => changeInputValue(e)}
                value={book_image}
              >
                <span className="description">
                  Найдите подходящую картинку в интернете и вставте её url{" "}
                </span>
              </Input>
            </div>
            <div className="col-md-2">
            <img className="book" src={ isImageLoad? book_image : book} alt="book_image" />
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
          src={book_image}
          alt="book_image"
        />
      </div>
    </>
  );
}

export default EditBook;
