import React, { Component } from "react";
import "./SkillCard.css";
class SkillCard extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="skillimage">
          <img src={skill.content.image} />
        </div>
        <div className="skilltitle">{skill.content.title}</div>
      </div>
    );
  }
}
export default SkillCard;
