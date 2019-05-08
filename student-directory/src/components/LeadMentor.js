import React, { Component } from "react";
import Student from "./student";

export default class LeadMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsAnswered: 0,
      title: props.title
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ questionsAnswered: this.state.questionsAnswered + 1 });
  }
  render() {
    return (
      <div className="lead-mentor-container">
        <h1>Tim Biles</h1>
        <h3>questions answered today</h3>
        <h3>{this.state.questionsAnswered}</h3>
        <button onClick={this.handleClick}>Increase Answers</button>
        <br />
        <Student />
      </div>
    );
  }
}
