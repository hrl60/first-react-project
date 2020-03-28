import React, { Component } from "react";

import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import Up from "../components/Up";
import data from "../data.json";
import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage themeName={this.props.themeName}>
          <h1>{data.sections[1].title}</h1>
          <div className="cardwrapper">
            {data.sections[1].items.map(skill => {
              return <SkillCard skill={skill} />;
            })}
          </div>
          <Up />
        </Fullpage>
      </div>
    );
  }
}
export default SkillSection;
