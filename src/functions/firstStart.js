import { startBooks } from "../constants";

const firstStart = (addFirstBooks) => {
    const notFirstStart = JSON.parse(window.localStorage.getItem("notFirstStart"));
    if (!notFirstStart) {
      window.localStorage.setItem("notFirstStart", JSON.stringify(true));
      window.localStorage.setItem("books", JSON.stringify(startBooks));
      addFirstBooks(startBooks);
    }
};

export default firstStart;
