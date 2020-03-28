import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./Down.css";
class Down extends Component {
  render() {
    return (
      <div className="down">
        <Link
          activeClass="active"
          to={this.props.element}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          <img src="/images/Down.png" />
        </Link>
      </div>
    );
  }
}
export default Down;
