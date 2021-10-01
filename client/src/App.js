import React, { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout/Layout';

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

class App extends Component {
  

  render() {
    return (
      <ChakraProvider theme={theme}>
          <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Layout />
            </Route>
            
          </Switch>
          </BrowserRouter>
      </ChakraProvider>
    );
  }
}

export default App;