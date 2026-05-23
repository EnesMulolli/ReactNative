import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Elvedin" image={require('../assets/image.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <StudentDetails name="Drin" image={require('../assets/image2.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <StudentDetails name="Enes" image={require('../assets/images1.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <StudentDetails name="Drilon" image={require('../assets/image.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
            <StudentDetails name="Ylli" image={require('../assets/image2.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }
});

export default StudentsScreen;