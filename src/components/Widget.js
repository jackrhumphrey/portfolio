import "./Widget.css";
import React, { Component } from "react";
import widgetimg from "./widgetpadding.png";
import widgetimg2 from "./widget2.png";
import { withRouter } from "react-router-dom";

class Widget extends Component {
  render() {
    return (
      <div>
        <div className="widget">
          <img
            src={widgetimg}
            style={{ marginBottom: "25px", width: "100%" }}
          />
          <div className="widget2">
            <div>
              <img src={widgetimg2} />
            </div>
            <div>
              <p>
                Responsibilities included construction of widget using HTML, CSS
                and JavaScript including jQuery, CSS styling of images, iFrames,
                responsive design.
              </p>
              <p>The widget displays four random articles.</p>
              <p><a href="https://jackrhumphrey.github.io/widget/">Live demo</a></p>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Widget);
