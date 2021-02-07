import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.scss";

function BookList() {
  const history = useHistory();
  const [books, setBooks] = useState(
    JSON.parse(window.localStorage.getItem("books"))
      ? JSON.parse(window.localStorage.getItem("books"))
      : []
  );
  const [sortBy, setSortBy] = useState(
    JSON.parse(window.localStorage.getItem("sort_type"))
      ? JSON.parse(window.localStorage.getItem("sort_type"))
      : "book_name ↓"
  );

  function deleteBook(id) {
    const bookToBeDeleted = books.find((book) => book.id === id);
    const bookIndex = books.indexOf(bookToBeDeleted);
    const newBookList = [...books];
    newBookList.splice(bookIndex, 1);
    window.localStorage.setItem("books", JSON.stringify(newBookList));
    setBooks(newBookList);
  }

  function sort(sort_type) {
    setSortBy(sort_type);
    const sortValues = sort_type.split(" ");
    const newBooksList = [...books];
    let sortBooksList = [];
    if (sortValues[1] === "↓") {
      sortBooksList = newBooksList.sort((a, b) => {
        if (a[sortValues[0]][0] < b[sortValues[0]][0]) return -1;
        if (a[sortValues[0]][0] > b[sortValues[0]][0]) return 1;
          return 0;
      });
    }
    if (sortValues[1] === "↑") {
      sortBooksList = newBooksList.sort((a, b) => {
        if (a[sortValues[0]][0] > b[sortValues[0]][0]) return -1;
        if (a[sortValues[0]][0] < b[sortValues[0]][0]) return 1;
          return 0;
      });
    }
    window.localStorage.setItem("sort_type", JSON.stringify(sort_type));
    setBooks(sortBooksList);
  }

  useEffect(()=>{
    sort(sortBy)
  },[sortBy])

  return (
    <>
      <div className="main_page">
        <h1>Список книг</h1>
        <div className="sort">
          Сортировать по
          <select
            onChange={(e) => sort(e.target.value)}
            className="custom-select"
          >
            <option selected={sortBy === "book_name ↓"} value="book_name ↓">Названию ↓</option>
            <option selected={sortBy === "book_name ↑"} value="book_name ↑">Названию ↑</option>
            <option selected={sortBy === "autors ↓"} value="autors ↓">Автору ↓</option>
            <option selected={sortBy === "autors ↑"} value="autors ↑">Автору ↑</option>
            <option selected={sortBy === "year_of_publishing ↓"} value="year_of_publishing ↓">Дате публикации ↓</option>
            <option selected={sortBy === "year_of_publishing ↑"} value="year_of_publishing ↑">Дате публикации ↑</option>
          </select>
        </div>
        <div className="card_list">
          {books.map((book) => {
            return (
              <div key={book.id} id={book.id} className="book_card">
                <div className="row">
                  <div className="col-md-4">
                    <div className="image_container">
                      <img
                        src={book.book_image}
                        alt="book_image"
                        onError={() =>
                          console.log(`${book.book_name} не загружается`)
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <span>
                      <b>Книга:</b> {book.book_name}
                    </span>
                    <br />
                    <span>
                      <b>Автор:</b> {book.autors}
                    </span>
                    <br />
                    <span>
                      <b>Кол-во страниц:</b> {book.page_number}
                    </span>
                    <br />
                    <span>
                      <b>Издательство:</b> {book.publisher_name}
                    </span>
                    <br />
                    <span>
                      <b>Год издания:</b> {book.year_of_publishing}
                    </span>
                    <br />
                    <button
                      onClick={() => history.push(`/edit_book${book.id}`)}
                      className="btn btn-outline-warning"
                    >
                      Изменть
                    </button>
                    <button
                      onClick={() => {
                        deleteBook(book.id);
                      }}
                      className="btn btn-outline-danger"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookList;
