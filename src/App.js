import React, { Component } from "react";
import "./App.scss";
import Cell from "./components/cell";
import Details from "./components/details";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnIndex1: 0,
      columnIndex2: 0,
      currentColumn: 2,
      arrayLength: 10
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed);
  }

  // Checks the status of the currently selected cell
  statusCheck = () => {
    console.log("woopimofo" + this.state.arrayLength);
    console.log(this.state.columnIndex1, this.state.columnIndex2);
  };

  cellClicked = (id, value, column) => {
    if (column === 1) {
      this.setState({
        columnIndex1: id,
        columnIndex2: 0,
        currentColumn: 1
      });
    } else if (column === 2) {
      this.setState({
        columnIndex2: id,
        currentColumn: 2
      });
    }
  };

  arrayLength = () => {
    switch (this.state.columnIndex1) {
      //EXPERIENCE
      case 0:
        return 4;
      case 1:
        return 3;
      case 2:
        return 4;
      case 3:
        return 3;
      case 4:
        return 1;
    }
  };

  onKeyPressed = e => {
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
    var column1 = [
      { id: 0, key: "about", value: "about me", type: "folder" },
      { id: 1, key: "experience", value: "experience", type: "folder" },
      { id: 2, key: "cs", value: "case studies", type: "folder" },
      { id: 3, key: "doodles", value: "doodles", type: "folder" },
      { id: 4, key: "writing", value: "writing", type: "folder" }
    ];

    // column 2
    var experience = [
      {
        id: 0,
        link: "http://www.dropbox.com/",
        detail: "exp-dropbox",
        value: "Dropbox",
        type: "dropbox",
        wip: true
      },
      {
        detail: "exp-glisten",
        link: "http://www.glisten.ai/",
        id: 1,
        value: "Glisten.AI",
        type: "glisten",
        wip: true
      },
      {
        id: 2,
        link: "http://www.studentswho.design/",
        detail: "exp-swd",
        value: "StudentsWho.Design",
        type: "swd",
        wip: true
      },
      {
        id: 3,
        link: "http://www.buzzfeed.com/",
        detail: "exp-buzzfeed",
        value: "Buzzfeed",
        type: "buzzfeed"
      }
    ];

    var caseStudies = [
      {
        id: 0,
        detail: "cs-locked",
        value: "Confidential",
        type: "lock",
        status: "inactive"
      },
      {
        id: 1,
        link: "link",
        detail: "cs-paper",
        value: "Paper - New User Onboarding",
        type: "file-dropbox"
      },
      {
        id: 2,
        link: "link",
        detail: "cs-links",
        value: "Dropbox - Link Settings",
        type: "file-dropbox"
      },
      {
        id: 3,
        link: "link",
        detail: "cs-feedback",
        value: "Buzzfeed - Internal Feedback",
        type: "file-buzzfeed"
      },
      {
        id: 4,
        link: "link",
        detail: "cs-quizzes",
        value: "Buzzfeed - Quizzes",
        type: "file-buzzfeed"
      }
    ];
    var doodles = [
      {
        id: 0,
        link: "https://www.instagram.com/p/B-VbUrljgZ2/",
        detail: "dood-far",
        value: "Far Out",
        type: "image"
      },
      {
        id: 1,
        link: "https://www.instagram.com/p/B-OKovmD5Uv/",
        detail: "dood-ole",
        value: "Olé",
        type: "image"
      },
      {
        id: 2,
        link: "https://www.instagram.com/p/B-L-6UsjNPm/",
        detail: "dood-splat",
        value: "Splat",
        type: "image"
      },
      {
        id: 3,
        link: "https://www.instagram.com/p/B9wvLFhJn1b/",
        detail: "dood-floater",
        value: "Floater",
        type: "image"
      }
    ];

    var writing = [
      {
        id: 0,
        link:
          "https://medium.com/@derrickhho/what-hospitality-administration-means-to-me-9f120302bef7",
        detail: "wr-hospitality",
        value: "How I Went From Hospitality to Product Design",
        type: "wr-medium"
      },
      {
        id: 1,
        link: "https://medium.com/@derrickhho/now-what-f0ec6dd4d108",
        detail: "wr-nowwhat",
        value: "Now What?",
        type: "wr-medium"
      }
    ];

    var about = [
      {
        id: 0,
        detail: "abt-readme",
        value: "README",
        type: "file"
      },
      {
        id: 1,
        detail: "abt-resume",
        link: "./src/documents/resume.pdf",
        value: "Resume",
        type: "file"
      },
      {
        id: 2,
        detail: "abt-linkedin",
        link: "https://www.linkedin.com/in/derrickhho/",
        value: "LinkedIn",
        type: "linkedin"
      },
      {
        id: 3,
        detail: "abt-twitter",
        link: "https://twitter.com/derrickhho",
        value: "Twitter",
        type: "twitter"
      },
      {
        id: 4,
        detail: "abt-instagram",
        link: "https://www.instagram.com/derrick.doodles/",
        value: "Instagram",
        type: "instagram"
      }
      // {
      //   id: 5,
      //   detail: "abt-medium",
      //   link: "https://medium.com/@derrickhho",
      //   value: "Medium",
      //   type: "medium"
      // },
      // {
      //   id: 6,
      //   detail: "abt-dribbble",
      //   link: "https://dribbble.com/derrickhho",
      //   value: "Dribbble",
      //   type: "dribbble"
      // }
    ];

    var column2 = [about, experience, caseStudies, doodles, writing];
    column1.map(item => (
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

    // Map out Column 1
    var list1 = column1.map(item => (
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
    var arrayLength = column2Array.length;

    // Map out Column 2
    var list2 = column2Array.map(item => (
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

    // Details

    return (
      <div id={arrayLength} className="App" tabIndex="0">
        {/* // <div className="App"> */}

        <div className="Finder-container Responsive-width">
          <div className="Finder-column-lists">{list1}</div>
          <div className="Finder-column-lists">{list2}</div>
          <div className="Finder-column-details">{list3}</div>
        </div>
        <div className="Footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default App;
