import React from "react";
import "./style.scss";
import pdf from "../../data/about.pdf";

function Footer() {
  return (
    <footer className="footer">
      <div className="row justify-content-center align-items-center">
        <div className="col lg-auto">
          <div className="title">
            <a href={pdf} className="primary_link" target="_blank" rel="noreferrer">
            О программе
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
