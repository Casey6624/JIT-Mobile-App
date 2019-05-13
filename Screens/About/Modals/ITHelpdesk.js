import React from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image } from "react-native"

const ITHelpdesk = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.ModalTitle}> IT HELPDESK <Image source={SquareLogo} /> </Text>
            <View style={styles.mainContent}>
                <Text style={styles.tagLine}>
                    Something for small businesses, large businesses and everyone inbetween.
            </Text>
            </View>
        </View>
    )
}

const styles = {
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
    }
}

export default ITHelpdesk