import React, { Component } from "react";
import languageContext from "../context/languageContext";

class Button extends Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <button className="button ui primary">{text}</button>;
  }
}

export default Button;
