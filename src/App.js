import React, { Component } from "react";
import logo from "./logo.svg";
import data from "./data.json";
import { SocialIcon } from "react-social-icons";
import "./App.css";
import TitlesAndIcons from "./sections/TitlesAndIcons";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import ColorChange from "./components/ColorChanger";
import Menu from "./components/Menu";
import SnowStorm from "react-snowstorm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      titleTheme: "first",
      aboutTheme: "second",
      skillTheme: "third"
    };
  }
  render() {
    return (
      <div className="App">
        <div>
          <SnowStorm followMouse="0" snowCharacter="·" animationInterval="50" />
        </div>
        <div className="navigation">
          <ColorChange onClick={this.toggleTheme} />

          <Menu aboutElement="about" skillsElement="skills" />
        </div>

        <TitlesAndIcons themeName={this.state.titleTheme} />
        <AboutSection themeName={this.state.aboutTheme} />
        <SkillSection themeName={this.state.skillTheme} />
      </div>
    );
  }

  toggleTheme = event => {
    this.setState({ titleTheme: this.getNextTheme(this.state.titleTheme) });
    this.setState({ aboutTheme: this.getNextTheme(this.state.aboutTheme) });
    this.setState({ skillTheme: this.getNextTheme(this.state.skillTheme) });
  };
  getNextTheme = themeName => {
    if (themeName === "first") return "second";
    else if (themeName === "second") return "third";
    else return "first";
  };
}

export default App;
