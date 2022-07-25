import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import {
  Container,
  HStack,
  VStack,
  Input,
  Button,
  Checkbox,
  Text,
  Divider,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { description: "Pass the coding interviews!" },
  ]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setTodos((prevState) => [...prevState, { description: value }]);
    setValue("");
  };

  return (
    <Container>
      <HStack p="4">
        <Input placeholder="Things to accomplish." onChange={handleChange} value={value} />
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </HStack>
      <VStack>
        {todos.map(({ description }, index) => (
          <Container>
            <HStack>
              <Checkbox m='4' colorScheme='green' key={index}>{ description }</Checkbox>
              <DeleteIcon color='red.500' onClick={() => console.log('Clicked Icon!')} />
            </HStack>
            <Divider />
          </Container>
        ))}
      </VStack>
    </Container>
  );
}

export default App;
