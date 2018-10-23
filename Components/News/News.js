import React, { Component } from "react";
import {View, Text, StyleSheet} from "react-native";


export default class NewsScreen extends Component {

    render() {
      return (
          <View style={styles.container}>
              <Text style={styles.newsTitle}> NEWS | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
          </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    newsTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RalewayBold
    },
    headerAccent: {
        color: "#ef7d00"
    }
})
  