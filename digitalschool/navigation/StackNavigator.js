import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

const ScreenOptionStyle = {
    headerStyle: {
        backgroundColor: "#ff6347",
    },
    headerTintColor: "#fff",
    headerTitleStyle:{
        fontWeight: "bold",
    }
};

const MainStackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName = "Home" screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
};

const AboutStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={ScreenOptionStyle}>
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
};


export {MainStackNavigator, AboutStackNavigator};
export default MainStackNavigator;