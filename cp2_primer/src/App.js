import React, { Component } from "react";

const count = 4

export default class App extends Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2 m-1">
      Number of things: { count }
    </h4>
}