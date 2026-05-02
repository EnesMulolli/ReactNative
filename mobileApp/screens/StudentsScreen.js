import React from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = (props) => {
    return(
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Elvedin" image={require('../assets/image.jpg')} description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. not only five centuries," />
            <StudentDetails name="Drin" image={require('../assets/image2.jpg')} description="Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t survived not only five centuries, sit amet." />
            <StudentDetails name="Enes" image={require('../assets/images1.jpg')} description="Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimenot only five centuries, dolor sit amet." />
            <StudentDetails name="Drilon" image={require('../assets/image.jpg')} description="Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen only five centuries, sit amet." />
            <StudentDetails name="Yll" image={require('../assets/image2.jpg')} description="Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It sit amet." />

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
    }
});

export default StudentsScreen;