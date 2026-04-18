import React from "react";
import {Text, StyleSheet, View} from 'react-native';
import ProfileDetails from "../components/ProfileDetails";

const ProfileScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Profile Screen</Text>
            <ProfileDetails fullName="Enes Mulolli" image={require('../assets/image.jpg')} position="Software Engineer" description="Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." project={require('../assets/images1.jpg')} navigation={props.navigation} />
        </View>
    );
}

export default ProfileScreen;