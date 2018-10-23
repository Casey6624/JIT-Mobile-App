import React, {Component} from 'react';
import { StyleSheet, Button, Text, TouchableOpacity , View, Image} from 'react-native';
import LogoImage from "../../assets/img/whitelogotrans.png";

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
        <View style={styles.container}>
        <Image 
        resizeMode="contain"
        style={styles.LogoImageBanner}
        source={LogoImage} 
        />
        <TouchableOpacity 
        style={styles.tchButton}
        onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.tapToEnter} >Tap To Enter </Text>
        </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#2A2F33",
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
    tchButton: {
      alignItems: "center",
      backgroundColor: '#ef7d00',
      padding: 12,
      borderRadius: 5
    }
  
  });











