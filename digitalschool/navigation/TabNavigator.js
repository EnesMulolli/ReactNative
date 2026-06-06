import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MainStackNavigator, AboutStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    backgroundColor: '#ff6347',
};

const BottomTabNavigtor = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'lightgray',
                tabBarStyle,
                tabBarLabelStyle: {
                    fontSize: 12,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" size={26} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="About"
                component={AboutStackNavigator}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigtor;