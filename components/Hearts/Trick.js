import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
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
            //onTable is what is in the middle. edited when someone plays a card
            onTable: [-1,-1,-1,-1],
        };
        this.rowWrapStyle = this.rowWrapStyle.bind(this)
        this.leftCardStack=this.leftCardStack.bind(this)
        this.acrossCardStack=this.acrossCardStack.bind(this)
        this.rightCardStack=this.rightCardStack.bind(this)
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

    // WEST
    // returns # of cards that WEST has
    leftCardStack(playerOwn,index){
        var count = 0
        this.state.hand.map((value,index)=>{
            if(value==1){
                count = count+1
            }
        })
        return(
            "x" + count
         );
    }

    //NORTH
    // returns # of cards that NORTH has
    acrossCardStack(playerOwn,index){
        var count = 0
        this.state.hand.map((value,index)=>{
            if(value==2){
                count = count+1
            }
        })
        return(
            "x" + count
         );
    }

    //EAST
    // returns # of cards that EAST has
    rightCardStack(playerOwn,index){
        var count = 0
        this.state.hand.map((value,index)=>{
            if(value==3){
                count = count+1
            }
        })
        return(
            "x" + count
         );
    }

    render() {
        return (
            <View>
                {/* Player Hand */}
                <View style={[styles.hand, this.rowWrapStyle()]}>
                    {
                        // map(1 is value, 2 is index, 3 is array map)
                        // idea: iterate through hand, if value (player own) is 0 (you) then display it
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

                {/* Left */}
                <View style={styles.left}>
                    <View style={{flex:1,position:'absolute',right:20,zIndex:2}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:10,zIndex:3}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:0,zIndex:4}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <Text style={{flex:1,position:'absolute',zIndex:5,color:'#ffffff',fontWeight:'bold',textShadowColor:'black',textShadowOffset:{width:1, height:1},textShadowRadius:1,fontSize:18,right:10,transform:[{rotate: '270deg'}],}}>
                        {
                            this.leftCardStack()
                        }
                    </Text>
                </View>

                {/* Across */}
                <View style={styles.across}>
                    <View style={{flex:1,position:'absolute',right:20,zIndex:2}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:10,zIndex:3}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:0,zIndex:4}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <Text style={{flex:1,position:'absolute',zIndex:5,color:'#ffffff',fontWeight:'bold',textShadowColor:'black',textShadowOffset:{width:1, height:1},textShadowRadius:1,fontSize:18,right:10,transform:[{rotate: '180deg'}],}}>
                        {
                            this.acrossCardStack()
                        }
                    </Text>
                </View>

                {/* Right */}
                <View style={styles.right}>
                    <View style={{flex:1,position:'absolute',right:20,zIndex:2}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:10,zIndex:3}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <View style={{flex:1,position:'absolute',right:0,zIndex:4}}>
                            <Card
                            value={52}
                            cardActive={false}
                            />
                    </View>
                    <Text style={{flex:1,position:'absolute',zIndex:5,color:'#ffffff',fontWeight:'bold',textShadowColor:'black',textShadowOffset:{width:1, height:1},textShadowRadius:1,fontSize:18,right:10,transform:[{rotate: '90deg'}],}}>
                        {
                            this.rightCardStack()
                        }
                    </Text>
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
        width:75,
        height:75,
        right:Dimensions.get('window').width-75,
        top:(Dimensions.get('window').height/2)-75,
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        transform:[{rotate: '90deg'}],
        // just for debug
        borderRadius:4,
        borderWidth:0.5,
        borderColor:'black',
    },
    across:{
        width:75,
        height:75,
        left:(Dimensions.get('window').width/2),
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        transform:[{rotate: '180deg'}],
        borderRadius:4,
        borderWidth:0.5,
        borderColor:'black',
    },
    right:{
        width:75,
        height:75,
        left:(Dimensions.get('window').width-75),
        top:(Dimensions.get('window').height/2)-75,
        position:'absolute',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        transform:[{rotate: '270deg'}],
        borderRadius:4,
        borderWidth:0.5,
        borderColor:'black',
    },
    center:{

    }
})