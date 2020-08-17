import "./Work.css";
import imy from "./imyblinky.png";
import kunekt from "./KunektPreview.png";
import naclo from "./naclo.png";
import cuba from "./cuba.png";
import graph from "./graph.png";
import widget from "./newssmall.png";
import sheep from "./sheepsmall.png";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div>
          <a href="https://imyblinky.com">
            <div className="image">
              <img src={imy} />
            </div>
          </a>
          <p>
            <a href="https://imyblinky.com">Imy Blinky</a>
            <br />
            Artist website
          </p>
        </div>

        <div>
          <Link to={"/work/kunekt"}>
            <div className="image">
              <img src={kunekt} />
            </div>
          </Link>
          <p>
            <Link to={"/work/kunekt"}>Kunekt</Link>
            <br />
            Mobile app
          </p>
        </div>
        <div>
          <a href="https://cuba-street.netlify.app">
            <div className="image">
              <img src={cuba} />
            </div>
          </a>
          <p>
            <a href="https://cuba-street.netlify.app">
              Cuba Street Culinary Tours
            </a>
            <br />
            Client website
          </p>
        </div>
        <div>
          <a href="https://jackrhumphrey.github.io/graph">
            <div className="image">
              <img src={graph} />
            </div>
          </a>
          <p>
            <a href="https://jackrhumphrey.github.io/graph">Graph project</a> |{" "}
            <a href="https://github.com/jackrhumphrey/graph">GitHub</a>
            <br />
            Research project based on music and mathematical structures, HTML5
            canvas
          </p>
        </div>
        <div>
          <Link to={"/work/sheep"}>
            <div className="image">
              <img src={sheep} />
            </div>
          </Link>
          <p>
            <Link to={`/work/sheep`}>How many sheep?</Link>
            <br />
            Summer of Tech Create Camp project
          </p>
        </div>
        <div>
          <Link to="/work/widget">
            <div className="image">
              <img src={widget} />
            </div>
          </Link>
          <p>
            <Link to="/widget">PressPatron widget</Link>
            <br />
            Industrial group project based on creating a widget
          </p>
        </div>
        <div>
          <a href="https://jackrhumphrey.github.io/detective">
            <div className="image">
              <img src={naclo} />
            </div>
          </a>
          <p>
            <a href="https://jackrhumphrey.github.io/detective">NACLO</a>
            <br />
            Collaboration with high school students for hackathon
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(Work);
