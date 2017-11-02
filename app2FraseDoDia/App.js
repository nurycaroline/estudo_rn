/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  botao: {
    backgroundColor: "#00A077",
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  imagem: {
    width: 250,
    height: 250
  },
  textoPrincipal: {
    fontSize: 35,
    color: "#00A077",
    fontWeight: "bold"
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 15);

  var frases = Array();
  frases[0] = "Enquanto houver vontade de lutar haverá esperança de vencer.";
  frases[1] = "Conquistar não é suficiente. É preciso saber seduzir.";
  frases[2] = "A primeira e melhor vitória é conquistar a si mesmo.";
  frases[3] = "Vencer a si próprio é a maior das vitórias.";
  frases[4] = "Vencer não é competir com o outro. É derrotar seus inimigos interiores.";
  frases[5] = "Imagine uma nova história para sua vida e acredite nela.";
  frases[6] = "Não espere por uma crise para descobrir o que é importante em sua vida.";
  frases[7] = "Não existe um caminho para a felicidade. A felicidade é o caminho.";
  frases[8] = "Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.";
  frases[9] = "A alegria de fazer o bem é a única felicidade verdadeira.";
  frases[10] = "Somente quando encontramos o amor, é que descobrimos o que nos faltava na vida.";
  frases[11] = "Pessimismo leva à fraqueza, otimismo ao poder.";
  frases[12] = "Muitas pessoas perdem as pequenas alegrias enquanto aguardam a grande felicidade.";
  frases[13] = "Aquele que nunca viu a tristeza, nunca reconhecerá a alegria.";
  frases[14] = "Um único minuto de reconciliação vale mais do que toda uma vida de amizade.";

  Alert.alert(frases[numeroAleatorio]);
};

export default class App extends Component<{}> {
  render() {
    const { principal, botao, textoBotao, imagem, textoPrincipal } = Estilos;

    return (
      <View style={principal}>
        <Text style={textoPrincipal}>Frase do Dia</Text>

        <Image style={imagem} source={require("./img/books.png")} />

        <TouchableOpacity onPress={gerarNovaFrase} style={botao}>
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
