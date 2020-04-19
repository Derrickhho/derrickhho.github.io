import React, { Component } from "react";
import "./App.scss";
// import CellColumn from "./components/cellList";
import Cell from "./components/cell";
import Details from "./components/details";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Navbar Responsive-width">
        <img src={require("./logos/deho.svg")} alt={"logo"} />
      </div>
    );
  }
}

export default Navbar;
