import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style/header-syle.scss";
import "./style/button-style.scss";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="logo-and-text-holder col-6">
              <div className="Easy-code-logo">
                <img src={logo} className="logo" />
              </div>
            </div>

            <div className="col-6">
              <div className="container button-holder ">
                <div className="button-text-holder ">
                  <div class="button-text">Visit Our Website</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
