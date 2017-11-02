import React, { Component } from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class Topo extends Component {
    render(){
        return(
            <View>
                <Image source={require('./img/jokenpo.png')} />
            </View>
        );
    }
}
module.export = Topo;
