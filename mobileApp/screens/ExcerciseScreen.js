import React from "react";
import {Text, Stylesheet, View } from "react-native";

const ExerciseScreen = () => {
    let message = 'Hi there!';
    message = "Hi there from DigitalSchool!";
    return(
        <View>
            <Text>{message}</Text>
        </View>
    )
}

export default ExerciseScreen;