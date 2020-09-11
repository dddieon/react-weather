import React from "react"
import Loading from "./Loading"
import * as Location from "expo-location"
import { Alert } from "react-native"
import axios from "axios"
import Weather from "./Weather"
const API_KEY = "4fab0aa151dff647eb08468ce01ec59c"

export default class extends React.Component {
    state = {
        isLoading: true,
    }
    // 콜백1 : 날씨 가져오기
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather,
            },
        } = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        )
        this.setState({ isLoading: false, temp: temp, condition: weather[0].main })
    }
    // 콜백2 : 위치정보 가져오면서 날씨까지 가져오기
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync()
            // permission이 주어지지 않으면 alert
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync()
            this.getWeather(latitude, longitude)
        } catch (error) {
            Alert.alert("Cant' find you", "So sad")
        }
    }
    // 컴포넌트가 마운트되었으면 콜백들을 실행한다
    componentDidMount() {
        this.getLocation()
    }
    render() {
        const { isLoading, temp, condition } = this.state
        return isLoading ? (
            <Loading></Loading>
        ) : (
            <Weather temp={Math.round(temp)} condition={condition}></Weather>
        )
    }
}
