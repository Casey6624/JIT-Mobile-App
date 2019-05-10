import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import axios from "axios"
import JollyTeam from "../../assets/img/jollyTeam.jpg"

export default class SettingsScreen extends Component {

    state = {
        showNewsletter: false,
        emailAddress: "",
        allowPushNot: false,
        emailError: "",
        showUglyMugs: false
    }

    setShowNewsletter = (value) => {
        let newVal = !this.state.showNewsletter
        if (newVal === false) {
            this.setState({ showNewsletter: newVal, emailError: "" })
            return
        }
        this.setState({ showNewsletter: newVal })
    }

    setPushNot = value => {
        let newVal = !this.state.allowPushNot
        this.setState({ allowPushNot: newVal })
    }

    setUglyMugs = value => {
        let newVal = !this.state.showUglyMugs
        this.setState({ showUglyMugs: newVal })
    }

    submitEmailAddress = () => {
        if (this.state.emailAddress === "" || !this.state.emailAddress.includes("@")) {
            this.setState({ emailError: "Please enter a valid email address." })
            return
        }
        let url = "http://tasks.jollyit.co.uk/php/mobileMail.php"
        axios.post(url, {
            emailAddress: this.state.emailAddress
        })
            .then(res => {
                this.setState({ emailError: "Success! You are now signed up." })
            })
            .catch(err => {
                this.setState({ emailError: "Oops! There was an issue signing you up. Please try again later." })
            })
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
                        Want To Recieve Our Newsletter?
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
                    <TouchableOpacity style={styles.tchButton} onPress={this.submitEmailAddress}>
                        <Icon name="ios-send" size={28} style={{ color: "#2A2F33" }} />
                    </TouchableOpacity>
                </View>}
                {this.state.showNewsletter && <Text style={styles.emailError}> {this.state.emailError} </Text>}
                <View style={styles.settingsOption}>
                    <Text style={styles.helperText}>
                        Show Our Ugly Mugs?
                </Text>
                    <Switch
                        value={this.state.showUglyMugs}
                        onValueChange={this.setUglyMugs}
                    />
                </View>
                {this.state.showUglyMugs && <Image source={JollyTeam} resizeMode="contain" style={{ width: "auto", flex: 1 }} />}
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
        width: 250
    },
    tchButton: {
        alignItems: "center",
        backgroundColor: '#ef7d00',
        borderRadius: 5,
        justifyContent: "center",
        width: 50,
        height: 50
    },
    inputAndSubmit: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    emailError: {
        color: "white",
        fontSize: 18,
        fontFamily: Fonts.OpenSansConItalic,
        textAlign: "center"
    }
})