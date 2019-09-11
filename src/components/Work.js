import "./Work.css";
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
          <a href="https://cubastreetculinarytours.com">
            <div className="image">
              <img src={cuba} />
            </div>
          </a>
          <p>
            <a href="https://cubastreetculinarytours.com">
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
            <a href="https://jackrhumphrey.github.io/graph">Graph project</a>
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
