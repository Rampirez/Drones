import React, { Component } from "../../../node_modules/react";
import $ from "../../../node_modules/jquery";
import "./style.scss";

class Landing extends Component {
  componentDidMount() {
    setTimeout(function () {
      $("#main").removeClass("is-loading");
    }, 100);
  }

  render() {
    return (
      <div id="main" className="is-loading">
        <h1>Ramirez Drone Videography</h1>
      </div>
    );
  }
}

export default Landing;
