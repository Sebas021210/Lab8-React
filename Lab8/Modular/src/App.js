import React, { Component } from "react";
import Header from "./components/Header.js";
import Tablero from "./components/Tablero.js";
import "./App.css";

const getEstadoInicial = () =>{
    return{
        parejaSelect: [],
        primeraCarta: [],
        setprimeraCarta: [],
        segundaCarta: [],
        setsegundaCarta: [],
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
    
    compararPareja(parejaSelect) {
        this.setState({ estaComparando: true });
      
        setTimeout(() => {
            const [primeraCarta, segundaCarta] = parejaSelect;
            let baraja = this.state.baraja;
      
            if (primeraCarta.lenguaje === segundaCarta.lenguaje) {
                console.log("Las cartas hacen match");
                baraja = baraja.map((carta) => {
                if (carta.lenguaje !== primeraCarta.lenguaje) {
                    return carta;
                } 
                return { ...carta, fueAdivinada: true };
                });
      
                this.verificarSiHayGanador(baraja);
      
                this.setState({
                    parejaSelect: [],
                    baraja,
                    estaComparando: false,
                    numIntentos: this.state.numIntentos + 1,
                });
            }else {
                console.log(parejaSelect);
                const [primeraCartaIndex, segundaCartaIndex] = [
                    baraja.findIndex((carta) => carta.id === primeraCarta.id),
                    baraja.findIndex((carta) => carta.id === segundaCarta.id),
                ];
                baraja[primeraCartaIndex].fueAdivinada = false;
                baraja[segundaCartaIndex].fueAdivinada = false;
        
                this.setState({
                    parejaSelect: [],
                    baraja: [...baraja],
                    estaComparando: false,
                });
            }
        }, 1000);
    }
      
    verificarSiHayGanador(baraja) {
        if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
            alert("Ganaste");
        }
    }      
}

export default App;