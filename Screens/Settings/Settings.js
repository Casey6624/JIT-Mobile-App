import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component {

    static navigationOptions = {
        headerMode: 'none',
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> Settings Page! </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})