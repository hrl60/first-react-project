import React, { Component } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import "./Up.css";
class Up extends Component {
  render() {
    return (
      <div className="up">
        <img src="/images/up.png" onClick={scroll.scrollToTop} />
      </div>
    );
  }
}
export default Up;
