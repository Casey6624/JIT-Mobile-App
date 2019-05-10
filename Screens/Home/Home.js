// Libaries
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, ImageBackground, TouchableOpacity } from 'react-native';
import { TabNavigator, TabBarBottom, createBottomTabNavigator } from "react-navigation";
import axios from "axios"
// Utils 
import Icon from "react-native-vector-icons/Ionicons";
import LogoImage from "../../assets/img/whitelogotrans.png";
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
        noData: false
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



    render() {
        return (
            <ImageBackground style={styles.container} source={SheffieldTrain}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>HOME</Text>
                    <Icon name="ios-home" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <View style={styles.contentContainer}
                >
                    <Text style={{
                        fontSize: 38,
                        color: "white",
                        backgroundColor: "#2A2F33",
                        padding: 5,
                        fontFamily: Fonts.OpenSansCon
                    }}>
                        ...a family run IT consultancy based in London 💂 + Yorkshire ☕.
                        </Text>
                    <View style={styles.lmiContainer}>
                        {this.state.numOfCustomers && <Text style={styles.LMIText}>
                            Currently Helping
                            <Text style={{ color: "#ef7d00" }}> {this.state.numOfCustomers} </Text>
                            Customers
                        </Text>}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: () => (
                <Icon name="ios-home" size={24} />
            )
        }
    },
    News: {
        screen: NewsScreen,
        navigationOptions: {
            tabBarLabel: "News",
            tabBarIcon: () => (
                <Icon name="ios-paper" size={24} />
            )
        }
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            tabBarLabel: "About Us",
            tabBarIcon: () => (
                <Icon name="ios-people" size={28} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabel: "Settings",
            tabBarIcon: () => (
                <Icon name="ios-hammer" size={24} />
            ),
            header: null,
            headerLeft: null
        }
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
        justifyContent: "space-between"
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
    lmiContainer: {
        flexDirection: "row",
        marginTop: 40,
        textAlign: "right",
        backgroundColor: "#2A2F33",
        justifyContent: "flex-end",
        padding: 10
        //display: this.state.numOfCustomers === null || this.state.numOfCustomers === 0 ? "none" : "flex"
    },
    welcomeText: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        margin: 15,
        fontFamily: Fonts.OpenSansConBold,
        fontWeight: "400"
    },
    LMIText: {
        color: "white",
        fontSize: 24,
        textAlign: "right"
    }
})