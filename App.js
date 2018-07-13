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

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hand:
      [
      {key: 1, active: true},
      {key: 2, active: true},
      {key: 3, active: true},
      {key: 4, active: true},
      {key: 10, active: true}
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
              key={prop.key}
              value={prop.key}
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
      height:50,
      left:0,
      position:'absolute',
      top:Dimensions.get('window').height-74,
      flexDirection:'row'
    }
})
