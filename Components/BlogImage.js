import React from "react"
import { Text } from "react-native"

import NoImage from "../assets/img/noImage.jpg"

const BlogImage = ({ sourceURL }) => {
    return (
        <View>
            <Image
                style={{ width: 150, height: 150, borderRadius: 5 }}
                source={{ uri: sourceURL }}
            />
        </View>
    )
}