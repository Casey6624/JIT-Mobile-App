import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { StyleSheet, Button, Text, TouchableOpacity, View, Image, Animated, ImageBackground } from 'react-native';
import LogoImage from "../../assets/img/whitelogotrans.png";
import SheffieldTrain from "../../assets/img/sheffieldTrain.jpg"
import Fonts from "../../utils/fonts";

export default class WelcomeScreen extends Component {

  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0, // <-- currect active route from actions array
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });

      this.props.navigation.dispatch(resetAction);
    }, 1000);
  }

  render() {


    return (
      <ImageBackground style={styles.container} source={SheffieldTrain}>
        <Animated.Image
          resizeMode="contain"
          style={styles.LogoImageBanner}
          source={LogoImage}
        />
        <Text style={styles.getStarted}>SHEFFIELD // LONDON</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    textAlign: "center",
    color: "white",
    fontSize: 28
  },
  LogoImageBanner: {
    width: '90%'
  },
  tapToEnter: {
    color: "white",
    fontSize: 22,
    textAlign: "center"
  },
  getStarted: {
    color: "white",
    backgroundColor: "#ef7d00",
    fontSize: 26,
    textAlign: "center",
    fontFamily: Fonts.OpenSansConBold,
    padding: 5
  }

});











