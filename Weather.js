import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#556270", "#ff6b6b"],
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#556270", "#ff6b6b"],
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#556270", "#ff6b6b"],
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#556270", "#ff6b6b"],
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#dce35b", "#45b649"],
        subtitle: "It's sunny day!",
    },
    Clouds: {
        iconName: "weather-hail",
        gradient: ["#556270", "#ff6b6b"],
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#556270", "#ff6b6b"],
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#556270", "#ff6b6b"],
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#556270", "#ff6b6b"],
    },
    Smoke: {
        iconName: "weather-fog",
        gradient: ["#556270", "#ff6b6b"],
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#556270", "#ff6b6b"],
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#556270", "#ff6b6b"],
    },
    Squall: {
        iconName: "weather-pouring",
        gradient: ["#556270", "#ff6b6b"],
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#556270", "#ff6b6b"],
    },
}
export default function Weather({ temp, condition }) {
    console.log(condition)
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={{ ...styles.halfContainer, ...styles.borderRadius }}
            >
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white"
                ></MaterialCommunityIcons>
                <Text style={styles.temp}>{temp}˚</Text>
            </LinearGradient>
            <View style={{ ...styles.halfContainer, ...styles.textContianer }}>
                <Text style={styles.title}>{condition}</Text>
                <Text style={styles.subtitle}>It's {condition} day!</Text>
            </View>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Haze",
        "Dust",
        "Smoke",
        "Fog",
        "Sand",
        "Squall",
        "Tornado",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#222222",
        fontSize: 64,
        fontWeight: "300",
        marginBottom: 12,
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 16,
        color: "#5f5f5f",
    },
    textContianer: {
        backgroundColor: "#fff",
    },
    borderRadius: {
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    },
})
