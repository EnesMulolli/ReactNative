import react from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const HomeScreen = (navigation) => {
    return( 
        <View style={styles.container}>
            <Text>Welcome to Home Screen</Text>
            <Button title="Go to About Screen" onPress={() => navigation.navigate('About')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    }
});

export default HomeScreen;