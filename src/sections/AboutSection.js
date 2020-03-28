import React, { Component } from "react";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import Fullpage from "../components/Fullpage";
import Down from "../components/Down";
import data from "../data.json";
import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage themeName={this.props.themeName}>
          <h1>{data.sections[0].title}</h1>
          <div>
            {data.sections[0].items.map(content => {
              return <p>{content.content}</p>;
            })}
          </div>
          <Down element="skills" />
        </Fullpage>
        <Element name="skills" className="element" />
      </div>
    );
  }
}
export default AboutSection;
