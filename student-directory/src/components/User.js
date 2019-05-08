import React, { Component } from "react";

const Mentor = props => (
  <div className="mentor-container">
    <h1 className={props.title === "Lead Mentor" ? "lead" : ""}>Tim Biles</h1>
    <ul>
      <li>John</li>
      <li>Fred</li>
      <li>Nicki</li>
    </ul>
  </div>
);

export default Mentor;
