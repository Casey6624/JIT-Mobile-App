import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

export default class SettingsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>SETTINGS</Text>
                    <Icon name="ios-hammer" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <View style={styles.settingsOption}>
                    <Text style={styles.helperText}>
                        Allow Push Notifications?
                </Text>
                    <Switch />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    headerText: {
        backgroundColor: "#ef7d00",
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
    helperText: {
        fontSize: 20,
        color: "white"
    },
    settingsOption: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 15
    }
})