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
      case "exp-dropbox":
        var detailImage = "exp-dropbox.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Product Design • August 2019 - Present";
        var detailRel = [
          {
            link:
              "https://blog.dropbox.com/topics/company/dropbox--the-smart-workspace",
            name: "Dropbox: the smart workspace"
          },
          {
            link:
              "https://www.theverge.com/2019/4/9/18300086/google-docs-sheets-slides-dropbox-integration-collaborate-edit-share-filesharing-business-g-suite",
            name:
              "[The Verge] Google Docs, Sheets, and Slides can now be edited and shared within Dropbox"
          }
        ];
        break;
      case "exp-glisten":
        var detailImage = "exp-glisten.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Design Lead • January 2020 - Present";
        var detailRel = [
          { link: "https://www.glisten.ai/", name: "Glisten.AI" },
          {
            link:
              "https://techcrunch.com/2020/03/13/glisten-uses-computer-vision-to-break-down-fashion-photos-to-their-styles-and-parts/",
            name: "[Tech Crunch] Glisten uses computer vision to ..."
          }
        ];
        break;
      case "exp-swd":
        var detailImage = "exp-swd.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Creating • January 2020 - Present";
        var detailRel = [
          {
            link: "https://www.studentswho.design/",
            name: "StudentsWho.Design"
          },
          {
            link:
              "https://www.figma.com/blog/how-students-who-design-set-up-figma-in-their-online-classroom/",
            name: "[Figma Blog] How Students Who Design set u..."
          }
        ];
        break;
      case "exp-buzzfeed":
        var detailImage = "exp-buzzfeed.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Product Design • January 2020 - Present";
        var detailRel = [
          { link: "https://www.buzzfeed.com/", name: "Buzzfeed.com" }
        ];
        break;
      case "exp-resume":
        var detailImage = "exp-resume.png";
        var detailHeader = this.props.value;
        // var detailMetadata = "Last updated: ";
        var detailRel = [
          { link: null, name: "[LinkedIn] in/derrickhho" },
          { link: null, name: "[Medium] @derrickhho" },
          { link: null, name: "[Twitter] @derrickhho" }
        ];
        break;

      //CASES
      case "cs-locked":
        var detailImage = "cs-locked.png";
        var detailHeader = this.props.value;
        var detailMetadata = "hmu to see this shiz";
        var detailRel = [{ link: null, name: "[Email] derrickhho@gmail.com" }];

        break;
      case "cs-paper":
        var detailImage = "cs-paper.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Dropbox • 2019";
        break;
      case "cs-links":
        var detailImage = "error.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Dropbox Paper • 2019";
        break;
      case "cs-feedback":
        var detailImage = "error.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Internal Tools • 2017";
        break;
      case "cs-quizzes":
        var detailImage = "error.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Quizzes • 2017";
        break;

      //DOODLES
      case "dood-far":
        var detailImage = "dood-farout.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Cascadilla Gorge • Ithaca, New York";
        var detailRel = [
          { link: null, name: "[Doodle] @derrick.doodles" },
          { link: null, name: "[Photo] @chewcheww" }
        ];
        break;
      case "dood-ole":
        var detailImage = "dood-ole.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Rob Roye Glacier Track • Wanaka, New Zealand";
        var detailRel = [
          { link: null, name: "[Doodle] @derrick.doodles" },
          { link: null, name: "[Photo] @cameron.outdoor" }
        ];
        break;
      case "dood-splat":
        var detailImage = "dood-splat.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Denali Mountain • Denali, Alaska";
        var detailRel = [
          { link: null, name: "[Doodle] @derrick.doodles" },
          { link: null, name: "[Photo] @cameron.outdoor" }
        ];
        break;
      case "dood-floater":
        var detailImage = "dood-floater.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Pipeline • Oahu, Hawaii";
        var detailRel = [
          { link: null, name: "[Doodle] @derrick.doodles" },
          { link: null, name: "[Photo] @cameron.outdoor" }
        ];
        break;

      //WRITING
      case "wr-hospitality":
        var detailImage = "wr-hospitality.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Oct 20, 2016";
        var detailRel = [{ link: null, name: null }];
        break;

      case "wr-nowwhat":
        var detailImage = "wr-nowwhat.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [{ link: null, name: null }];
        break;

      //ABOUT
      case "abt-resume":
        var detailImage = "abt-resume.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Oct 20, 2016";
        var detailRel = [
          {
            link: "https://medium.com/@derrickhho",
            name: "[medium] @derrickhho"
          }
        ];
        break;

      case "abt-medium":
        var detailImage = "abt-medium.png";
        var detailHeader = this.props.value;
        var detailMetadata = "Oct 20, 2016";
        var detailRel = [
          {
            link: "https://medium.com/@derrickhho",
            name: "[medium] @derrickhho"
          }
        ];
        break;

      case "abt-twitter":
        var detailImage = "abt-twitter.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [
          {
            link: "https://twitter.com/derrickhho",
            name: "[twitter] @derrickhho"
          }
        ];
        break;

      case "abt-linkedin":
        var detailImage = "abt-linkedin.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [
          {
            link: "https://linkedin.com/in/derrickhho",
            name: "[linkedin] /derrickhho"
          }
        ];
        break;

      case "abt-dribbble":
        var detailImage = "abt-dribbble.png";
        var detailHeader = this.props.value;
        var detailMetadata = "June 2, 2017";
        var detailRel = [
          {
            link: "https://dribbble.com/derrickhho",
            name: "[dribbble] /derrickhho"
          }
        ];
        break;

      default:
        var detailImage = "error.png";
        var detailHeader = this.props.value;
        var detailMetadata = "test";
        break;
    }

    return (
      <div>
        <div
          className="Detail-image"
          onDoubleClick={this.openLink}
          style={{
            backgroundImage: `url(${require("../thumbnails/" + detailImage)})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <p className="Detail-header">{this.props.value}</p>
        <p className="Detail-metadata">{detailMetadata}</p>
        {this.relLinksExist}

        <hr />
        <p className="Detail-subheader">Relevant links</p>
        {detailRel.map(item => (
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

export default Details;
