import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import {Key} from './Key';
export class NumPad extends React.Component{
    constructor(props){
        super(props);

        this._echoSymbol = this._echoSymbol.bind(this);
    }
    _echoSymbol(symbol){
        if(symbol === 'del'){
            this.props.rollbackExpression();
        } else if(symbol === '='){
            this.props.calculateResult();
        } else if(symbol === 'clear'){
            this.props.clear();
        }
        else{
        this.props.assembleExpression(symbol);
        }
    }

    render(){
        return (
            <View style={styles.numpad}>
                <View  style={styles.numgroup}>
                    <Key symbol={'1'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'2'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'3'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'4'} echoSymbol = {this._echoSymbol}/>
                </View>
                <View  style={styles.numgroup}>
                    <Key symbol={'5'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'6'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'7'} echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'8'} echoSymbol = {this._echoSymbol}/>
                </View>
                <View  style={styles.numgroup}>
                    <Key symbol={'9'}echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'0'}echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'.'}echoSymbol = {this._echoSymbol}/>
                    <Key symbol={'='}echoSymbol = {this._echoSymbol}/>
                </View>
                <View  style={styles.numgroup}>
                    <ScrollView horizontal={true}>
                        <Key symbol={'del'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'clear'}  echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'+'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'-'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'/'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'*'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'{'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'}'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'('} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={')'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'['} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={']'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'sin'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'cos'} echoSymbol = {this._echoSymbol} op={true}/>
                        <Key symbol={'tan'} echoSymbol = {this._echoSymbol} op={true}/>
                    </ScrollView>
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