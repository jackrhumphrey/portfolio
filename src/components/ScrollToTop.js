import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import $ from "jquery";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
      console.log("Route change!");
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
