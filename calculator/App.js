import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {ExpressionBox, ResultBox, NumPad} from './app/components';

const math = require('mathjs');

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lastExpression:[],
            expression:'',
            result: ''
        }
        this._assembleExpression = this._assembleExpression.bind(this);
        this._calculateResult = this._calculateResult.bind(this);
        this._rollbackExpression = this._rollbackExpression.bind(this);
        this._clear = this._clear.bind(this); 
    }

  

_assembleExpression(symbol){
    this.setState((prevState)=>({
        lastExpression : [...prevState.lastExpression, prevState.expression],
        expression : prevState.expression + symbol
    }))
}
_calculateResult(){
    let result;

    try{
        result = math.eval(this.state.expression);
    } catch(error){
        result = 'Error !!!'
    }
    this.setState({result:result});
}
_rollbackExpression(){
    this.state.expression && this.setState((prevState)=>({
            lastExpression: prevState.lastExpression,
            expression:prevState.lastExpression.pop()
        }));
}

_clear(){
    this.setState({result:'', expression:''});
}
    render() {
        return (
            <View style= { styles.container }>
               <ExpressionBox expression = {this.state.expression}/>
               <ResultBox result = {this.state.result}/>
               <NumPad 
                assembleExpression = { this._assembleExpression }
                calculateResult = { this._calculateResult }
                rollbackExpression = { this._rollbackExpression }
                clear = {this._clear}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        justifyContent: 'center'
     }
})



