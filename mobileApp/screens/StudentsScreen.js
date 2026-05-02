import React from "react";
import { Text, StyleSheet, View, Alert, Platform } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {

  const handlePress = (name) => {
    if (Platform.OS === "web") {
      alert(name + " clicked!");
    } else {
      Alert.alert("Student", name + " clicked!");
    }
  };

  return (
    <View>
      <Text style={styles.text}>Students Screen</Text>

      <StudentDetails
        name="Elvedin"
        image={require("../assets/image.jpg")}
        description="Lorem Ipsum text"
        onPress={handlePress}
      />

      <StudentDetails
        name="Drin"
        image={require("../assets/image2.jpg")}
        description="Lorem Ipsum text"
        onPress={handlePress}
      />

      <StudentDetails
        name="Enes"
        image={require("../assets/images1.jpg")}
        description="Lorem Ipsum text"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 20,
  },
});

export default StudentsScreen;