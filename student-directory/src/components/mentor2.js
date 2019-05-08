import React, { Component } from "react";

export default function Mentor(props) {
  return props.questions.map((question, index) => {
    return (
      <div>
        <div>{question}</div>
        <button onClick={() => props.answerQuestion(index)}>Answered</button>
      </div>
    );
  });
}
