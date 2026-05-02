import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity
} from "react-native";

const ProfileDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        
        <Image source={props.image} style={styles.img} />

        <View style={styles.infoWrapper}>
          <Text style={styles.fullName}>
            {props.fullName}
          </Text>

          <Text style={styles.description}>
            {props.description}
          </Text>

          <Text style={styles.position}>
            {props.position}
          </Text>

          <Button
            title="Hire ME!"
            color="purple"
            onPress={() => console.log("Message sent!")}
          />
        </View>

        <View style={styles.projectsWrapper}>
          <Image
            source={props.project}
            style={styles.projectImg}
          />

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ProjectScreen")
            }
          >
            <Text style={styles.projectLink}>
              View All Projects
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  avatar: {
    alignItems: "center"
  },

  img: {
    width: 180,
    height: 180,
    borderRadius: 90
  },

  infoWrapper: {
    marginTop: 20,
    alignItems: "center"
  },

  fullName: {
    fontSize: 24,
    fontWeight: "bold"
  },

  description: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center"
  },

  position: {
    marginTop: 5,
    fontSize: 18,
    color: "gray"
  },

  projectsWrapper: {
    marginTop: 40,
    alignItems: "center"
  },

  projectImg: {
    width: 220,
    height: 140,
    borderRadius: 10
  },

  projectLink: {
    marginTop: 10,
    color: "purple",
    fontSize: 18
  }
});

export default ProfileDetails;