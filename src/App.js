import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Developer from "./components/Developer";
import Card from "./components/Card";
import "./components/style/main-body-style.scss";
import Html from "../src/assets/HTML Logo.png";
import Js from "../src/assets/Screen Shot 1401-09-24 at 22.59 1.png";
import Sass from "../src/assets/Sass Logo.png";
import React from "../src/assets/React Logo.png";
import Php from "../src/assets/image 2.png";
import Laravel from "../src/assets/Laravel.png";
import Sql from "../src/assets/MySQL Logo.png";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="continer-fluid ">
        <div className="container">
          <Header />
          <Content />
          <Developer />

          <div>
            <div className="row justify-content-center">
              <div className="col">
                <div className="card-and-text">
                  <div className="fornt">Frontend</div>
                  <div className="four-col-holder">
                    <Card url={Html} />
                    <Card url={Js} />
                    <Card url={Sass} />
                    <Card url={React} />
                  </div>
                </div>
              </div>

              <div className="col ">
                <div className="card-and-text">
                  <div className="back">Backend</div>
                  <div className="two-col-holder">
                    <Card url={Php} />
                    <Card url={Laravel} />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card-and-text">
                  <div className="database">Database</div>
                  <div className="one-col-holder">
                    <Card url={Sql} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copy-right">
            Copyright © 2022 Easycode. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
