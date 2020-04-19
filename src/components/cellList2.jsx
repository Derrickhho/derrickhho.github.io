import React, { Component } from "react";
import Cell from "./cell";

class CellColumn2 extends Component {
  state = {
    cells: [
      { id: 1, value: "test1" },
      { id: 2, value: "test2" },
      { id: 3, value: "test3" },
      { id: 4, value: "test4" },
      { id: 5, value: "test5" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.cells.map(cells => (
          <Cell key={cells.id} value={cells.value} />
        ))}
      </div>
    );
  }
}

export default CellColumn2;
