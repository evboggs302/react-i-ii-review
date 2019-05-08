import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsAnswered: [],
      askedQuestion: ""
    };
  }

  changeHandler = event => {
    this.setState({
      askedQuestion: event.target.value
    });
  };

  //   clickHandler = () => {
  //     this.setState({
  //       questionsAnswered: [
  //         ...this.state.questionsAnswered,
  //         this.state.askedQuestion
  //       ]
  //     });
  //   };

  render() {
    return (
      <div>
        {this.state.questionsAnswered.length}
        <br />

        {this.state.questionsAnswered.map(question => {
          return <div>{question}</div>;
        })}
        <br />
        <input onChange={this.changeHandler} />
        <button
          onClick={() => this.props.askQuestion(this.state.askedQuestion)}
        >
          Increase
        </button>
      </div>
    );
  }
}
