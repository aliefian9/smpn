import React, { Component } from "react";

export default class my404 extends Component {
  render() {
    if (localStorage.getItem("token") == null) {
      return (
        <div>
          <h1> 404 page not found</h1>
          <a href="/">KLIK</a>
        </div>
      );
    } else {
      return (
        <div>
          <h1> 404 page not found</h1>
          <a href="/home">KLIK</a>
        </div>
      );
    }
  }
}
