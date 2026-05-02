import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity
} from "react-native";

const ProjectsDetails = (props) => {
    return(
        <View style={styles.card}>
            <Image source={props.project} style={styles.projectImg} />

            <Text style={styles.description}>
                {props.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "28%", // 👈 2 cards per row
        height: 350,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 15,
        overflow: "hidden",

        boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
        elevation: 4
    },

    projectImg: {
        width: "100%",
        height: "80%",
    },

    description: {
        padding: 10,
        fontSize: 14,
        fontWeight: "600",
        textAlign: "center"
    }
});

export default ProjectsDetails;