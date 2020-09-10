import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="default"></StatusBar>
            <Text style={styles.text}>Now, We Will Get the weather information</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingVertical: 100,
        // react native에서만 있는 css
        backgroundColor: "#f2f2f2",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    },
})
