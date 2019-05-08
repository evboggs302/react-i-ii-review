### Remember

Answer these on your own, then compare answers as a group

1.  What is React?

its a library used for building UI's.

2.  What is create-react-app?

its a command given in terminal to create your own instance/app with React

3.  What is Component Based Architecture?

this is the seperation of data for one project into several parts/docuemnts aka components

4.  What is JSX?

languae used in React that looks like a combination of JS and HTML with it's own reserved words

5.  What is the virtual DOM?

a local DOM that is being created that will share changes that occur

6.  What is unidirectional (one-way) data flow?

the flow of data from the parent comp to the child comps, with the change of data or data declarations having to come from the parent

### Understand

Discuss these questions in pairs if you have a 4-person group

7.  Summarize what happens when you run `create-react-app my-app`

8.  Explain what this code does:

```jsx
import React from "react";

const Mentor = props => (
  <div className="mentor-container">
    <h1 className={props.title === "Lead Mentor" ? "lead" : ""}>Tim Biles</h1>
    <ul>
      <li>Fort Worth, TX</li>
      <li>My email address is timbilestimbiles@gmail.com</li>
    </ul>
  </div>
);

export default Mentor;
```

9.  Explain how data is passed from a parent component to a child component.

PROPS!!!!!!!

### Apply

Try these on your own, but work together if you start to get stuck.

10. Use `create-react-app` to create a new React application called `student-directory`

11. Use the code from `Mentor` above to create a new functional, stateless component called `User` with a list of friends. Hard code the list of friends, do not use state or props.

### Analyze, Evaluate, Create

Discuss these questions as a group

12. What are the benefits and drawbacks of using a tool like create-react-app?

13. Compare and contrast JSX with other templating options, such as those used in Angular or Vue

14. Compare and contrast one-way data flow with two-way data binding.
