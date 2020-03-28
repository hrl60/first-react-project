import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import "./Menu.css";
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Link
          activeClass="active"
          to={this.props.aboutElement}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <a className="menu-item">About Me</a>
        </Link>
        <Link
          activeClass="active"
          to={this.props.skillsElement}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <a className="menu-item">Skills</a>
        </Link>
      </div>
    );
  }
}
export default Menu;
