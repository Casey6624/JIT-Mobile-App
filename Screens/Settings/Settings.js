import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

export default class SettingsScreen extends Component {

    state = {
        showNewsletter: false,
        emailAddress: "",
        allowPushNot: false
    }

    setShowNewsletter = (value) => {
        let newVal = !this.state.showNewsletter
        this.setState({ showNewsletter: newVal })
    }

    setPushNot = value => {
        let newVal = !this.state.allowPushNot
        this.setState({ allowPushNot: newVal })
    }

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
                    <Switch
                        value={this.state.allowPushNot}
                        onValueChange={this.setPushNot}
                    />
                </View>
                <View style={styles.settingsOption}>
                    <Text style={styles.helperText}>
                        Signup To Our Newsletter?
                </Text>
                    <Switch
                        value={this.state.showNewsletter}
                        onValueChange={this.setShowNewsletter}
                    />

                </View>
                {this.state.showNewsletter && <View style={styles.inputAndSubmit}>
                    <TextInput
                        style={styles.emailAddress}
                        placeholder="Email Address"
                        onChangeText={(text) => this.setState({ emailAddress: text })}
                    />
                    <TouchableOpacity style={styles.tchButton}>
                        <Icon name="ios-send" size={35} style={{ color: "#2A2F33" }} />
                    </TouchableOpacity>

                </View>}
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
    },
    emailAddress: {
        backgroundColor: "white",
        margin: 10,
        borderRadius: 15,
        width: "auto"
    },
    tchButton: {
        alignItems: "center",
        backgroundColor: '#ef7d00',
        borderRadius: 5,
        width: 70,
        justifyContent: "center"
    },
    inputAndSubmit: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "stretch"
    }
})