import React, { Component } from "react";
import "./App.scss";

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
