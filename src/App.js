import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
