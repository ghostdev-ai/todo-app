import React from "react";
import { Container, HStack, Checkbox, Divider } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

export class TodoRow extends React.Component {
  render() {
    return (
      <Container>
        <HStack>
          <Checkbox flex="1" m="4" colorScheme="green">
            {this.props.todo}
          </Checkbox>
          <DeleteIcon color="red.500" />
        </HStack>
        <Divider />
      </Container>
    );
  }
}
