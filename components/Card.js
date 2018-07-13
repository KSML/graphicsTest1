import React, { Component } from 'react';
import {
  StyleSheet,
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
            cardFace: this.keyToCardFace(props.value),
            value: props.value,
            cardActive: props.cardActive
        };
        this.onCardPress = this.onCardPress.bind(this)
        this.keyToCardFace = this.keyToCardFace.bind(this)
    }

    keyToCardFace(value){
        if(value==0) {return Images.heart2}
        else if(value==1) {return Images.heart3}
        else if(value==2) {return Images.heart4}
        else if(value==3) {return Images.heart5}
        else if(value==4) {return Images.heart6}
        else if(value==5) {return Images.heart7}
        else if(value==6) {return Images.heart8}
        else if(value==7) {return Images.heart9}
        else if(value==8) {return Images.heart10}
        else if(value==9) {return Images.heart11}
        else if(value==10) {return Images.heart12}
        else if(value==11) {return Images.heart13}
        else if(value==12) {return Images.heart1}
        else if(value==13) {return Images.spade2}
        else if(value==14) {return Images.spade3}
        else if(value==15) {return Images.spade4}
        else if(value==16) {return Images.spade5}
        else if(value==17) {return Images.spade6}
        else if(value==18) {return Images.spade7}
        else if(value==19) {return Images.spade8}
        else if(value==20) {return Images.spade9}
        else if(value==21) {return Images.spade10}
        else if(value==22) {return Images.spade11}
        else if(value==23) {return Images.spade12}
        else if(value==24) {return Images.spade13}
        else if(value==25) {return Images.spade1}
        else if(value==26) {return Images.diamond2}
        else if(value==27) {return Images.diamond3}
        else if(value==28) {return Images.diamond4}
        else if(value==29) {return Images.diamond5}
        else if(value==30) {return Images.diamond6}
        else if(value==31) {return Images.diamond7}
        else if(value==32) {return Images.diamond8}
        else if(value==33) {return Images.diamond9}
        else if(value==34) {return Images.diamond10}
        else if(value==35) {return Images.diamond11}
        else if(value==36) {return Images.diamond12}
        else if(value==37) {return Images.diamond13}
        else if(value==38) {return Images.diamond1}
        else if(value==39) {return Images.club2}
        else if(value==40) {return Images.club3}
        else if(value==41) {return Images.club4}
        else if(value==42) {return Images.club5}
        else if(value==43) {return Images.club6}
        else if(value==44) {return Images.club7}
        else if(value==45) {return Images.club8}
        else if(value==46) {return Images.club9}
        else if(value==47) {return Images.club10}
        else if(value==48) {return Images.club11}
        else if(value==49) {return Images.club12}
        else if(value==50) {return Images.club13}
        else if(value==51) {return Images.club1}
        else if(value==52) {return Images.back1}
    }

    onCardPress(){
        if(this.state.cardActive==true){
            Alert.alert("pushed " + this.state.value)
        }
    }
    
    render(){
        return(
            <View>
            <TouchableOpacity onPress={this.onCardPress} style={styles.buttonCard}>
                <Image source={this.state.cardFace} style={styles.card}/>
            </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card:{
        width:36,
        height:50,
        alignContent: "center"
    },
    buttonCard:{
        width:36,
        height:50
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