import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import {ExpressionBox, ResultBox, NumPad} from './app/components';
export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            expression:'Dummy Expression',
            result: 'Dumy Result',
            numpad: 'NumPads'
        }
        this._assembleExpression = this._assembleExpression.bind(this);
        this._calculateResult = this._calculateResult.bind(this);
        this._rollbackExpression = this._rollbackExpression.bind(this);
    }

  

_assembleExpression(){

}
_calculateResult(){

}
_rollbackExpression(){

}
    render() {
        return (
            <View style= { styles.container }>
               <ExpressionBox expression = {this.state.expression}/>
               <ResultBox result = {this.state.result}/>
               <NumPad numpad = {this.state.numpad}/>
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



