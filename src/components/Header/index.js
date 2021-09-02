import React from "react";
import { Route } from "react-router-dom";
import UILink from "../IU/UILink/UILink";
import "./style.scss";

function Header() {
  return (
    <header>
      <div className="row align-items-center">
        <div className="col lg-6">
          <div className="title">Редактор книг</div>
        </div>
        <div className="col lg-6 button-block">
          <div id="row justify-content-center"></div>
          <Route exact path="/">
            <UILink type="button" to="/add_book">
              Добавить книгу
            </UILink>
          </Route>

          <Route exact path="/add_book">
            <UILink type="button" to="/">
              Список книг
            </UILink>
          </Route>

          <Route exact path="/edit_book:id">
            <UILink type="button" to="/">
              Назад
            </UILink>
          </Route>
        </div>
      </div>
    </header>
  );
}

export default Header;
