import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView, Animated, Easing } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import NoImage from "../../assets/img/noImage.jpg"

import axios from "axios"
import moment from "moment"

export default class NewsScreen extends Component {

    state = {
        pullingBlogsInProgress: true,
        blogData: [],
        animVal: new Animated.Value(0),
        spinAnimVal: new Animated.Value(0)
    }

    componentDidMount() {
        this.getPosts();
        Animated.timing(this.state.spinAnimVal, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start()
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

    stripHTML = (rawHTML) => {
        const regex = /(<([^>]+)>)/ig;
        let strippedExcerpt = rawHTML.replace(regex, '');
        if (strippedExcerpt.includes("[&hellip;]")) {
            return strippedExcerpt.split("[&hellip;]")[0] + "..."
        }
        return strippedExcerpt
    }

    onImgLoad = () => {
        Animated.timing(this.state.animVal, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>JOLLY IT</Text>
                    <Icon name="ios-paper" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <Animated.View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignSelf: "center",
                    // Animations
                    opacity: this.state.spinAnimVal, transform: [
                        {
                            rotateX: this.state.spinAnimVal.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg']
                            })
                        }
                    ]
                }}>
                    <Icon name="ios-aperture" size={100} style={{ color: "#ef7d00" }} />
                </Animated.View>
            </ScrollView>
        )

        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerText}>
                    <Text style={styles.welcomeText}>JOLLY IT</Text>
                    <Icon name="ios-paper" size={35} style={{ color: "#2A2F33" }} />
                </View>
                <View style={styles.innerContainer}>
                    {this.state.blogData.map((blog, index) =>
                        <View key={blog.id} style={styles.blog}>
                            <Text style={styles.blogTitle}>{blog.title.rendered}</Text>
                            <View style={styles.imgAndExcerpt}>
                                <Animated.View style={{
                                    opacity: this.state.animVal, transform: [
                                        {
                                            translateX: this.state.animVal.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [12, 1]
                                            })
                                        }
                                    ]
                                }}>
                                    {// Here we require two blog images as we might not have a featured image set on WP
                                        blog._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail && <Image
                                            style={{ width: 150, height: 150, borderRadius: 5 }}
                                            source={{ uri: blog._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url }}
                                        />}
                                    {!blog._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail && <Image
                                        style={{ width: 150, height: 150, borderRadius: 5 }}
                                        source={NoImage}
                                        onLoadEnd={this.onImgLoad}
                                    />}
                                </Animated.View>
                                <Animated.View style={{
                                    opacity: this.state.animVal, transform: [
                                        {
                                            translateY: this.state.animVal.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [12, 1]
                                            })
                                        }
                                    ]
                                }}>
                                    <View style={styles.dateAndUserContainer}>

                                        <Text style={styles.dateAndUserTxt}>
                                            <Icon name="md-time" size={20} style={styles.blogIcons} />
                                            &nbsp; {moment(blog.date_gmt).format('LL')}
                                        </Text>
                                        <Text style={styles.dateAndUserTxt}>
                                            <Icon name="md-person" size={20} style={styles.blogIcons} />
                                            &nbsp; {blog._embedded.author[0].name}
                                        </Text>
                                    </View>
                                </Animated.View>
                            </View>
                            <Text style={styles.excerpt}>
                                {this.stripHTML(blog.excerpt.rendered)}
                            </Text>
                            <TouchableOpacity style={styles.viewMoreBtn} onPress={() => Linking.openURL(blog.link)}>
                                <Text style={styles.viewMoreBtnTxt}> View Full Post Online</Text>
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
        alignContent: "center"
    },
    innerContainer: {
        padding: 10
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
    blog: {
        padding: 5,
        marginBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: "white"
    },
    dateAndUserContainer: {
        margin: 20
    },
    dateAndUserTxt: { margin: 5, color: "white", fontSize: 20, fontFamily: Fonts.RobotoLight },
    blogIcons: { marginRight: 10, color: "#ef7d00" },
    imgAndExcerpt: {
        flexDirection: "row",
        alignItems: "center"
    },
    excerpt: {
        color: "white",
        fontSize: 22,
        paddingTop: 10,
        fontFamily: Fonts.RobotoLight,
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
