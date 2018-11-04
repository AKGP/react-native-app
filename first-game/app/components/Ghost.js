import React from 'react';
import {View, Image} from 'react-native';
let ghost = [require('../assets/ghost.png'),require('../assets/ghost-blinked.png')]
let i =1;
let time;



export class Ghost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ghost: ghost[i]
        }
    }
    
    render(){

        setTimeout(() => { 

            if(i==1){
                this.time = 1000
                i=0;
            } else {
                this.time = 10
                i = 1;
            }
            this.setState({ghost: ghost[i]})
        }, this.time);
        return(
            <View style = {this.props.style}>
                <Image
                    source={this.state.ghost}>
                    </Image>
            </View>
        );
    }
}

const styles = {

}