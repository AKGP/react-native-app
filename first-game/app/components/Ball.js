import React from 'react';
import {View, Image} from 'react-native';
export class Ball extends React.Component{
    render(){
        return(
            <View style = {this.props.style}>
                <Image
                    source={require('../assets/ball.png')}>
                    </Image>
            </View>
        );
    }
}

const styles = {

}