import "./App.css";
import React, { Component } from "react";

import { BrowserRouter, Route, NavLink } from "react-router-dom";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  // componentDidMount() {
  //   $(function() {
  //     var $sidebar = $("#sidebar"),
  //       $window = $(window),
  //       offset = $sidebar.offset();

  //     $window.scroll(function() {
  //       if ($window.scrollTop() > offset.top) {
  //         $sidebar.stop(true).css({
  //           marginTop: $window.scrollTop() - offset.top
  //         });
  //       } else {
  //         $sidebar.stop(true).css({
  //           marginTop: 0
  //         });
  //       }
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <div className="wrapper">
            <div>
              <div className="nav" id="sidebar">
                <div>
                  <ul>
                    <li>
                      <NavLink exact to="/">
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/work">Work</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={About} />
              <Route path="/work" component={Works} />
              <Route path="/contact" component={Contact} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
