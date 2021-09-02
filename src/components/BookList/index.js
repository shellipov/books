import React, { useState, useEffect, useMemo } from "react";
import Bookcard from "../BookCard/Bookcard";
import Select from "../IU/Select/Select";
import Input from "../IU/Input/Input";
import firstStart from "../../functions/firstStart";
import { sortData, startBooks } from "../../constants";
import styles from "./styles.module.scss";

function BookList() {
  const [books, setBooks] = useState(
    JSON.parse(window.localStorage.getItem("books"))
      ? JSON.parse(window.localStorage.getItem("books"))
      : startBooks
  );
  const [sortType, setSortType] = useState(
    JSON.parse(window.localStorage.getItem("sort_type"))
      ? JSON.parse(window.localStorage.getItem("sort_type"))
      : { type: "name", direction: "down" }
  );
  const [searchData, setSearchData] = useState("");

  const sortedBooks = useMemo(() => {
    return [...books].sort((a, b) =>
      sortType.direction === "up"
        ? b[sortType.type].localeCompare(a[sortType.type])
        : a[sortType.type].localeCompare(b[sortType.type])
    );
  }, [sortType, books]);

  const sortedAndSearchedBooks = useMemo(() => {
    const nameFiltedBooks = sortedBooks.filter((book) =>
      book.name.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())
    );
    return nameFiltedBooks;
  }, [searchData, sortedBooks]);

  useEffect(() => {
    firstStart(setBooks);
    sortBooks(sortType);
  }, []);

  function deleteBook(id) {
    const newBookList = books.filter((book) => book.id !== id);
    window.localStorage.setItem("books", JSON.stringify(newBookList));
    setBooks(newBookList);
  }

  const sortBooks = (sort) => {
    window.localStorage.setItem("sort_type", JSON.stringify(sort));
    setSortType(sort);
  };

  const search = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <>
      <h1 className="animate__animated animate__slideInDown">Список книг</h1>
      <div className={styles.buttons_block}>
        <div className={styles.sort_block}>
          <div className={styles.text}>Сортировать по</div>
          <Select
            defaultValue="Сортировка"
            options={sortData}
            value={sortType}
            onChange={sortBooks}
          />
        </div>
        <div className={styles.search_block}>
          <Input
            placeholder={"Поиск"}
            value={searchData}
            onChange={search}
          ></Input>
        </div>
      </div>
      <div className={styles.card_list}>
        {sortedAndSearchedBooks.length ? (
          <>
            {sortedAndSearchedBooks.map((book) => {
              return (
                <Bookcard key={book.id} book={book} deleteBook={deleteBook} />
              );
            })}
          </>
        ) : (
          <>
            <div className={styles.there_no_books}>Книг нет</div>
          </>
        )}
      </div>
    </>
  );
}

export default BookList;
