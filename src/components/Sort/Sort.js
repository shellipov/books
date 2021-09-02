import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const Sort = ({ setSortBy, sortBy, books, setBooks }) => {

  function sort(sort_type) {
    setSortBy(sort_type);
    const sortValues = sort_type.split(" ");
    const newBooksList = [...books];
    let sortBooksList = [];

    if (sortValues[0] === "year_of_publishing") {
      if (sortValues[1] === "↓") {
        sortBooksList = newBooksList.sort((a, b) => {
          return a[sortValues[0]] - b[sortValues[0]];
        });
      }
      if (sortValues[1] === "↑") {
        sortBooksList = newBooksList.sort((a, b) => {
          return b[sortValues[0]] - a[sortValues[0]];
        });
      }
    }

    if (sortValues[0] !== "year_of_publishing") {
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
    }

    window.localStorage.setItem("sort_type", JSON.stringify(sort_type));
    setBooks(sortBooksList);
  }

  useEffect(() => {
    sort(sortBy);
  }, [sortBy]);
  return (
    <div className={styles.sort}>
      <div >Сортировать по :   </div>
      <div >
        <select
          onChange={(e) => sort(e.target.value)}
          className="custom-select custom-select-sm"
          defaultValue={sortBy}
        >
          <option value="book_name ↓">Названию ↓</option>
          <option value="book_name ↑">Названию ↑</option>
          <option value="autors ↓">Автору ↓</option>
          <option value="autors ↑">Автору ↑</option>
          <option value="year_of_publishing ↓">Дате публикации ↓</option>
          <option value="year_of_publishing ↑">Дате публикации ↑</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;
