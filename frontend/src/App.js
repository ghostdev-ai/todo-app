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
  Divider,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Formik } from 'formik';

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
        {todos.map(({ description }, id) => (
          <Container key={id}>
            <HStack>
              <Checkbox flex='1' m='4' colorScheme='green'>{ description }</Checkbox>
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
