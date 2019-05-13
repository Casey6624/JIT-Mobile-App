import React, { Component } from "react"
import Fonts from "../../../utils/fonts"
import SquareLogo from "../../../assets/img/jollyIcon.png"
import { View, Text, Image, StyleSheet } from "react-native"
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

//plus-square-o

class callToAction extends Component {

    state = {
        CTACollapsed: true
    }

    toggleCTA(value) {
        this.setState({ CTACollapsed: value })
    }

    render() {
        const { title, content } = this.props

        return (
            <View style={styles.callToAction} onTouchStart={() => this.toggleCTA(!this.state.CTACollapsed)}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <Text style={this.state.CTACollapsed ? styles.titleCollapsed : styles.title}> {title} </Text>
                    <IconFontAwesome name={this.state.CTACollapsed ? "plus-square-o" : "minus-square-o"} size={25} />
                </View>
                <Text style={this.state.CTACollapsed ? styles.contentCollapsed : styles.content}> {content} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    callToAction: {
        backgroundColor: "#ef7d00",
        margin: 10,
        borderRadius: 15,
        padding: 15,
    },
    titleCollapsed: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 28,
        color: "white",
        height: 30
    },
    contentCollapsed: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 22,
        height: 35
    },
    title: {
        fontFamily: Fonts.RobotoBold,
        fontSize: 28,
        color: "white"
    },
    content: {
        fontFamily: Fonts.RobotoLight,
        fontSize: 22
    }
})

export default callToAction