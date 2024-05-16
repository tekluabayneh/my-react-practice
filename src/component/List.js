import React, { Component } from "react";

export default class List extends Component {
  render() {
    const prog = ["C++", "HTML", "js", "css", "python"];
    return (
      <div>
        {prog.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </div>
    );
  }
}
