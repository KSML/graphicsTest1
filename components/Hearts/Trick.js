import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
} from 'react-native';

import Card from '../Card';

export default class Trick extends Component{
    constructor(props){
        super(props)
        this.state = {
            //eventually pass in a hand from shuffle function/component
            //hand[52] where each index represents a card and the possible value
            //at an index is 0,1,2,3 where 0 is you 1 is left, 2 is across, 3 is right
            hand: [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3],
            onTable: [-1,-1,-1,-1]
        };
        this.rowWrapStyle = this.rowWrapStyle.bind(this)

    }

    rowWrapStyle(){
        const width = Dimensions.get('window').width
        //todo: add same thing but height wise too
        const height = Dimensions.get('window').height

        var count = 0
        this.state.hand.map((val,index) => {
            if(val==0){
                count += 1
            }
        })
        numCardsBeforeExceedWidth = Math.floor(width/54)
        if(count > numCardsBeforeExceedWidth){
            return{
                top:Dimensions.get('window').height-174,
            }
        } else{
            return{
                top:Dimensions.get('window').height-99
            }
        }
    }

    render() {
        return (
          <View>
            <View style={[styles.hand, this.rowWrapStyle()]}>
                {
                    // map(1 is value, 2 is index, 3 is array map)
                    this.state.hand.map((playerOwn, index) => {
                        if(playerOwn==0){
                            return(
                                <Card
                                key={index}
                                value={index}
                                cardActive={true}
                                />
                            );
                        }
                    })
                }
            </View>
            <View style={styles.left}>
                {
                    this.state.hand.map((playerOwn,index) => {
                        if(playerOwn==1){
                            return(
                                <Card
                                key={index}
                                value={52}
                                cardActive={false}
                                />
                            );
                        }
                    })
                }
            </View>
            <View style={styles.across}>
                {
                    this.state.hand.map((playerOwn,index) => {
                        if(playerOwn==2){
                            return(
                                <Card
                                key={index}
                                value={52}
                                cardActive={false}
                                />
                            );
                        }
                    })
                }
            </View>
            <View style={styles.right}>
                {
                    this.state.hand.map((playerOwn,index) => {
                        if(playerOwn==3){
                            return(
                                <Card
                                key={index}
                                value={52}
                                cardActive={false}
                                />
                            );
                        }
                    })
                }
            </View>
          </View>
        )
      }
}
//todo: either remove having all cards displayed and remove
//      absolute positioning and replace it with percentage
//      function to place it in center of left/across/right
const styles = StyleSheet.create({
    hand:{
        maxWidth:Dimensions.get('window').width,
        width:Dimensions.get('window').width,
        height:150,
        left:0,
        position:'absolute',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        justifyContent:'center',
    },
    left:{
        maxWidth:Dimensions.get('window').width,
        width:Dimensions.get('window').width,
        height:150,
        right:132,
        top:250,
        position:'absolute',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        justifyContent:'center',
        transform:[{rotate: '90deg'}]
    },
    across:{
        maxWidth:Dimensions.get('window').width,
        width:Dimensions.get('window').width,
        height:150,
        position:'absolute',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        justifyContent:'center',
        transform:[{rotate: '180deg'}]
    },
    right:{
        maxWidth:Dimensions.get('window').width,
        width:Dimensions.get('window').width,
        height:150,
        left:132,
        top:250,
        position:'absolute',
        flexDirection:'row',
        alignItems:'flex-start',
        flexWrap:'wrap',
        justifyContent:'center',
        transform:[{rotate: '270deg'}]
    },
    center:{

    }
})