import React, { Component, useState, useEffect } from "react";
import shuffle from 'lodash.shuffle';
import Cartas from "./Cartas.js";
import { images } from '../imagenes.js';
import "./styles/Tablero.css";

export default class Tablero extends Component {
  state = {
    cards: []
  }

  shuffleArray = (array) => {
    let newArray = array.slice(0, 16);
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  }

  componentDidMount() {
    const cartas = images.map((image) => ({
      lenguaje: image.lenguaje,
      id: image.id,
      src: image.src,
    }));

    const cartasDuplicadas = cartas.concat(cartas);
    const cartasMezcladas = this.shuffleArray(cartasDuplicadas);
    this.setState({ cards: cartasMezcladas });
  }

  render() {
    return (
      <div id="tablero">
        {this.state.cards.map((carta) => (
          <Cartas name={carta.lenguaje} number={carta.id} frontFace={carta.src} />
        ))}
      </div>
    );
  }
}