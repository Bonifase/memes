import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    selectedFile: null,
    headerText: "",
    footerText: "",
    Author: ""
  };

  fileChangedHandler = event => {
    this.setState({
      selectedFile: URL.createObjectURL(event.target.files[0]),
      headerText: event.target.header,
      footerText: event.target.footer,
      author: event.target.author
    });
  };
  generateMeme = event => {
    this.setState({
      headerText: event.target.header,
      footerText: event.target.footer,
      author: event.target.author
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App-header">
        <header className="App-logo">
          {this.state.selectedFile === null ? (
            <input type="file" onChange={this.fileChangedHandler} />
          ) : (
            <img src={this.state.selectedFile} />
          )}
          <form>
            <input type="text" />
            <br />
            <input type="text" />
            <br />
            <input type="text" />
            <button onClick={this.generateMeme}>Generate!</button>
          </form>
        </header>
      </div>
    );
  }
}
