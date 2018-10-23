import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity , View, Image} from 'react-native';

import WelcomeScreen from "./Components/Welcome/Welcome";
import HomeScreen from "./Components/Home/Home";

import { createStackNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return (
     < View style={styles.conainer}>
        <AppStackNavigator />
     </View> 
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen

})

const styles = StyleSheet.create({
  conainer: {
    flex: 1
  }
})
