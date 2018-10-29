import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export  class ResultBox extends React.Component{


    render(){
        return (
            <Text style={styles.resultbox}>{this.props.result}</Text>
        )
    }
}

const styles = StyleSheet.create({
    resultbox: {
        flex:1,
        backgroundColor: '#95a5a6',
        textAlign: 'right',
        paddingLeft:8,
        paddingRight:8,
        fontSize:40,
        color:'#212121'
     }
})