import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import ExcerciseScreen from './screens/ExcerciseScreen';
import ListScreen from './screens/ListScreen';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';
import StudentsScreen from './screens/StudentsScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerTitle: 'APP',
      }}
      >
        <Stack.Screen name="Button" component={ButtonScreen}/>
        <Stack.Screen name="Exercise" component={ExcerciseScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="List" component={ListScreen}/> 
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Students" component={StudentsScreen} />
 
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
