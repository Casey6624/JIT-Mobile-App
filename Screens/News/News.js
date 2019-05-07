import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from "react-native";

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
        let queryURL = "https://www.jollyit.co.uk/wp-json/wp/v2/posts?_embed"
        axios.get(queryURL)
            .then(res => {
                this.setState({ blogData: res.data })
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
            <ScrollView style={styles.container}>
                <Text style={styles.newsTitle}> NEWS | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
                {this.state.blogData.map((blog, index) =>
                    <View key={blog.id}>
                        <Text style={styles.blogTitle}>{blog.title.rendered}</Text>
                        <Image
                            style={{ width: 150, height: 150 }}
                            source={{ uri: blog._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url }}
                        />
                        <TouchableOpacity style={styles.viewMoreBtn} onPress={() => Linking.openURL(blog.link)}>
                            <Text style={styles.viewMoreBtnTxt}> View Full </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1,
    },
    viewMoreBtn: {
        backgroundColor: "#ef7d00",
        borderRadius: 5,
        padding: 5,
        width: 150,
        height: 50,
        textAlign: "center"
    },
    viewMoreBtnTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontFamily: Fonts.RobotoBold,
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
    },
    loadingBlogs: {
        color: "white",
        textAlign: "center",
        fontSize: 50
    }
})
