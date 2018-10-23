import React, {Component} from 'react';
import { StyleSheet, Text,  View, Image} from 'react-native';
import { TabNavigator, TabBarBottom, createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import Fonts from "../../utils/fonts";
import JollyRobot from "../../assets/img/JollyRobotCirc.png";
import NewsScreen from "../News/News";

class SettingsScreen extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text> Settings Page! </Text>
        </View>
    );
  }
}

class AboutScreen extends Component {

    render() {
      return (
          <View style={styles.container}>
            <Text> About Page! </Text>
          </View>
      );
    }
  }

  class HomeScreen extends Component {

    render() {
      return (
          <View style={styles.container}>
            <Text style={styles.homeTitle}> HOME | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
            <Text style={styles.welcomeText}>Welcome To The Official Jolly IT mobile app! </Text>
            <Image 
            source={JollyRobot} 
            resizeMode="contain"
            style={styles.JollyRobot}
            />
            <Text style={styles.getStarted}>Get Started By Selecting a menu item below.</Text>
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
        fontFamily: Fonts.RalewayBold
    },
    JollyRobot: {
        width: 250,
        marginTop: 0,
        marginLeft: 20
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
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        fontFamily: Fonts.RalewaySemiBold
    }
})