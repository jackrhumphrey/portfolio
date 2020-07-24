import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";

import Work from "./Work";
import Sheep from "./Sheep";
import Widget from "./Widget";
import Kunekt from "./Kunekt";

class Works extends Component {
  render() {
    return (
      <div>
        <Route exact path={this.props.match.path} component={Work} />
        <Route path={`${this.props.match.path}/sheep`} component={Sheep} />
        <Route path={`${this.props.match.path}/widget`} component={Widget} />
        <Route path={`${this.props.match.path}/kunekt`} component={Kunekt} />
      </div>
    );
  }
}

export default withRouter(Works);
