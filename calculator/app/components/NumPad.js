import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {Key} from './Key';
export class NumPad extends React.Component{


    render(){
        return (
            <View style={styles.numpad}>
                <View  style={styles.numgroup}>
                    <Key symbol={'1'}/>
                    <Key symbol={'2'}/>
                    <Key symbol={'3'}/>
                    <Key symbol={'4'}/>
                </View>
                <View  style={styles.numgroup}>
                    <Key symbol={'5'}/>
                    <Key symbol={'6'}/>
                    <Key symbol={'7'}/>
                    <Key symbol={'8'}/>
                </View>
                <View  style={styles.numgroup}>
                    <Key symbol={'9'}/>
                    <Key symbol={'0'}/>
                    <Key symbol={'.'}/>
                    <Key symbol={'='}/>
                </View>
                <View  style={styles.numgroup}>
                    <Key symbol={'del'} op={true}/>
                    <Key symbol={'+'} op={true}/>
                    <Key symbol={'-'} op={true}/>
                    <Key symbol={'clear'} op={true}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    numpad : {
        flex:2,
        backgroundColor: '#ecf0f1',
        textAlign: 'right',
        paddingLeft:8,
        paddingRight:8,
        paddingTop:8,
        fontSize:40,
        color:'#212121'
     },
     numgroup:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
     }
})