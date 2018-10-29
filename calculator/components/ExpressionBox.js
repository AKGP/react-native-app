import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export class ExpressionBox extends React.Component{


    render(){
        return (
            <Text style={styles.expressionbox}>{this.props.expression}</Text>
        )
    }
}



const styles = StyleSheet.create({
    expressionbox: {
        flex:1,
        backgroundColor: '#909090',
        textAlign: 'right',
        paddingLeft:8,
        paddingRight:8,
        fontSize:32,
        color:'#212121'
     }
})