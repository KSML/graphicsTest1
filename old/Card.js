import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import Images from '../assets/manager'

/*  class Card(cardFace, cardType, cardActive)
 *
 *
 *
 */
export default class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardFace: props.cardFace,
            cardType: props.card,
            cardActive: props.active
        };
        this.onCardPress = this.onCardPress.bind(this)
    }

    onCardPress(){
        if(this.state.cardActive==true){
            Alert.alert("pushed " + this.state.cardType)
        }
    }
    
    render(){
        return(
            <View>
            <TouchableOpacity onPress={this.onCardPress} style={styles.card}>
                <Image source={this.state.cardFace} style={styles.card}/>
            </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card:{
        width:72,
        height:100,
        alignContent: "center"
    }
})
/*
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';
import CardPresent from './CardPresent'

import Images from '../assets/manager'

export default class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardFace: Images.heart1,
            cardType: undefined
        };
        this.onCardPress = this.onCardPress.bind(this)
    }

    onCardPress(){
        Alert.alert("pushed")
    }
    
    render(){
        return(
            <View>
                <CardPresent source = {this.state.cardFace} onCardPress = {this.onCardPress}/>
            </View>
        );
    }
}
*/