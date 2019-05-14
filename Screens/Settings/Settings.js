import React, { Component } from 'react';
import { Text, View, StyleSheet, Switch, TextInput, TouchableOpacity, Image, AsyncStorage, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import axios from "axios"
import JollyTeam from "../../assets/img/jollyTeam.jpg"
import Fonts from "../../utils/fonts"

export default class SettingsScreen extends Component {

    state = {
        emailIcons: ["md-close-circle-outline", "md-checkmark"],
        showNewsletter: false,
        emailAddress: "",
        allowPushNot: false,
        emailError: "",
        showUglyMugs: false,
        currEmailIcon: null
    }

    componentDidMount() {
        this.getPushNot()
        this.getNewsletter()
    }

    setShowNewsletter = (value) => {
        let newVal = !this.state.showNewsletter
        if (newVal === false) {
            this.setState({ showNewsletter: newVal, emailError: "", currEmailIcon: null })
            return
        }
        this.setState({ showNewsletter: newVal })
    }

    setPushNot = value => {
        let newVal = !this.state.allowPushNot
        this.setState({ allowPushNot: newVal }, () => AsyncStorage.setItem("enablePushNot", `${newVal}`))
    }

    setUglyMugs = value => {
        let newVal = !this.state.showUglyMugs
        this.setState({ showUglyMugs: value })
    }

    getPushNot = async () => {
        try {
            let pushNot = await AsyncStorage.getItem("enablePushNot")
            if (pushNot === "true") {
                this.setState({ allowPushNot: true })
            } else if (pushNot === "false") {
                this.setState({ allowPushNot: false })
            } else {
                this.setPushNot({ allowPushNot: false })
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    getNewsletter = async () => {
        try {
            let emailAddress = await AsyncStorage.getItem("emailAddress")
            if (emailAddress !== "") {
                this.setState({ emailAddress: emailAddress })
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    saveNewsletter = emailAddress => {
        console.log("email passed" + emailAddress)
        AsyncStorage.setItem("emailAddress", emailAddress)
    }

    submitEmailAddress = () => {
        if (this.state.emailAddress === "" || !this.state.emailAddress.includes("@")) {
            this.setState({ emailError: "Please enter a valid email address.", currEmailIcon: this.state.emailIcons[0] })
            return
        }
        let url = "http://tasks.jollyit.co.uk/php/mobileMail.php"
        axios.post(url, {
            emailAddress: this.state.emailAddress
        })
            .then(res => {
                this.setState({ emailError: "Success! You are now signed up.", currEmailIcon: this.state.emailIcons[1] }, () => {
                    this.saveNewsletter(this.state.emailAddress)
                })
            })
            .catch(err => {
                this.setState({ emailError: "Oops! There was an issue signing you up. Please try again later.", currEmailIcon: this.state.emailIcons[0] })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>JOLLY IT</Text>
                    <Icon name="md-cog" size={35} style={{ color: "#2A2F33" }} />
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
                        value={this.state.emailAddress}
                        style={styles.emailAddress}
                        placeholder="Email Address"
                        onChangeText={(text) => this.setState({ emailAddress: text })}
                    />
                    <TouchableOpacity style={styles.tchButton} onPress={this.submitEmailAddress}>
                        <Icon name="md-send" size={28} style={{ color: "#2A2F33" }} />
                    </TouchableOpacity>
                </View>}
                {this.state.showNewsletter && <Text style={styles.emailError}> <Icon name={this.state.currEmailIcon} size={28} style={{ color: "#ef7d00" }} /> {this.state.emailError} </Text>}
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
        justifyContent: "space-between",
        elevation: 2
    },
    welcomeText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        margin: 15,
        fontFamily: Fonts.RobotoLight,
        fontWeight: "400"
    },
    helperText: {
        fontSize: 20,
        color: "white",
        fontFamily: Fonts.RobotoLight
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
        color: "#ef7d00",
        fontSize: 22,
        fontFamily: Fonts.OpenSansCon,
        textAlign: "center"
    }
})