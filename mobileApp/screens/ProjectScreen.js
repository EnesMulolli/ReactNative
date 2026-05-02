import React from "react"; 
import { Text, StyleSheet, ScrollView, View } from "react-native";  
import ProjectsDetails from "../components/ProjectsDetails";

const ProjectScreen = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>My Projects</Text>

            <View style={styles.grid}>
                <ProjectsDetails 
                    description="Project 1" 
                    project={require("../assets/web1.png")} 
                />

                <ProjectsDetails 
                    description="Project 2" 
                    project={require("../assets/web2.png")} 
                />

                <ProjectsDetails 
                    description="Project 3" 
                    project={require("../assets/web3.png")} 
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 10
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    }
});

export default ProjectScreen;