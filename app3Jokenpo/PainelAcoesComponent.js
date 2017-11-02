import React, { Component } from 'react';
import {View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	btEscolha: {
		width: 90
	}, 
	painelAcoes: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10
	},
});



export default class PainelAcoesComponent extends Component {
    
    render(){
        return (
            <View style={styles.painelAcoes}>
                <View>
                    <Button style={styles.btEscolha} title="Pedra" onPress={() => this.props.jokenpo('pedra')} />
                </View>
                <View>
                    <Button style={styles.btEscolha} title="Papel" onPress={() => this.props.jokenpo('papel')} />
                </View>
                <View>
                    <Button style={styles.btEscolha} title="Tesoura" onPress={() => this.props.jokenpo('tesoura')} />
                </View>
            </View>
        )
    }
}
module.export = PainelAcoesComponent;
