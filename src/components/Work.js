import "./Work.css";
import colour from "./colour.png";
import imy from "./imyblinky.png";
import kunekt from "./KunektPreview.png";
import naclo from "./naclo.png";
import cuba from "./cuba.png";
import graph from "./graph.png";
import widget from "./newssmall.png";
import sheep from "./sheepsmall.png";
import layout from "./Layout.png";
import weave1 from "./Weave1.png";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Work extends Component {
  render() {
    return (
      <article className="work">
        <div>
          <a href="https://jackrhumphrey.github.io/colour">
            <div className="image">
              <img loading="lazy" src={colour} alt="Colour Mixer" />
            </div>
          </a>
          <p>
            <a href="https://jackrhumphrey.github.io/colour">Colour Mixer</a> |{" "}
            <a href="https://github.com/jackrhumphrey/colour">GitHub</a>
            <br />
            Online tool for mixing colours
          </p>
        </div>

        <div>
          <a href="https://imyblinky.com">
            <div className="image">
              <img loading="lazy" src={imy} alt="Imy Blinky" />
            </div>
          </a>
          <p>
            <a href="https://imyblinky.com">Imy Blinky</a>
            <br />
            Artist website
          </p>
        </div>
        <div>
          <a href="https://cuba-street.netlify.app">
            <div className="image">
              <img loading="lazy" src={cuba} alt="Cuba Street Culinary Tours" />
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
              <img loading="lazy" src={graph} alt="Graph project" />
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
          <Link to={"/work/kunekt"}>
            <div className="image">
              <img loading="lazy" src={kunekt} alt="Kunekt" />
            </div>
          </Link>
          <p>
            <Link to={"/work/kunekt"}>Kunekt</Link>
            <br />
            Mobile app
          </p>
        </div>
        <div>
          <Link to="/work/widget">
            <div className="image">
              <img loading="lazy" src={widget} alt="PressPatron widget" />
            </div>
          </Link>
          <p>
            <Link to="/widget">PressPatron widget</Link>
            <br />
            Industrial group project based on creating a widget
          </p>
        </div>
        <div>
          <a href="https://jackrhumphrey.github.io/Assignment">
            <div className="image" alt="Sample layout">
              <img loading="lazy" src={layout} />
            </div>
          </a>
          <p>
            <a href="https://jackrhumphrey.github.io/Assignment">
              Sample layout</a> |{" "}
            <a href="https://github.com/jackrhumphrey/Assignment">GitHub</a>
            <br />
            Sample layout and code
          </p>
        </div>
        <div>
          <Link to={"/work/weave"}>
            <div className="image">
              <img loading="lazy" src={weave1} alt="Weave Talent" />
            </div>
          </Link>
          <p>
            <Link to={`/work/weave`}>Weave Talent</Link>
            <br />
            Startup Weekend Wellington 2020
          </p>
        </div>
        <div>
          <Link to={"/work/sheep"}>
            <div className="image">
              <img loading="lazy" src={sheep} alt="How many sheep?" />
            </div>
          </Link>
          <p>
            <Link to={`/work/sheep`}>How many sheep?</Link>
            <br />
            Summer of Tech Create Camp project
          </p>
        </div>
        <div>
          <a href="https://jackrhumphrey.github.io/detective">
            <div className="image">
              <img loading="lazy" src={naclo} alt="NACLO" />
            </div>
          </a>
          <p>
            <a href="https://jackrhumphrey.github.io/detective">NACLO</a>
            <br />
            Collaboration with high school students for hackathon
          </p>
        </div>
      </article>
    );
  }
}

export default withRouter(Work);
