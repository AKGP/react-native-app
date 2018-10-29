import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export class Key extends React.Component{

    constructor(props){
        super(props);
        this._onPress = this._onPress.bind(this);

    }

    _onPress(){

    }

    render(){
        return (
           <TouchableHighlight
                style = { this.props.op ? [styles.key, styles.op ] : styles.key}
                onPress= { this._onPress() }>
            <View>
                <Text style = {  this.props.op ? [ styles.keyoptext ] : styles.keytext }>
                    { this.props.symbol }
                </Text>
            </View>
           </TouchableHighlight>
        )
    }
}



const styles = StyleSheet.create({
     key: {
        backgroundColor: '#95a5a6',
        borderRadius:100,
        width:60,
        height:60,
        alignItems:'center',
        justifyContent:'center'
     },
     keytext:{
        fontSize:20,
     },
     op:{
        backgroundColor: '#2c3e50'
     },
     keyoptext:{
         color:'#fff',
         fontSize:20,
     }
})