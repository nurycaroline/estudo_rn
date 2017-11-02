import React, { Component } from "react";
import { AppRegistry, Button, Text, View } from "react-native";

const geraNumeroAleatorio = () => {
	alert(Math.floor(Math.random() * 10));
}

const App = () => {
  return (
    <View>
      <Text> Gerando numero randômicos </Text>
			<Button title="Gerar um numero randômico" 
					onPress={geraNumeroAleatorio} />
    </View>
  )
}

AppRegistry.registerComponent("app1NumeroRandomico", () => App);