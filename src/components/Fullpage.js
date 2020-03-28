import React, { Component } from "react";

import "./Fullpage.css";

class Fullpage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children } = this.props;
    return (
      <div className={`fullpage ${this.props.themeName || ""}`}>{children}</div>
    );
  }
}
export default Fullpage;
