import React from "react";
import { Text, StyleSheet, View, Image } from 'react-native';

const StudentDetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>

                <Image source={props.image} style={styles.img} />

                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },

    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        width: '90%',
        padding: 10
    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 8
    },

    infoWrapper: {
        flex: 1,
        marginLeft: 15
    },

    name: {
        fontWeight: 'bold',
        marginBottom: 5
    },

    description: {
        flexShrink: 1
    }
});

export default StudentDetails;