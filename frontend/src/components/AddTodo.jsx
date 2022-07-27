import React from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = { todo: "" };
  }

  handleChange(e) {
    this.setState({
      todo: typeof e !== "undefined" ? e.target.value : ""
    });
  }

  onClick() {
    this.props.onClick(this.state.todo);
    this.handleChange();
  }

  render() {
    return (
      <HStack p="4">
        <Input
          placeholder="Things to accomplish."
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <Button mt={4} colorScheme="teal" type="submit" onClick={this.onClick}>
          Submit
        </Button>
      </HStack>
    );
  }
}
