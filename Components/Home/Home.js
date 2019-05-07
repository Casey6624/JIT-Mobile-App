// Libaries
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator, TabBarBottom, createBottomTabNavigator } from "react-navigation";
// Utils 
import Icon from "react-native-vector-icons/Ionicons";
import Fonts from "../../utils/fonts";
// Assets
import JollyRobot from "../../assets/img/JollyRobotCirc.png";
// Screens
import NewsScreen from "../News/News";
import AboutScreen from "../About/About";



class SettingsScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text> Settings Page! </Text>
            </View>
        );
    }
}

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.homeTitle}> HOME | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
                <Text style={styles.welcomeText}>SHEFFIELD | LONDON</Text>
                <Image
                    source={JollyRobot}
                    resizeMode="contain"
                    style={styles.JollyRobot}
                />
                <Text style={styles.getStarted}><Text style={styles.headerAccent}>Get Started</Text> by selecting a menu item below</Text>
            </View>
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
            )
        }
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    homeTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RobotoLight
    },
    JollyRobot: {
        width: 270,
        marginTop: 0,
        marginLeft: 20,
        transform: [
            { rotate: '40deg' }
        ]
    },
    headerAccent: {
        color: "#ef7d00"
    },
    welcomeText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginTop: 0,
        fontFamily: Fonts.RalewaySemiBold,
        fontWeight: "400"
    },
    getStarted: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        fontFamily: Fonts.RalewayLight
    }
})