import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export class NumPad extends React.Component{


    render(){
        return (
            <Text style={styles.numpad}>{this.props.numpad}</Text>
        )
    }
}

const styles = StyleSheet.create({
    resultbox: {
        flex:2,
        backgroundColor: 'green',
        textAlign: 'right',
        paddingLeft:8,
        paddingRight:8,
        fontSize:40,
        color:'#212121'
     }
})