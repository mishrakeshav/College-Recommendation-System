
import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';

const Home = ()=>{
  return (
    <div>
      <Header/>
      <Hero />
    </div>
  );
}

export default Home;