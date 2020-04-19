import React, { Component } from "react";
import "./App.css";
import CellColumn from "./components/cellList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column1: ["experience", "case studies", "doodles", "writing", "music"],
      column2: ["test1", "test2", "test3", "test4", "test5"]
    };
  }

  changeList = () => {
    console.log(this.state.column1);
    this.setState({
      column1: ["run1", "run1", "run1", "run1", "run1"]
    });
  };

  checkState = () => {
    console.log(this.state.column1);
    console.log(this.state.column2);
  };

  render() {
    return (
      <div className="App">
        <CellColumn value={this.state.column1} />
        <CellColumn value={this.state.column2} />
        <button onClick={this.changeList}>Change the values of column 1</button>
      </div>
    );
  }
}

export default App;
