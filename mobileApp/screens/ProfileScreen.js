import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ProfileDetails from "../components/ProfileDetails";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>

      <ProfileDetails
        fullName="Enes Mulolli"
        image={require("../assets/image.jpg")}
        position="Software Engineer"
        description="Lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        project={require("../assets/web1.png")}
        navigation={props.navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },

  text: {
    fontSize: 20,
    textAlign: "center"
  }
});

export default ProfileScreen;