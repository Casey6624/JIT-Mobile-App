import React, { Component } from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from "react-native"
// Icons
import IconEncrypto from "react-native-vector-icons/Entypo";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons"
import IconIonicon from "react-native-vector-icons/Ionicons"
// External Components
import Video from "react-native-video"

class AboutUs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isMuted: true,
            isPaused: false
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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.ModalTitle}> ABOUT US <Image source={SquareLogo} /> </Text>
                <View style={styles.mainContent}>
                    <Text style={styles.tagLine}>From a <Text style={{ color: "#ef7d00" }}>Tom Jolly</Text> founded, one man band, to a fully functioning IT organization spanning multiple offices across the UK 🇬🇧. We are proud of our history.</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                }}>
                    <IconIonicon
                        name="md-rewind"
                        size={28}
                        style={{ color: "#ef7d00" }}
                        onPress={() => this.rewindVideo()}
                    />
                    <IconIonicon
                        name={this.state.isPaused ? "md-play" : "md-pause"}
                        size={28}
                        style={{ color: "#ef7d00" }}
                        onPress={() => this.changePlayingState(!this.state.isPaused)}
                    />
                    <IconIonicon
                        name={this.state.isMuted ? "ios-volume-mute" : "md-volume-high"}
                        size={28}
                        style={{ color: "#ef7d00" }}
                        onPress={() => this.changeMutedState(!this.state.isMuted)}
                    />
                </View>
                <Video
                    ref={(ref) => {
                        this.player = ref
                    }}
                    style={{
                        flex: 1,
                    }}
                    source={require("../../../assets/mp4/jollyvid.mp4")}
                    resizeMode="contain"
                    muted={this.state.isMuted}
                    paused={this.state.isPaused}
                    onTouchStart={() => this.changeMutedState(!this.state.isMuted)}
                    posterResizeMode="contain"
                    controls={true}
                />
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

export default AboutUs