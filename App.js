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

import Trick from './components/Hearts/Trick';

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
      <Trick/>
    )
  }
}