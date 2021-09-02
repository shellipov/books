import React, { useState, useEffect } from "react";
import Bookcard from "../BookCard/Bookcard";
import Select from "../IU/Select/Select";
import firstStart from "../../functions/firstStart";
import { initialBooks, initialSortType, sortData } from "../../constants";
import styles from "./styles.module.scss";

function BookList() {
  const [books, setBooks] = useState(initialBooks);
  const [sortType, setSortType] = useState(initialSortType);
  const [searchData, setSearchData] = useState("");
  const sortedBooks =  [...books].sort((a, b) => sortType.direction === "up" ? b[sortType.type].localeCompare(a[sortType.type]) : a[sortType.type].localeCompare(b[sortType.type]))
    
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
    setBooks(
      [...books].sort((a, b) =>
        sort.direction === "up"
          ? b[sort.type].localeCompare(a[sort.type])
          : a[sort.type].localeCompare(b[sort.type])
      )
    );
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
          <input
            className={styles.sort_input}
            placeholder={"Поиск"}
            value={searchData}
            onChange={search}
          ></input>
        </div>
      </div>
      <div className={styles.card_list}>
        {books.map((book) => {
          return <Bookcard key={book.id} book={book} deleteBook={deleteBook} />;
        })}
      </div>
    </>
  );
}

export default BookList;
