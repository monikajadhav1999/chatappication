import React from 'react'
import {VStack} from '@chakra-ui/react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Login = () => {
const [show, setShow] = useState(false);
const toast = useToast();
const [email, setEmail] = useState();
const [loading, setLoading] = useState(false);
const [password, setPassword] = useState();

const history = useHistory();
const handleClick = () => setShow(!show)


const submitHandler = async () => {
  setLoading(true);
  if (!email || !password) {
    toast({
      title: "Please Fill all the Feilds",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setLoading(false);
    return;
  }

  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/user/login",
      { email, password },
      config
    );

    toast({
      title: "Login Successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    // setUser(data);
    localStorage.setItem("userInfo", JSON.stringify(data));
    setLoading(false);
    history.push("/chats");
  } catch (error) {
    toast({
      title: "Error Occured!",
      description: error.response.data.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
    setLoading(false);
  }
};


  return (
    <VStack spacing="5px">
    

        <FormControl id="Email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        placeholder="Enter Your EmailID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        </FormControl>

        <FormControl id="Password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
      <Input
      type={show ? "text" : "password"}
        placeholder="Enter Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm"  onClick={handleClick} >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        </FormControl>
  <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        // isLoading={submitHandler}
        >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("24682468");
        }}
      >
        Get Guest User Credentials
      </Button>  
    </VStack>
  )
  }

export default Login;
