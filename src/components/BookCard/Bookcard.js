import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../IU/Button/Button";
import styles from "./styles.module.scss";

const BookCard = ({ book, getImage, deleteBook }) => {
  const history = useHistory();

  return (
    <div key={book.id} id={book.id} className={styles.book_card}>
      <div className="image_container">
        <a
          className="customer fansy_link"
          data-fancybox="gallery"
          href={book.book_image}
        >
          <img
            className={`fansy_image ${styles.card_image}`}
            src={book.book_image}
            alt="book_image"
            onError={(e) => getImage(e.target)}
          />
        </a>
      </div>

      <div className={styles.discription_container}>
        <div className="block">
          <div>
            <b>Книга:</b> {book.book_name}
          </div>
          <div>
            <b>Автор:</b> {book.autors}
          </div>
          <div>
            <b>Кол-во страниц:</b> {book.page_number}
          </div>
          <div>
            <b>Издательство:</b> {book.publisher_name}
          </div>
          <div>
            <b>Год издания:</b> {book.year_of_publishing}
          </div>
        </div>
        <div className={styles.button_block}>
          <Button
            onClick={() => history.push(`/edit_book${book.id}`)}
            color="blue"
          >
            Редактировать
          </Button>
          <div className={styles.delimiter}></div>
          <Button
            onClick={() => {
              deleteBook(book.id);
            }}
            color="red"
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
