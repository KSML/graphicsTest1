/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions
} from 'react-native';

import Card from './components/Card';

import Images from './assets/manager'

const deck = [
  {card: "heart1", key: "1", cardFace: Images.heart1, active: true},
  {card: "heart2", key: "2", cardFace: Images.heart2, active: true},
  {card: "heart3", key: "3", cardFace: Images.heart3, active: true},
  {card: "heart4", key: "4", cardFace: Images.heart4, active: true},
  {card: "heart5", key: "5", cardFace: Images.heart5, active: true},
  {card: "heart6", key: "6", cardFace: Images.heart6, active: true},
  {card: "heart7", key: "7", cardFace: Images.heart7, active: true},
  {card: "heart8", key: "8", cardFace: Images.heart8, active: true},
  {card: "heart9", key: "9", cardFace: Images.heart9, active: true},
  {card: "heart10", key: "10", cardFace: Images.heart10, active: true},
  {card: "heart11", key: "11", cardFace: Images.heart11, active: true},
  {card: "heart12", key: "12", cardFace: Images.heart12, active: true},
  {card: "heart13", key: "13", cardFace: Images.heart13, active: true},
  {card: "spade1", key: "14", cardFace: Images.spade1, active: true},
]

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hand:
      [
      {card: "heart1", key: 1, cardFace: Images.heart1, active: true},
      {card: "heart2", key: 2, cardFace: Images.heart2, active: true},
      {card: "heart6", key: 6, cardFace: Images.heart6, active: true},
      {card: "heart4", key: 4, cardFace: Images.heart4, active: true},
      {card: "heart13", key: 13, cardFace: Images.heart13, active: true}
      ]
    };
  }

  render() {
    return (
      <View style={styles.hand}>
        {
        this.state.hand.map((prop) => {
          return(
            <Card
              cardFace={prop.cardFace}
              key={prop.key}
              cardType={prop.card}
              cardActive={prop.active}
            />
          );
        })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    hand:{
      width:Dimensions.get('window').width,
      height:100,
      left:0,
      position:'absolute',
      top:Dimensions.get('window').height-124,
      flexDirection:'row'
    }
})
