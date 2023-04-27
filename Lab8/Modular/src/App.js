import React, { Component } from "react";
import Header from "./components/Header.js";
import Tablero from "./components/Tablero.js";
import "./App.css";

const getEstadoInicial = () =>{
    return{
        parejaSelect: [],
        estaComparando: false,
        numIntentos: 0
    }
} 

class App extends Component{
    constructor(props){
        super(props);
        this.state = getEstadoInicial();
    }

    render(){
        return(
            <div id="App">
                <Header 
                    numIntentos={this.state.numIntentos}
                />
                <Tablero 
                    parejaSelect={this.state.parejaSelect}
                    seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
                />
            </div>
        );
    }

    seleccionarCarta(carta){
        if(
            this.state.estaComparando ||
            this.state.parejaSelect.indexOf(carta) > -1 ||
            carta.fueAdivinada
        ){
            return;
        }
    
        const parejaSelect = [...this.state.parejaSelect, carta];
        this.setState({
            parejaSelect
        });

        if (parejaSelect.length == 2){
            this.compararPareja(parejaSelect)
        }
    }
    
    compararPareja(parejaSelect){
        this.state({estaComparando: true});

        setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejaSelect;
            let baraja = this.state.baraja;

            if (primeraCarta.lenguaje == segundaCarta.lenguaje){
                baraja = baraja.map((carta) => {
                    if (carta.src !== primeraCarta.src){
                        return carta;
                    }

                    return {...carta, fueAdivinada: true};
                })
            }

            this.verificarGanador(baraja)
            this.setState({
                parejaSelect: [],
                baraja,
                estaComparando: false,
                numIntentos: this.state.numIntentos + 1
            })
        }, 1000)
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