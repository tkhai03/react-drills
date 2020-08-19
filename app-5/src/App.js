import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://ih1.redbubble.net/image.1075810102.9258/flat,550x550,075,f.u6.jpg"} />
      </div>
    );
  }
}