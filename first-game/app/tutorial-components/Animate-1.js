import React from 'react';
import {View, Image, StyleSheet, Text, Animated, Easing} from 'react-native';
import {URL} from '../constants/appConstants';
export class Animate1 extends React.Component{



    constructor(){
        super();
        this.spinValue = new Animated.Value(0)
    }


    componentDidMount (){
        this.spin();
    }


    spin(){
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())

    }


    render(){
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          });

          return (
            <View style={styles.container}>
              <Animated.Image
                style={{
                
                  width:227,
                  height: 200,
                  transform: [{rotate: spin}] }}
                  source={{uri:'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
              />
            </View>
          );
        }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
