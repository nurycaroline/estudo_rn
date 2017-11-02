/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button
} from "react-native";
import TopoComponent from "./TopoComponent";
import PalcoComponent from "./PalcoComponent";
import PainelAcoesComponent from "./PainelAcoesComponent";


export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: "",
      escolhaComputador: "",
      resultado: "",
      nomeJogador: ""
    };
  }

  verificarGanhador = (escolhaUsuario, escolhaComputador) => {
    let usuarioGanhou = "Você ganhou!";
    let computadorGanhou = "Você perdeu!";
  
    if (escolhaUsuario == escolhaComputador) {
      return "Empate";
    } else if (escolhaComputador == "pedra") {
      return escolhaUsuario == "papel"
        ? usuarioGanhou
        : escolhaUsuario == "tesoura" ? computadorGanhou : "";
    } else if (escolhaComputador == "papel") {
      return escolhaUsuario == "tesoura"
        ? usuarioGanhou
        : escolhaUsuario == "pedra" ? computadorGanhou : "";
    } else if (escolhaComputador == "tesoura") {
      return escolhaUsuario == "pedra"
        ? usuarioGanhou
        : escolhaUsuario == "papel" ? computadorGanhou : "";
    }
  };
  
  jokenpo = escolhaUsuario => {
    let numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = "";
    let resultado = "";
  
    switch (numeroAleatorio) {
      case 0:
        escolhaComputador = "pedra";
        break;
      case 1:
        escolhaComputador = "papel";
        break;
      case 2:
        escolhaComputador = "tesoura";
        break;
    }
  
    this.setState({
      escolhaUsuario: escolhaUsuario,
      escolhaComputador: escolhaComputador,
      resultado: this.verificarGanhador(escolhaUsuario, escolhaComputador)
    });
  };
  render() {
    return (
      <View>
        <TextInput
          value={this.state.nomeJogador}
          onChangeText={text => this.setState({ nomeJogador: text })}
        />

        <Text>{this.state.nomeJogador}</Text>

        <TopoComponent />
        <PainelAcoesComponent jokenpo={this.jokenpo} />

        <PalcoComponent
          escolhaUsuario={this.state.escolhaUsuario}
          escolhaComputador={this.state.escolhaComputador}
          resultado={this.state.resultado}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
