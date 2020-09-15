import React, { Component } from "react";
import "./App.scss";
import "./Mobile.scss";
import Cell from "./components/cell";
import Details from "./components/details";
import column1JSON from "./JSONs/column1.json";
import column2JSON from "./JSONs/column2.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnIndex1: 0,
      columnIndex2: 0,
      currentColumn: 2,
      arrayLength: 10,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  cellClicked = (id, value, column) => {
    if (column === 1) {
      this.setState({
        columnIndex1: id,
        columnIndex2: 0,
        currentColumn: 1,
      });
    } else if (column === 2) {
      this.setState({
        columnIndex2: id,
        currentColumn: 2,
      });
    }
  };

  arrayLength = () => {
    switch (this.state.columnIndex1) {
      //EXPERIENCE
      case 0:
        return 5;
      case 1:
        return 4;
      case 2:
        return 4;
      case 3:
        return 3;
      case 4:
        return 1;
      case 5:
        return 1;
    }
  };

  onKeyPressed = (e) => {
    // var arrayLength = e.target.id);
    if (this.state.currentColumn === 1) {
      // down key
      if (this.state.columnIndex1 !== 4) {
        if (e.keyCode === 40) {
          this.setState({ columnIndex1: this.state.columnIndex1 + 1 });
        }
      }
      // up key
      if (this.state.columnIndex1 !== 0) {
        if (e.keyCode === 38) {
          this.setState({ columnIndex1: this.state.columnIndex1 - 1 });
        }
      }
      //right key
      if (e.keyCode === 39) {
        this.setState({ currentColumn: 2 });
      }
    }

    //if selected cell is in column 2
    else if (this.state.currentColumn === 2) {
      // down key
      if (this.state.columnIndex2 !== this.arrayLength()) {
        if (e.keyCode === 40) {
          this.setState({ columnIndex2: this.state.columnIndex2 + 1 });
        }
      }
      // up key
      if (this.state.columnIndex2 !== 0) {
        if (e.keyCode === 38) {
          this.setState({ columnIndex2: this.state.columnIndex2 - 1 });
        }
      }
      //left key
      if (e.keyCode === 37) {
        this.setState({ columnIndex2: 0, currentColumn: 1 });
      }
    }
  };

  render() {
    var columnIndex1 = this.state.columnIndex1;
    var columnIndex2 = this.state.columnIndex2;
    var currentColumn = this.state.currentColumn;

    // Base column
    var column1 = column1JSON.column1;

    // Column 2
    var experience = column2JSON.experience;
    var caseStudies = column2JSON.caseStudies;
    var doodles = column2JSON.doodles;
    var writing = column2JSON.writing;
    var about = column2JSON.about;

    var column2 = [about, experience, caseStudies, doodles, writing];

    // Map out Column 1
    var list1 = column1.map((item) => (
      <Cell
        id={item.id}
        column={1}
        value={item.value}
        type={item.type}
        wip={item.wip}
        status={item.status}
        onMouseDown={this.cellClicked}
        selectedCell1={columnIndex1}
        currentColumn={currentColumn}
      />
    ));

    var column2Array = column2[columnIndex1];

    // Map out Column 2
    var list2 = column2Array.map((item) => (
      <Cell
        id={item.id}
        column={2}
        value={item.value}
        type={item.type}
        wip={item.wip}
        status={item.status}
        onMouseDown={this.cellClicked}
        selectedCell2={columnIndex2}
        currentColumn={currentColumn}
        link={item.link}
      />
    ));

    if (columnIndex2 != null) {
      var column3Object = column2Array[columnIndex2];
      var list3 = (
        <Details
          id={this.state.columnIndex2}
          value={column3Object.value}
          detail={column3Object.detail}
          link={column3Object.link}
        />
      );
    }

    return (
      <div className="App" tabIndex="0">
        {/* Desktop view */}
        <div className="Finder-container Responsive-width desktop">
          <div className="Finder-column-lists">{list1}</div>
          <div className="Finder-column-lists">{list2}</div>
          <div className="Finder-column-details">{list3}</div>
        </div>

        {/* Mobile view, NEED TO CLEAN UP */}
        <div className="Mobile-container Responsive-width mobile">
          <div className="banner">View on desktop for best experience</div>
          <div>
            <p className="Detail-header">👋 Hi, I'm Derrick</p>

            <p className="Detail-body">
              I like jigsaw puzzles, biking, Secret Santa, and Tom Petty and the
              Heartbreakers.
            </p>
            <hr />
            <p className="Detail-subheader">Currently, I am </p>
            <ul className="Detail-body">
              <li>
                Designing{" "}
                <a href="https://www.dropbox.com/?_hp=c" target="_blank">
                  @Robinhood
                </a>
                ,
              </li>
              <li>
                Designing{" "}
                <a href="https://www.glisten.ai/" target="_blank">
                  @Glisten.AI
                </a>
                ,
              </li>
              <li>
                Building{" "}
                <a href="https://www.studentswho.design/" target="_blank">
                  @StudentsWho.Desgin
                </a>
                ,
              </li>
              <li>
                and Doodling{" "}
                <a
                  href="https://www.instagram.com/derrick.doodles/"
                  target="_blank"
                >
                  @derrick.doodles
                </a>
                .
              </li>
            </ul>

            <p className="Detail-subheader">Previously, I have </p>
            <ul className="Detail-body">
              <li>
                Designed{" "}
                <a href="https://www.dropbox.com/" target="_blank">
                  @Dropbox
                </a>
                ,
              </li>
              <li>
                Designed{" "}
                <a href="https://www.buzzfeed.com/" target="_blank">
                  @BuzzFeed
                </a>
                ,
              </li>
              <li>
                Hotel-ed{" "}
                <a href="https://sha.cornell.edu/" target="_blank">
                  @Cornell
                </a>
                ,
              </li>
              <li>
                and HCI-ed{" "}
                <a href="https://mhcid.washington.edu/" target="_blank">
                  @UW
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
