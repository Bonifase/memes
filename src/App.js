import React, { Component } from "react";
import Image from "./components/Image";
import "./App.css";

export default class App extends Component {
  state = {
    data: {
      headerText: "",
      footerText: "",
      Author: ""
    },
    selectedFile: null,
    loading: false
  };

  fileChangedHandler = e => {
    e.preventDefault();
    this.setState({
      selectedFile: URL.createObjectURL(e.target.files[0])
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    console.log(this.state);
  };
  onChange = e => {
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
    console.log(this.state);
  };

  render() {
    let data = this.state.data;
    return (
      <div className="showcasew">
        <header className="App-logo">
          {this.state.selectedFile === null ? (
            <input type="file" onChange={this.fileChangedHandler} />
          ) : (
            <p className="container">
              <Image props={this.state} />
            </p>
          )}
          <form onSubmit={this.onSubmit} loading={this.state.loading}>
            <input
              type="text"
              id="header"
              name="header"
              placeholder="Header Text"
              value={data.header}
              onChange={this.onChange}
            />
            <br />
            <input
              type="text"
              id="footer"
              name="footer"
              placeholder="Footer Text"
              value={data.footer}
              onChange={this.onChange}
            />
            <br />
            <input type="text" id="author" name="author" placeholder="You Name" value={data.author} onChange={this.onChange} />
            <button>Generate!</button>
          </form>
        </header>
      </div>
    );
  }
}
