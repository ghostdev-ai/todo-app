import React, { useState } from "react";
import "./App.css";
import { Container } from "@chakra-ui/react";

import { Formik } from "formik";

import { AddTodo } from "./components/AddTodo";
import { TodoTable } from "./components/TodoTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { todos: TODOS };
  }

  handleClick(newTodo) {
    this.setState(
      {
        todos: [...this.state.todos, { todo: newTodo }],
      },
      () => console.log(this.state.todos)
    );
  }

  render() {
    return (
      <Container>
        <AddTodo onClick={this.handleClick} />
        <TodoTable todos={this.state.todos} />
      </Container>
    );
  }
}

const TODOS = [
  { todo: "Pass the Coding Interviews." },
  { todo: "Contribute to Open Source." },
  { todo: "Practice Interview Questions on AlgoExpert." },
  { todo: "Watch FireShip Coding Tutorials." },
  { todo: "Read How To Crack The Coding Interview." },
];

export default App;
