import React, { Component } from "react";
import Cartas from "./Cartas.js"
import { images } from '../imagenes.js'
import "./styles/Tablero.css";

export default class Tablero extends Component{
    render(){
        const cartas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        return(
            <div id="tablero">
                {
                    cartas.map((carta) => (
                        <Cartas name={carta.lenguaje} number={carta.id} frontFace={carta.src}></Cartas>
                    )
                    )
                }
            </div>
        );
    }
};
