import React from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native"
import IconEncrypto from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome"

//Components
import CallToAction from "./callToAction"

const ITHelpdesk = props => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.ModalTitle}> IT HELPDESK <Image source={SquareLogo} /> </Text>
            <View style={styles.mainContent}>
                <Text style={styles.tagLine}>
                    Something for small businesses, large businesses and everyone inbetween.
            </Text>
            </View>
            <View style={styles.ul}>
                <Text style={styles.li}>
                    <IconFA name="support" size={25} style={{ color: "#ef7d00" }} /> Fully Managed IT Support
            </Text>
            </View>
            <View style={styles.ul}>
                <Text style={styles.li}>
                    <IconEncrypto name="infinity" size={25} style={{ color: "#ef7d00" }} /> Unlimited, All You Can Eat Support
            </Text>
            </View>
            <View style={styles.ul}>
                <Text style={styles.li}>
                    <IconEncrypto name="area-graph" size={25} style={{ color: "#ef7d00" }} /> Proactive Monitoring
            </Text>
            </View>
            <CallToAction
                title="FREE IT AUDIT"
                content="We provide an open and honest service. There are no obligations, and no catches – we differ from other IT companies because our initial evaluation and advice is offered by a senior consultant who can offer independent advice tailored to your business;  not simply a sales tactic to sell unsuitable products and services."
            />

            <TouchableOpacity style={styles.btn}
                onPress={() => Linking.openURL("https://www.jollyit.co.uk/it-helpdesk/")}
            >
                <Text style={styles.btnText}> Interested? Get More Details Online </Text>
                <IconEncrypto name="browser" size={25} style={{ color: "#2A2F33" }} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        margin: 10
    },
    ul: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10
    },
    li: {
        fontSize: 25,
        color: "white",
        fontFamily: Fonts.RobotoLight
    },
    ModalTitle: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 32,
        color: "white",
        textAlign: "center"
    },
    tagLine: {
        color: "white",
        fontSize: 30,
        fontFamily: Fonts.RobotoLight,
    },
    callToAction: {
        backgroundColor: "#ef7d00",
        margin: 10,
        borderRadius: 15,
        padding: 15
    },
    btn: {
        alignItems: "center",
        backgroundColor: '#ef7d00',
        padding: 12,
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    btnText: {
        fontFamily: Fonts.RobotoLight,
        color: "white",
        fontSize: 20
    }
})

export default ITHelpdesk