import React, { Component } from "react";
import { View, Text, StyleSheet, Image, WebView } from "react-native";

import axios from "axios"

export default class NewsScreen extends Component {

    state = {
        pullingBlogsInProgress: true,
        blogData: []
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        let queryURL = "https://www.jollyit.co.uk/wp-json/wp/v2/posts"
        axios.get(queryURL)
            .then(res => {
                this.setState({ blogData: res.data })
                console.log(this.state.blogData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        if (this.state.pullingBlogsInProgress) {
            <View>
                <Text style={styles.loadingBlogs}>Loading...</Text>
            </View>
        }

        return (
            <View style={styles.container}>
                <Text style={styles.newsTitle}> NEWS | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
                {this.state.blogData.map((blog, index) =>

                    <View>
                        <Text style={styles.blogTitle}>{this.state.blogData[index].title.rendered}</Text>
                        <Image></Image>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1
    },
    newsTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center",
        fontFamily: Fonts.RobotoLight,
        paddingBottom: 5
    },
    blogTitle: {
        color: "white",
        fontSize: 22
    },
    headerAccent: {
        color: "#ef7d00"
    }
})
