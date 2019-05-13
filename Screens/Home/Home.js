// Libaries
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, ImageBackground, TouchableOpacity, Easing } from 'react-native';
import { TabNavigator, TabBarBottom, createBottomTabNavigator } from "react-navigation";
import axios from "axios"
// Utils 
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import LogoImage from "../../assets/img/whitelogotrans.png";
import JollyIcon from "../../assets/img/jollyIcon.png"
import Fonts from "../../utils/fonts";
// Assets
import SheffieldTrain from "../../assets/img/sheffieldTrain.jpg"
import JollyRobot from "../../assets/img/JollyRobotCirc.png";
// Screens
import NewsScreen from "../News/News";
import SettingsScreen from "../Settings/Settings"
import AboutScreen from "../About/About";

class HomeScreen extends Component {

    state = {
        numOfCustomers: null,
        noData: false,
        showAnim: new Animated.Value(0)
    }

    componentDidMount() {
        const url = "http://tasks.jollyit.co.uk/php/LMI/totalSessions.php"
        axios.get(url)
            .then(res => {
                if (res.status === 200 && !isNaN(res.data)) {
                    if (res.data > 0) {
                        this.setState({ numOfCustomers: res.data })
                    }
                    return
                }
            })
            .catch(err => {
                console.log(err)
                this.setState({ noData: true })
            })
    }

    animateBoxes = () => {
        Animated.timing(this.state.showAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    render() {

        return (
            <ImageBackground style={styles.container} source={SheffieldTrain} onLoad={this.animateBoxes()}>
                <View style={styles.headerText}>

                    <Text style={styles.welcomeText}>JOLLY IT</Text>

                    <Icon name="md-home" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <View style={styles.contentContainer}
                >
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
                                borderRadius: 10
                            }}>
                            ...a family run IT consultancy based in London 💂 + Yorkshire ☕.
                        </Text>
                    </Animated.View>

                    <Animated.View style={{
                        justifyContent: "flex-start",
                        marginTop: 10,
                        alignItems: "center",
                        fontFamily: Fonts.RobotoLight,
                        borderRadius: 10, textAlign: "center", padding: 5, backgroundColor: "#2A2F33", opacity: this.state.showAnim, transform: [
                            {
                                translateX: this.state.showAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 1]
                                })
                            },
                            {
                                translateY: this.state.showAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 1]
                                })
                            }
                        ]
                    }}>
                        {this.state.numOfCustomers && <Text style={styles.LMIText}>
                            <IconFontAwesome name="support" size={25} style={{ color: "#ef7d00" }} /> Currently Helping
                            <Text style={{ color: "#ef7d00", fontFamily: Fonts.OpenSansConBold }}> {this.state.numOfCustomers} </Text>
                            Customers
                            </Text>}
                    </Animated.View>

                    <Animated.View style={{
                        justifyContent: "flex-start",
                        marginTop: 10,
                        alignItems: "center",
                        fontFamily: Fonts.RobotoLight,
                        borderRadius: 10, textAlign: "center", padding: 5, backgroundColor: "#2A2F33", opacity: this.state.showAnim, transform: [
                            {
                                translateX: this.state.showAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [30, 1]
                                })
                            },
                            {
                                translateY: this.state.showAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 1]
                                })
                            }
                        ]
                    }}>
                        {this.state.numOfCustomers && <Text style={styles.LMIText}>
                            <IconFontAwesome name="bar-chart" size={25} style={{ color: "#ef7d00" }} /> <Text style={{ fontFamily: Fonts.RobotoBold }}> 4.96 / 5 </Text> Satisfaction Rate
                            </Text>}
                    </Animated.View>

                </View>
            </ImageBackground >
        );
    }
} //<ion-icon name="help-buoy"></ion-icon>

export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: () => (
                <Icon name="md-home" size={24} />
            )
        }
    },
    News: {
        screen: NewsScreen,
        navigationOptions: {
            tabBarLabel: "News",
            tabBarIcon: () => (
                <Icon name="md-paper" size={24} />
            )
        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarLabel: "About",
            tabBarIcon: () => (
                <Icon name="md-people" size={24} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: () => (
                <Icon name="md-cog" size={24} />
            ),
            header: null,
            headerLeft: null
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: "#ef7d00",
            activeBackgroundColor: "#f2f2f2",
            allowFontScaling: true
        }
    })

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ef7d00",
        flex: 1
    },
    contentContainer: {
        margin: 25
    },
    headerText: {
        backgroundColor: "#ef7d00",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 2
    },
    homeTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RobotoLight
    },
    headerAccent: {
        color: "black"
    },
    tchButton: {
        alignItems: "center",
        backgroundColor: '#ef7d00',
        padding: 12,
        borderRadius: 5,
        width: 200
    },
    welcomeText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        margin: 15,
        fontFamily: Fonts.RobotoLight,
        fontWeight: "400"
    },
    LMIText: {
        color: "white",
        fontSize: 22,
        fontFamily: Fonts.RobotoLight,
        justifyContent: "flex-start",
        flexDirection: "row"
    }
})