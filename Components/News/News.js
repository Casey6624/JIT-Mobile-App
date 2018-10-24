import React, { Component } from "react";
import {View, Text, StyleSheet, WebView} from "react-native";


export default class NewsScreen extends Component {

    state = { 
        pullingBlogsInProgress: true
    }
    render() {
        if(this.state.pullingBlogsInProgress){
                return(
                    <View>
                        <Text>Loading...</Text>
                    </View>
                )
        }
      return (
          <View style={styles.container}>
              <Text style={styles.newsTitle}> NEWS | <Text style={styles.headerAccent}>JOLLY  IT</Text></Text>
            <WebView 
            style={styles.pulledBlogs}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: "https://www.jollyit.co.uk/blog"}}
            onLoad={this.blogsLoaded()}
            injectedJavaScript={`
            document.getElementsByClassName("container clearfix et_menu_container")[0].style.display = "none";
            document.getElementsByClassName("et_pb_module et_pb_text et_pb_text_2 et_pb_bg_layout_light  et_pb_text_align_left")[0].style.display = "none";
            document.getElementsByClassName("et_pb_row et_pb_row_1")[0].style.display = "none";
            document.getElementsByClassName("et_pb_row et_pb_row_2 tiled-blog-row")[0].style.padding = "0px";
            document.getElementById("page-container").style.padding = "0px";
            document.getElementsByClassName("et_pb_section et_pb_section_0 et_pb_with_background et_section_regular")[0].style.display = "none";`
        }
            />
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
        fontFamily: Fonts.RalewayBold,
        paddingBottom: 5
    },
    headerAccent: {
        color: "#ef7d00"
    },
    pulledBlogs: {
        
    }
})
  