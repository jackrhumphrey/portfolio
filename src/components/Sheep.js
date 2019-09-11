import React, { Component } from "react";
import sheepimg from "./sheep.png";
import { withRouter } from "react-router-dom";

class Sheep extends Component {
  render() {
    return (
      <div>
        <img src={sheepimg} style={{ marginBottom: "25px", width: "100%" }} />
        <p>
          Design development frame from How many sheep? web project for Summer
          of Tech Create Camp. Roles included: UX design, front end development.
        </p>
      </div>
    );
  }
}

export default withRouter(Sheep);
