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
                console.log(res.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }

    stripHTML = (rawHTML) => {
        console.log(rawHTML)
        const regex = /(<([^>]+)>)/ig;
        let strippedExcerpt = rawHTML.replace(regex, '');
        if (strippedExcerpt.includes("[&hellip;]")) {
            return strippedExcerpt.split("[&hellip;]")[0] + "..."
        }
        return strippedExcerpt
    }

    render() {
        if (this.state.pullingBlogsInProgress) {
            <View style={styles.container}>
                <Text style={styles.loadingBlogs}>Loading...</Text>
            </View>
        }

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.newsTitle}> NEWS | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
                <View style={styles.innerContainer}>
                    {this.state.blogData.map((blog, index) =>
                        <View key={blog.id} style={styles.blog}>
                            <Text style={styles.blogTitle}>{blog.title.rendered}</Text>
                            <Image
                                style={{ width: 150, height: 150, borderRadius: 5 }}
                                source={{ uri: blog._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url }}
                            />
                            <Text>
                                {this.stripHTML(blog.excerpt.rendered)}
                            </Text>
                            <TouchableOpacity style={styles.viewMoreBtn} onPress={() => Linking.openURL(blog.link)}>
                                <Text style={styles.viewMoreBtnTxt}> View Full Post</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2A2F33",
        flex: 1,
    },
    innerContainer: {
        padding: 10
    },
    blog: {
        padding: 5
    },
    viewMoreBtn: {
        backgroundColor: "#ef7d00",
        borderRadius: 5,
        padding: 5,
        width: "auto",
        height: 50,
        margin: 15,
        textAlign: "center",
        justifyContent: "center",
        flex: 1
    },
    viewMoreBtnTxt: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        alignSelf: "center",
        justifyContent: "center",
        fontFamily: Fonts.RobotoBold,
    },
    newsTitle: {
        color: "white",
        fontSize: 35,
        marginTop: 10,
        textAlign: "center"
    },
    blogTitle: {
        color: "white",
        fontSize: 26,
        textAlign: "center",
        fontFamily: Fonts.RobotoBold,
        paddingBottom: 15,
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
