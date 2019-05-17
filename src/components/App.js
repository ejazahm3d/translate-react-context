import React, { Component } from "react";
import UserCreate from "./UserCreate";
import languageContext from "../context/languageContext";
class App extends Component {
  state = {
    language: "english"
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="">
          Select A language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <languageContext.Provider value={this.state.language}>
          <UserCreate />
        </languageContext.Provider>
      </div>
    );
  }
}

export default App;
