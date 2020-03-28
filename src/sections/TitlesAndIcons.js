import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import Fullpage from "../components/Fullpage";
import Down from "../components/Down";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

import data from "../data.json";
import "./TitlesAndIcons.css";

class TitlesAndIcons extends Component {
  render() {
    return (
      <div>
        <Fullpage themeName={this.props.themeName}>
          <h1 className="title">{data.title}</h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div>
            <div>
              {Object.keys(data.links).map(key => {
                return <SocialIcon url={data.links[key]} />;
              })}
            </div>
          </div>
          <Down element="about" />
        </Fullpage>
        <Element name="about" className="element" />
      </div>
    );
  }
  toggle() {
    this.refs.p1.toggle();
  }
}
export default TitlesAndIcons;
