import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, Animated, Modal, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BigBen from "../../assets/img/london.jpg"
import Fonts from "../../utils/fonts"

//Modal components
import ITHelpdesk from "./Modals/ITHelpdesk"


export default class AboutScreen extends Component {

    state = {
        showAnim: new Animated.Value(0),
        modalVisible: false,
        modalType: null
    }

    componentDidMount() {
        this.animateBoxes()
    }

    animateBoxes = () => {
        Animated.timing(this.state.showAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    setModalVisible(visible, type) {
        this.setState({ modalVisible: visible, modalType: type });
    }

    render() {
        return (
            <ImageBackground style={styles.container} source={BigBen}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>JOLLY IT</Text>
                    <Icon name="md-people" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <View style={{
                    flex: 1
                }} contentContainerStyle={{
                    flex: 1,
                    alignContent: "center"
                }}>
                    <Animated.View style={{
                        opacity: this.state.showAnim, transform: [
                            {
                                translateX: this.state.showAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 20]
                                })
                            }
                        ]
                    }}>
                        <Text
                            style={{
                                fontSize: 38,
                                color: "white",
                                backgroundColor: "#2A2F33",
                                padding: 5,
                                fontFamily: Fonts.RobotoLight,
                                borderRadius: 10,
                                margin: 10
                            }}>
                            ...decades of experience, with all kinds of tech 💻.
                        </Text>
                    </Animated.View>
                    <View>
                        <TouchableOpacity style={styles.modalBtns}
                            onPress={() => this.setModalVisible(!this.state.modalVisible, "ITHelpdesk")}
                        >
                            <Text style={styles.btnText}> IT HELPDESK </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBtns}
                            onPress={() => this.setModalVisible(!this.state.modalVisible, "ITConsultancy")}
                        >
                            <Text style={styles.btnText}> IT CONSULTANCY </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBtns}
                            onPress={() => this.setModalVisible(!this.state.modalVisible, "webDesign")}
                        >
                            <Text style={styles.btnText}> WEB DESIGN </Text>
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}>
                        <View style={{
                            backgroundColor: "#2A2F33", flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {this.state.modalType === "ITHelpdesk" ? <ITHelpdesk /> : null}

                            <TouchableOpacity style={styles.modalBtns}
                                onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                <Text style={styles.btnText}>CLOSE</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    headerAccent: {
        color: "#ef7d00"
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
        fontFamily: Fonts.RobotoLight,
        fontWeight: "400"
    },
    homeTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RobotoLight
    },
    bio: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        fontFamily: Fonts.RalewayLight,
        padding: 5,
        margin: 5
    },
    modalBtns: {
        alignItems: "center",
        backgroundColor: '#ef7d00',
        padding: 12,
        borderRadius: 5,
        width: 150,
        margin: 10
    },
    btnText: {
        fontFamily: Fonts.RobotoBold,
        color: "white"
    }
})