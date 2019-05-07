import React, { Component } from "react";
import { View, Text, Image, StyleSheet, WebView } from "react-native";

export default class AboutScreen extends Component {

    render() {
      return (
          <View style={styles.container}>
            <Text style={styles.homeTitle}> ABOUT US | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
            <Text style={styles.bio}>
            We are a group of friendly IT professionals who have decades of experience in providing a services to companies large and small
            A single point of contact for many businesses who don’t have the time, resources or desire to bring those skills inhouse.
            </Text>
            <WebView 
            style={styles.videoPlayer}
            javaScriptEnabled={true}
            onLoadStart={this.loadSpinner}
            source={{uri: "https://www.youtube.com/embed/vpKcugzudTs"}}
            />
          </View>
      );
    }
  }

  loadSpinner = () => {
      return(
          <View>
              <Text>Loading...</Text>
          </View>
      )
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    headerAccent: {
        color: "#ef7d00"
    },
    homeTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RalewayBold
    },
    bio: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        fontFamily: Fonts.RalewayLight,
        padding: 5,
        margin: 5
    }
})