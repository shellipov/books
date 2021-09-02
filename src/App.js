import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

import "./styles/main.scss";

function App() {
  return (
    <>
      <Router>
        <Header />
        <section className="container">
          <Switch>
            <Route exact path="/add_book" component={AddBook} />
            <Route exact path="/edit_book:id" component={EditBook} />
            <Route exact path="/" component={BookList} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </>
  );
}

export default App;
