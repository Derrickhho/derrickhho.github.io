import React, { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.enterKeyPressed);
  }

  openLink = () => {
    if (this.props.link) {
      window.open(this.props.link);
    }
  };

  enterKeyPressed = (e) => {
    if (
      this.props.column === this.props.currentColumn &&
      this.props.selectedCell2 === this.props.id
    ) {
      if (e.keyCode === 13) {
        this.openLink();
      }
    }
  };

  cellClass = () => {
    // Check if cell is selected
    if (
      this.props.selectedCell1 === this.props.id ||
      this.props.selectedCell2 === this.props.id
    ) {
      if (this.props.column === this.props.currentColumn) {
        return "Finder-cell-current";
      }
      // Check if cell is inactive
      if (this.props.status === "inactive") {
        return "Finder-cell-inactive";
      } else {
        return "Finder-cell-selected";
      }
    }
    // If cell is not selected
    return "Finder-cell";
  };

  cellClicked = () => {
    this.props.onMouseDown(
      this.props.id,
      this.props.value,
      this.props.column,
      this.props.arrayLength
    );
  };

  iconType = () => {
    if (
      this.props.selectedCell1 === this.props.id ||
      this.props.selectedCell2 === this.props.id
    ) {
      return this.props.type + "-white.svg";
    }
    return this.props.type + ".svg";
  };

  wip = () => {
    if (this.props.wip === true) {
      return <span style={{ fontWeight: "bold" }}> [Current]</span>;
    }
  };

  folderArrow = () => {
    if (this.props.type === "folder") {
      return (
        <span
          className={"icon"}
          style={{
            backgroundImage: `url(${require("../icons/arrow.svg")})`,
            float: "right",
          }}
        ></span>
      );
    }
  };

  render() {
    var cellClass = this.cellClass();
    var iconType = this.iconType();

    return (
      <div
        className={cellClass}
        onMouseDown={this.cellClicked}
        onDoubleClick={this.openLink}
      >
        <span
          className={"icon"}
          style={{
            backgroundImage: `url(${require("../icons/" + iconType)})`,
          }}
        ></span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
          {this.props.value}
        </span>
        {this.wip()}
        {this.folderArrow()}
      </div>
    );
  }
}

export default Cell;
