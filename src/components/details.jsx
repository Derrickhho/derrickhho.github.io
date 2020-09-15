import React, { Component } from "react";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openLink = () => {
    if (this.props.link) {
      window.open(this.props.link);
    }
  };

  render() {
    var detailImage = null;
    var detailHeader = null;
    var detailMetadata = null;
    var detailRel = [];

    switch (this.props.detail) {
      //EXPERIENCE
      case "exp-robinhood":
        var detailImage = "exp-robinhood.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Product Design • July 2020 - Present";
        var detailRel = [
          {
            link: "https://robinhood.com/us/en/",
            name: "Robinhoood: Investing for Everyone",
          },
        ];
        break;
      case "exp-dropbox":
        var detailImage = "exp-dropbox.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Product Design • August 2019 - Present";
        var detailRel = [
          {
            link:
              "https://blog.dropbox.com/topics/company/dropbox--the-smart-workspace",
            name: "Dropbox: the smart workspace",
          },
          {
            link:
              "https://www.theverge.com/2019/4/9/18300086/google-docs-sheets-slides-dropbox-integration-collaborate-edit-share-filesharing-business-g-suite",
            name:
              "[The Verge] Google Docs, Sheets, and Slides can now be edited and shared within Dropbox",
          },
        ];
        break;
      case "exp-glisten":
        var detailImage = "exp-glisten.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Head of Design • January 2020 - Present";
        var detailRel = [
          { link: "https://www.glisten.ai/", name: "Glisten.AI (YC W20)" },
          {
            link:
              "https://techcrunch.com/2020/03/13/glisten-uses-computer-vision-to-break-down-fashion-photos-to-their-styles-and-parts/",
            name: "[Tech Crunch] Glisten uses computer vision to ...",
          },
        ];
        break;
      case "exp-swd":
        var detailImage = "exp-swd.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Creating • January 2020 - Present";
        var detailRel = [
          {
            link: "https://www.studentswho.design/",
            name: "StudentsWho.Design",
          },
          {
            link:
              "https://www.figma.com/blog/how-students-who-design-set-up-figma-in-their-online-classroom/",
            name: "[Figma Blog] How Students Who Design set u...",
          },
        ];
        break;
      case "exp-buzzfeed":
        var detailImage = "exp-buzzfeed.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Product Design • January 2020 - Present";
        var detailRel = [
          { link: "https://www.buzzfeed.com/", name: "Buzzfeed.com" },
        ];
        break;

      //CASES
      case "cs-locked":
        var detailImage = "cs-locked.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Contact me for more case studies";
        var detailRel = [{ link: null, name: "[Email] derrickhho@gmail.com" }];

        break;
      case "cs-paper":
        var detailImage = "cs-paper.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Dropbox • 2019";
        break;
      case "cs-links":
        var detailImage = "cs-links.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Dropbox Paper • 2019";
        break;
      case "cs-feedback":
        var detailImage = "cs-feedback.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Internal Tools • 2017";
        break;
      case "cs-quizzes":
        var detailImage = "cs-quizzes.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Quizzes • 2017";
        break;

      //DOODLES
      case "dood-far":
        var detailImage = "dood-farout.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Cascadilla Gorge • Ithaca, New York";
        var detailRel = [
          {
            link: "https://www.instagram.com/derrick.doodles/",
            name: "[Doodle] @derrick.doodles",
          },
          {
            link: "https://www.instagram.com/chewcheww/",
            name: "[Photo] @chewcheww",
          },
        ];
        break;
      case "dood-ole":
        var detailImage = "dood-ole.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Rob Roye Glacier Track • Wanaka, New Zealand";
        var detailRel = [
          {
            link: "https://www.instagram.com/derrick.doodles/",
            name: "[Doodle] @derrick.doodles",
          },
          {
            link: "https://www.camwalkerphoto.com/#1",
            name: "[Photo] @cameron.outdoor",
          },
        ];
        break;
      case "dood-splat":
        var detailImage = "dood-splat.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Denali Mountain • Denali, Alaska";
        var detailRel = [
          {
            link: "https://www.instagram.com/derrick.doodles/",
            name: "[Doodle] @derrick.doodles",
          },
          {
            link: "https://www.camwalkerphoto.com/#1",
            name: "[Photo] @cameron.outdoor",
          },
        ];
        break;
      case "dood-floater":
        var detailImage = "dood-floater.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Pipeline • Oahu, Hawaii";
        var detailRel = [
          {
            link: "https://www.instagram.com/derrick.doodles/",
            name: "[Doodle] @derrick.doodles",
          },
          {
            link: "https://www.camwalkerphoto.com/#1",
            name: "[Photo] @cameron.outdoor",
          },
        ];
        break;

      //WRITING
      case "wr-hospitality":
        var detailImage = "wr-hospitality.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Oct 20, 2016";
        var detailRel = [
          {
            link:
              "https://medium.com/@derrickhho/what-hospitality-administration-means-to-me-9f120302bef7",
            name: "[Source] One Part Hotelier and One Part Product Designer",
          },
        ];
        break;

      case "wr-nowwhat":
        var detailImage = "wr-nowwhat.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [
          {
            link: "https://medium.com/@derrickhho/now-what-f0ec6dd4d108",
            name: "[Source] Now What?",
          },
        ];
        break;

      //ABOUT
      case "abt-resume":
        var detailImage = "abt-resume.png";
        var detailHeader = this.props.value;
        var detailRel = [
          {
            link: "./src/documents/HoDerrick_Resume.pdf",
            name: "HoDerrick_Resume.pdf",
          },
          {
            link: "mailto:derrickhho@gmail.com",
            name: "[Email] derrickhho@gmail.com",
          },
        ];
        break;

      // case "abt-derrick":
      //   var detailImage = "abt-resume.png";
      //   var detailHeader = "Hi I'm Derrick";
      //   var detailRel = [
      //     {
      //       link: "mailto:derrickhho@gmail.com",
      //       name: "[Email] derrickhho@gmail.com",
      //     },
      //   ];
      //   break;

      case "abt-medium":
        var detailImage = "abt-medium.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Oct 20, 2016";
        var detailRel = [
          {
            link: "https://medium.com/@derrickhho",
            name: "[Medium] @derrickhho",
          },
        ];
        break;

      case "abt-twitter":
        var detailImage = "abt-twitter.png";
        var detailHeader = this.props.value;
        var detailRel = [
          {
            link: "https://twitter.com/derrickhho",
            name: "[Twitter] @derrickhho",
          },
        ];
        break;

      case "abt-linkedin":
        var detailImage = "abt-linkedin.png";
        var detailHeader = this.props.value;
        var detailRel = [
          {
            link: "https://linkedin.com/in/derrickhho",
            name: "[LinkedIn] /derrickhho",
          },
        ];
        break;

      case "abt-instagram":
        var detailImage = "abt-instagram.png";
        var detailHeader = this.props.value;
        var detailRel = [
          {
            link: "https://www.instagram.com/derrick.doodles/",
            name: "[Instagram] @derrick.doodles",
          },
        ];
        break;

      case "abt-dribbble":
        var detailImage = "abt-dribbble.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [
          {
            link: "https://dribbble.com/derrickhho",
            name: "[Dribbble] /derrickhho",
          },
        ];
        break;

      default:
        var detailImage = "error.png";
        var detailHeader = this.props.value;
        var detailMetadata = "default detail metadata";
        break;
    }

    if (this.props.detail == "abt-readme") {
      return (
        <div>
          <p className="Detail-header">📖 deho.README</p>
          <hr />
          <img src={require("../misc/click.svg")} />
          <p className="Detail-body">
            <b>Click</b> or <b>double click</b> the folders/content to navigate
            and learn more
          </p>
          <img src={require("../misc/arrowKeys.svg")} />
          <p className="Detail-body">
            Use the <b>arrow keys</b> or <b>enter</b> to navigate between the
            folders/content
          </p>
          <div className="tooltip">
            <img s src={require("../misc/downKey.svg")} />
            <p className="tooltip-body">
              Don't know where to start? Press the <b>down arrow</b>, or click
              <b>
                <span className="tooltip-span">
                  <img className="icon" src={require("../icons/deho.svg")} />
                  Derrick Ho
                </span>
              </b>{" "}
              on the left
            </p>
          </div>
        </div>
      );
    } else if (this.props.detail == "abt-derrick") {
      return (
        <div>
          <p className="Detail-header">👋 Hi, I'm Derrick</p>

          <hr />

          <p className="Detail-body">
            I like jigsaw puzzles, biking, Secret Santa, and Tom Petty and the
            Heartbreakers.
          </p>
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
              <a href="https://www.buzzfeed.com/" target="_blank">
                @Dropbox
              </a>
              ,
            </li>
            <li>
              and Designed{" "}
              <a href="https://www.buzzfeed.com/" target="_blank">
                @BuzzFeed
              </a>
              ,
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="Detail-image"
            onDoubleClick={this.openLink}
            style={{
              backgroundImage: `url(${require("../thumbnails/" +
                detailImage)})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <p className="Detail-header">{detailHeader}</p>
          <p className="Detail-metadata">{detailMetadata}</p>
          {this.relLinksExist}

          <hr />
          <p className="Detail-subheader">Relevant links</p>
          {detailRel.map((item) => (
            <ul>
              <li>
                <a className="Detail-link" href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            </ul>
          ))}
        </div>
      );
    }
  }
}

export default Details;
