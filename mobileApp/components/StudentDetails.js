import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const StudentDetails = ({ name, image, description, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(name)}
      style={styles.container}
      activeOpacity={0.7}
    >
      <View style={styles.cardWrapper}>
        <Image source={image} style={styles.img} />

        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignSelf: "center",
    width: "90%",
  },
  cardWrapper: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoWrapper: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    flexShrink: 1,
  },
});

export default StudentDetails;