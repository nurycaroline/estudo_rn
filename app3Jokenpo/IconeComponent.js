import React, { Component } from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    icones:{
        alignItems: 'center',
        marginBottom: 20,
    }, 
    textJogador: {
        fontSize: 18
    }
});


export default class IconeComponent extends Component {
    render(){
        return (
            <View>
                { 
                    !this.props.escolha ? <Image></Image> :
                    <View style={styles.icones}>
                        <Text style={styles.textJogador}>{this.props.jogador}</Text>
                        {
                            this.props.escolha == 'pedra' ? 
                                <Image source={require('./img/pedra.png')} />
                            : this.props.escolha == 'tesoura' ?
                                <Image source={require('./img/tesoura.png')} />
                            : this.props.escolha == 'papel' ?
                                <Image source={require('./img/papel.png')} />
                            : ''
                        }
                    </View>
                }
            </View>
        )
    }
}
module.export = IconeComponent;
