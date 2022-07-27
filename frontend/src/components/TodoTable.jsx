import React from "react";
import { VStack } from "@chakra-ui/react";
import { Container, HStack, Checkbox, Divider } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { TodoRow } from "./TodoRow";

export class TodoTable extends React.Component {
  render() {
    return (
      <VStack>
        {this.props.todos.map(({ todo }, key) => (
          <TodoRow key={key} todo={todo} />
        ))}
      </VStack>
    );
  }
}
