import React, { Component } from "react";
import languageContext from "../context/languageContext";

class Field extends Component {
  static contextType = languageContext;

  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui form">
        <label htmlFor="">{text}</label>
        <input type="text" />
      </div>
    );
  }
}

export default Field;
