import React from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native"
import IconEncrypto from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconSLI from "react-native-vector-icons/SimpleLineIcons"

const VirtualITDirector = props => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.ModalTitle}> Virtual IT Director <Image source={SquareLogo} /> </Text>
            <View style={styles.mainContent}>
                <Text style={styles.tagLine}>
                    Free Strategic IT advice.
            </Text>
                <View style={styles.ul}>
                    <Text style={styles.li}>
                        <IconMCI name="shield" size={25} style={{ color: "#ef7d00" }} /> Risk, Compliance and Security Management.
                </Text>
                </View>
                <View style={styles.ul}>
                    <Text style={styles.li}>
                        <IconEncrypto name="area-graph" size={25} style={{ color: "#ef7d00" }} /> Professional Auditing and System Reporting.
                </Text>
                </View>
                <View style={styles.ul}>
                    <Text style={styles.li}>
                        <IconSLI name="speech" size={25} style={{ color: "#ef7d00" }} /> Unbiased and Independant Feedback.
                </Text>
                </View>
                <View style={styles.ul}>
                    <Text style={styles.li}>
                        <IconFA name="connectdevelop" size={25} style={{ color: "#ef7d00" }} /> Managing Third Party Relationships.
                </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => Linking.openURL("https://www.jollyit.co.uk/virtual-it-director/")}
            >
                <Text style={styles.btnText}> Read More Online </Text>
                <IconEncrypto name="browser" size={25} style={{ color: "#2A2F33" }} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
                onPress={() => Linking.openURL(`tel:08003317668`)}
            >
                <Text style={styles.btnText}> Call For More Details </Text>
                <IconEncrypto name="old-phone" size={25} style={{ color: "#2A2F33" }} />
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        margin: 10,
        flex: 1
    },
    ul: {
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    li: {
        fontSize: 25,
        color: "white",
        fontFamily: Fonts.RobotoLight,
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

export default VirtualITDirector