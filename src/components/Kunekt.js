import "./Kunekt.css";
import React, { Component } from "react";
import kunekt1 from "./Kunekt1.png";
import kunekt2 from "./Kunekt2.png";
import kunekt3 from "./Kunekt3.png";
import { withRouter } from "react-router-dom";

class Kunekt extends Component {
  render() {
    return (
      <div>
        <div className="kunekt">
          <img src={kunekt1} style={{ width: "100%" }} />
          <img src={kunekt2} style={{ width: "100%" }} />
          <img src={kunekt3} style={{ width: "100%" }} />
        </div>
        <p>Mobile app prototype. Made in React Native.</p>
      </div>
    );
  }
}

export default withRouter(Kunekt);
