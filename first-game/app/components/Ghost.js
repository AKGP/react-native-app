import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
let ghost = [require('../assets/ghost.png'),require('../assets/ghost-blinked.png')]
let i =1;
let time;
var that;


export class Ghost extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ghost: ghost[i],
           
        }
    }
    
    render(){

        setTimeout(() => { 

            if(i==1){
                this.time = 2000
                i=0;
            } else {
                this.time = 400
                i = 1;
            }
            this.props.x = this.props.x + 1;
            this.props.y = this.props.y + 1;
            this.setState({ghost: ghost[i], x:this.props.x,y:this.props.y})
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

const styles = StyleSheet.create({
    animate:{
        position:'absolute',
        top:20
    }
});