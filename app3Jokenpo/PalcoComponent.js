import React, { Component } from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import IconeComponent from './IconeComponent';

const styles = StyleSheet.create({
	palco: {
		alignItems: 'center',
		marginTop: 10
	},
	textoResultado: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'red',
		height: 60
	}
});

export default class PainelAcoesComponent extends Component {
    render(){
        return (
            <View style={styles.palco}>
                <Text style={styles.textoResultado}>{this.props.resultado}</Text>
                <IconeComponent escolha={this.props.escolhaUsuario} jogador="Você" />
                <IconeComponent escolha={this.props.escolhaComputador} jogador="Computador" />
            </View>
        )
    }
}
module.export = PainelAcoesComponent;
