import React, { Component } from "react";

const message = "This is a constant"

export default class App extends Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2 m-1">
      { message }
    </h4>
}