import React, { Component } from "react";
import ReactCardFlip from 'react-card-flip';
import backFace from "../imagenes/card.png";
import "./styles/Cartas.css";

export default class Cartas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { name, number, frontFace } = this.props;
    const { isFlipped } = this.state;

    return (
      <div className='card' >
        <ReactCardFlip isFlipped={isFlipped} >
          <img className='card-image' src={backFace} alt='back-face' onClick={this.handleClick}/>
          <img className='card-image' src={frontFace} alt='front-face'onClick={this.handleClick}/>
        </ReactCardFlip>
      </div>
    );
  }
}
