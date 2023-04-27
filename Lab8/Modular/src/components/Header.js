import React, { Component } from "react";
import "./styles/Header.css";

export default class Header extends Component{
    render(){
        return(
            <header>
                <div id="titulo">Juego de Memoria</div>
                <div id="intentos">
                    Intentos: {this.props.numIntentos}
                </div>
            </header>
        );
    }
};
