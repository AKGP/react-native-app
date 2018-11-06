import React from 'react';
// import { View, Text, StyleSheet} from 'react-native';
// import { Provider } from 'react-redux';
import {World} from './app/components';
import {Animate1} from './app/tutorial-components/Animate-1';
// import { Loop, Stage, World, Body, Sprite, TileMap} from 'react-game-kit/native';
// const math = require('mathjs');

export default class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (     
        //    <World/>
           <Animate1/>
        );
    }
}




// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         backgroundColor: '#fff',
//         justifyContent: 'center'
//      }
// })


// const  layers = {[
//     [
//       0, 0, 0, 0,
//       1, 0, 1, 1,
//       0, 0, 1, 0,
//       1, 0, 0, 0,
//     ]
//   ]};


