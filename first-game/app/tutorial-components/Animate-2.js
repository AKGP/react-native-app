import React from 'react';
import { View, Image, StyleSheet, Text, Animated, Easing, TouchableHighlight} from 'react-native';

export class Animate2 extends React.Component {



    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.myAnimatedValue1 = new Animated.Value(0);
        this.myAnimatedValue2 = new Animated.Value(0);
        this.myAnimatedValue3 = new Animated.Value(0);

    }


    componentDidMount() {
        this.animate();
    }

    animate() {
        // this.animatedValue.setValue(0);
        this.myAnimatedValue1.setValue(0);
        this.myAnimatedValue2.setValue(0);
        this.myAnimatedValue3.setValue(0);
        // Animated.timing(
        //     this.animatedValue, {
        //         toValue: 1,
        //         duration: 2000,
        //         easing: Easing.linear
        //     }
           
        // ).start(() => this.animate());


        const createParallelAnimation = function(value, duration, easing, delay){
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear
                })
        };

        Animated.parallel([
            createParallelAnimation(this.myAnimatedValue1, 2000, Easing.ease),
            createParallelAnimation(this.myAnimatedValue2, 2000, Easing.ease),
            createParallelAnimation(this.myAnimatedValue3, 2000, Easing.ease)
            ]).start();


    }

    render() {

        // const marginLeft = this.animatedValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [0, 300]
        // })
        // const opacity = this.animatedValue.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [0, 1, 0]
        // })
        // const movingMargin = this.animatedValue.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [0, 300, 0]
        // })
        // const textSize = this.animatedValue.interpolate({
        //     inputRange: [0, 0.5, 1],
        //     outputRange: [18, 32, 18]
        // })
        // const rotateX = this.animatedValue.interpolate({
        //     inputRange: [0, 0.25, 0.50, 0.75, 1],
        //     outputRange: ['0deg', '180deg', '360deg', '180deg', '0deg']
        // })
        const scaleText = this.myAnimatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
          })
          const spinText = this.myAnimatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
          })
          const introButton = this.myAnimatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
          })

        return(
            // <View style={styles.container}>
            //     <Animated.View
            //         style={{
            //         marginLeft,
            //         width:40,
            //         height: 30,
            //         transform:[{rotate: rotateX}],
            //         backgroundColor: 'red'}} />
            //     <Animated.View
            //         style={{
            //         opacity,
            //         marginTop: 10,
            //         height: 30,
            //         width: 40,
            //         backgroundColor: 'blue'}} />
            //     <Animated.View
            //         style={{
            //         marginLeft: movingMargin,
            //         marginTop: 10,
            //         height: 30,
            //         width: 40,
            //         backgroundColor: 'orange'}} />
            //     <Animated.Text
            //         style={{
            //         fontSize: textSize,
            //         marginTop: 10,
            //         color: 'green'}} >
            //         Animated Text!
            //     </Animated.Text>
            //     <Animated.View
            //         style={{
            //         transform: [{rotateX}],
            //         marginTop: 50,
            //         height: 30,
            //         width: 40,
            //         backgroundColor: 'black'}}>
            //         <Text style={{color: 'white'}}>Hello from TransformX</Text>
            //     </Animated.View>
            // </View>
            <View style={[styles.container]}>
                <Animated.View 
                    style={{ transform: [{scale: scaleText}] }}>
                    <Text>Welcome</Text>
                </Animated.View>
                <Animated.View
                    style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
                    <Text
                    style={{fontSize: 20}}>
                    to the App!
                    </Text>
                </Animated.View>
                <Animated.View
                    style={{top: introButton, position: 'absolute'}}>
                    <TouchableHighlight
                    onPress={this.animate.bind(this)}
                    style={styles.button}>
                    <Text
                        style={{color: 'white', fontSize: 20}}>
                        Click Here To Start
                    </Text>
                </TouchableHighlight>
                </Animated.View>
            </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent:'center'

    },
    button:{
        flex:1,
        backgroundColor: '#95a5a6',
        width:100,
        height:60,
        borderRadius:10
    }
  })