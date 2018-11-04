import React from 'react';
import {View, Image} from 'react-native';
export class GoalPost extends React.Component{
    render(){
        return(
            <View style = {this.props.style}>
                <Image
                    source={require('../assets/post.png')}>
                    </Image>
            </View>
        );
    }
}

const styles = {

}