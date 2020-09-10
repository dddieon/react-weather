import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Now, Getting the weather</Text>
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
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    },
})
