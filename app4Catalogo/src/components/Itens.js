import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {
  render() {
    let { foto, titulo, valor, local_anuncio, data_publicacao } = this.props.item;
    debugger
    
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image source={{uri: foto}} style={{width: 100, height: 100}} />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{titulo}</Text>
          <Text style={styles.txtValor}>R$ {valor}</Text>
          <Text style={styles.txtDetalhes}>Local:{local_anuncio}</Text>
          <Text style={styles.txtDetalhes}>Dt. Publicação: {data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderColor: "#999",
    backgroundColor: "#FFF",
    margin: 10,
    padding: 10,
    flexDirection: "row"
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    color: "blue",
    marginBottom: 5
  },
  txtValor: {
    fontSize:16,
    fontWeight: "bold"
  },
  txtDetalhes: {
    fontSize: 16
  }
})