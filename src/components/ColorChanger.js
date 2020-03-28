import React, { Component } from "react";
import "./ColorChanger.css";

class ColorChanger extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="colorChanger">
        <img src="/images/magic.png" onClick={this.toggle} />
      </div>
    );
  }
  toggle = event => {
    this.props.onClick();
  };
}
export default ColorChanger;
