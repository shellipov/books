import React, { useState, useEffect } from "react";
import book from "../../images/book.jpg";
import { startBooks } from "../../constants";
import Sort from "../Sort/Sort";
import Bookcard from "../BookCard/Bookcard";
import "./style.scss";

function BookList() {
  const [books, setBooks] = useState(
    JSON.parse(window.localStorage.getItem("books"))
      ? JSON.parse(window.localStorage.getItem("books"))
      : startBooks
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

  function getImage(img) {
    img.src = book;
  }

  useEffect(() => {
    const start = JSON.parse(window.localStorage.getItem("start"));
    if (!start) {
      window.localStorage.setItem("start", JSON.stringify(true));
      window.localStorage.setItem("books", JSON.stringify(startBooks));
      setBooks(startBooks);
    }
  }, []);

  return (
    <>
      <div className="main_page">
        <h1 className="animate__animated animate__slideInDown">Список книг</h1>
        <Sort
          setSortBy={setSortBy}
          sortBy={sortBy}
          books={books}
          setBooks={setBooks}
        />
        <div className="card_list">
          {books.map((book) => {
            return (
              <Bookcard
                key={book.id}
                book={book}
                getImage={getImage}
                deleteBook={deleteBook}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookList;
