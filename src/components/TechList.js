import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJs", "ReactNative"]
  };

  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>ReactNative</li>
      </ul>
    );
  }
}

export default TechList;
