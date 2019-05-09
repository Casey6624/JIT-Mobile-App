import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import WelcomeScreen from "./Screens/Welcome/Welcome";
import HomeScreen from "./Screens/Home/Home";

import { createStackNavigator } from "react-navigation";

export default class App extends Component {
  render() {
    return (
      < View style={styles.container}>
        <AppStackNavigator />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Home: HomeScreen
}, {
    headerMode: "screen",
    header: null,
    navigationOptions: {
      header: null
    }
  })

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
