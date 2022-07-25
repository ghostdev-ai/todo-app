import React, { useState } from "react";
//import logo from './logo.svg';
import "./App.css";
import {
  Container,
  HStack,
  VStack,
  Input,
  Button,
  Text,
  Divider,
} from "@chakra-ui/react";

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
        <Input placeholder="Enter Todo" onChange={handleChange} value={value} />
        <Button mt={4} colorScheme="teal" type="submit" onClick={handleClick}>
          Submit
        </Button>
      </HStack>
      <VStack>
        {todos.map(({ description }, index) => (
          <Container>
            <Text key={index}>{description}</Text>
            <Divider />
          </Container>
        ))}
      </VStack>
    </Container>
  );
}

export default App;
