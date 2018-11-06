import React from 'react';
import {View, StyleSheet} from 'react-native';
import {GoalPost} from './GoalPost.js';
import {Ball} from './Ball';
import {Ghost} from './Ghost';



export class World extends React.Component{
    
    render(){
        return(
            <View style={styles.world}>
                <GoalPost style={styles.goalpost}/>
                <Ghost x={1} y={1}/>
                <Ball style={styles.ball}></Ball>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    world:{
        flex:1,
        backgroundColor:'green'
    },
    goalpost:{
        position:'absolute',
        top:'40%',
        flex:1,
        justifyContent: 'center',
        alignContent:'center',
        marginTop:20
    } ,
    ball:{
        width:30,
        height:20,
        position: 'absolute',
        right:20,
        bottom:30
    }
})