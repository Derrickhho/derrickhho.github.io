import React, { Component } from "react";
import Cell from "./cell";

class CellColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: [
        { id: 1, value: this.props.value[0] },
        { id: 2, value: this.props.value[1] },
        { id: 3, value: this.props.value[2] },
        { id: 4, value: this.props.value[3] },
        { id: 5, value: this.props.value[4] }
      ],
      isSelected: false,
      selectedCell: "untitled"
    };
  }

  setSelectedCell = () => {
    this.setState({ selectedCell: "test" });
    console.log(this.state.selectedCell + " whe are here");
  };

  render() {
    return (
      this.setSelectedCell,
      console.log("hello" + this.state.selectedCell),
      (
        <div>
          {this.state.cells.map(cells => (
            <Cell key={cells.id} value={cells.value} />
          ))}
        </div>
      )
    );
  }
}

export default CellColumn;
