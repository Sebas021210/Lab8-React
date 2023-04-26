import React, { Component } from "react";
import Cartas from "./Cartas.js";
import { images } from '../imagenes.js';
import "./styles/Tablero.css";

export default class Tablero extends Component {
  render() {
    const cartas = images.map((image) => ({
      lenguaje: image.lenguaje,
      id: image.id,
      src: image.src,
    }));

    return (
      <div id="tablero">
        {cartas.map((carta) => (
          <Cartas name={carta.lenguaje} number={carta.id} frontFace={carta.src} />
        ))}
      </div>
    );
  }
}
