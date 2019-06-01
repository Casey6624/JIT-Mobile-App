import React, { Component } from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking, Dimensions } from "react-native"
// Icons
import IconEncrypto from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconIonicon from "react-native-vector-icons/Ionicons"
// External Components


class AboutUs extends Component {

    constructor(props) {
        super(props)
        Dimensions.addEventListener("change", (dims) => {
            console.log(dims.window.width)
            this.setState({ screenWidth: dims.window.width })
        })

        this.state = {
            isMuted: true,
            isPaused: false,
            screenWidth: null
        }
    }


    changeMutedState = value => {
        this.setState({ isMuted: value })
    }

    changePlayingState = value => {
        this.setState({ isPaused: value })
    }

    rewindVideo = () => {
        this.player.seek(0)
    }

    toggleFullScreen = () => {

    }

    render() {

        return (
            <View style={styles.container}>
                <Text> About Us </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContent: {
        margin: 10,
        flex: 1,
        width: Dimensions.get("window").width - 20
    },
    video: {
        flex: 1
    },
    videoFS: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
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

export default AboutUs