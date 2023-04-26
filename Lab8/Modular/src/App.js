import React, { Component } from "react";
import Header from "./components/Header.js";
import Tablero from "./components/Tablero.js";
import "./App.css";

class App extends Component{
    render(){
        return(
            <div id="App">
                <Header />
                <Tablero />
            </div>
        );
    }
}

export default App;