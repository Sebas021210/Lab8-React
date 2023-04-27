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

/* 
POR HACER
- Solo se puedan voltear dos cartas a la vez
- Cuando no coincidan voltearse automaticamente
- Cuando coincidan quedarse fijas y no poder voltearse
- Contador de intentos
- Aviso cuando se gano el juego
*/