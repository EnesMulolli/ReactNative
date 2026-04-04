import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';    

const MenuScreen = (props) => {
    return (
        <View>
            <Text style={styles.text}>Welcome to Menu Screen</Text>
            <Button 
            title="Go to List Screen"
            onPress={() => props.navigation.navigate('List')}
             />
             <TouchableOpacity
             style={styles.btn}
                onPress={() => props.navigation.navigate('Students')}>
                <Text style={styles.btnText}>Go to Students Screen</Text>
                </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 20,
        marginVertical: 20
    },
    btn: {
        backgroundColor: 'blue',
        marginVertical: 10,
        paddingVertical: 7
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default MenuScreen;