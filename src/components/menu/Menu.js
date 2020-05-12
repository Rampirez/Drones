import React, { Component } from "../../../node_modules/react";

import $ from "../../../node_modules/jquery";
import "./style.css";

class Menu extends Component {
  componentDidMount() {
    setTimeout(function () {
      $("#main").removeClass("is-loading");
    }, 100);
  }

  render() {
    return (
      <div id="main" className="is-loading">
        <nav class="menu">
          <input
            type="checkbox"
            href="#"
            class="menu-open"
            name="menu-open"
            id="menu-open"
          />
          <label class="menu-open-button" for="menu-open">
            <span class="lines line-1"></span>
            <span class="lines line-2"></span>
            <span class="lines line-3"></span>
          </label>

          <a href="#" class="menu-item orange">
            {" "}
            <i class="fa fa-envelope"></i>{" "}
          </a>
          <a href="#" class="menu-item green">
            {" "}
            <i class="">Rates</i>{" "}
          </a>
          <a href="#" class="menu-item red">
            {" "}
            <i class="fab fa-youtube"></i>{" "}
          </a>
          <a href="#" class="menu-item purple">
            {" "}
            <i class="fab fa-instagram"></i>{" "}
          </a>
          <a href="#" class="menu-item blue">
            {" "}
            <i class="fab fa-facebook"></i>{" "}
          </a>
          <a href="#" class="menu-item lightblue">
            {" "}
            <i class="">Info</i>{" "}
          </a>
        </nav>
      </div>
    );
  }
}

export default Menu;
