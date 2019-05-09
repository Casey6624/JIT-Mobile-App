import React, { Component } from "react";
import { View, Text, Image, StyleSheet, WebView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class AboutScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>ABOUT</Text>
                    <Icon name="ios-people" size={35} style={{ color: "#ef7d00" }} />
                </View>
                <Text style={styles.bio}>
                    We are a group of friendly IT professionals who have decades of experience in providing a services to companies large and small
                    A single point of contact for many businesses who don’t have the time, resources or desire to bring those skills inhouse.
            </Text>
                <WebView
                    style={styles.videoPlayer}
                    javaScriptEnabled={true}
                    onLoadStart={this.loadSpinner}
                    source={{ uri: "https://www.youtube.com/embed/vpKcugzudTs" }}
                />
            </View>
        );
    }
}

loadSpinner = () => {
    return (
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
    headerText: {
        backgroundColor: "#2A2F33",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    welcomeText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        margin: 15,
        fontFamily: Fonts.OpenSansConBold,
        fontWeight: "400"
    },
    homeTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RobotoLight
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