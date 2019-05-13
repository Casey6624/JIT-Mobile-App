import React from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet } from "react-native"

//Components
import CallToAction from "./callToAction"

const ITHelpdesk = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.ModalTitle}> IT HELPDESK <Image source={SquareLogo} /> </Text>
            <View style={styles.mainContent}>
                <Text style={styles.tagLine}>
                    Something for small businesses, large businesses and everyone inbetween.
            </Text>
            </View>
            <CallToAction
                title="FREE IT AUDIT"
                content="We provide an open and honest service. There are no obligations, and no catches – we differ from other IT companies because our initial evaluation and advice is offered by a senior consultant who can offer independent advice tailored to your business;  not simply a sales tactic to sell unsuitable products and services."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        margin: 10
    },
    ModalTitle: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        color: "white",
        textAlign: "center"
    },
    tagLine: {
        color: "white",
        fontSize: 28,
        fontFamily: Fonts.RobotoLight,
    },
    callToAction: {
        backgroundColor: "#ef7d00",
        margin: 10,
        borderRadius: 15,
        padding: 15
    }
})

export default ITHelpdesk