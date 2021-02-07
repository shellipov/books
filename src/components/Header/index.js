import React from "react";
import { Route, Link } from "react-router-dom";
import "./style.scss";

function Header() {
  return (
    <header>
      <div className="row align-items-center">
        <div className="col lg-6">
          <div className="title">Редактор книг</div>
        </div>
        <div className="col lg-6 ">
          <Route exact path="/">
            <Link
              className="btn btn-primary btn-sm add_book_botton"
              to="/add_book"
            >
              Добавить книгу
            </Link>
          </Route>

          <Route exact path="/add_book">
            <Link className="btn btn-primary btn-sm add_book_botton" to="/">
              Список книг
            </Link>
          </Route>

          <Route exact path="/edit_book:id">
            <Link className="btn btn-primary btn-sm add_book_botton" to="/">
              Назад
            </Link>
          </Route>
        </div>
      </div>
    </header>
  );
}

export default Header;
