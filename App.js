import React from 'react';
import { StyleSheet,View, Text } from 'react-native';

import HomeScreen from './Homescreen'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="By-Breed" component={HomeScreen} />
 </Stack.Navigator>
 </NavigationContainer>
 );
}


const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40 
  },
  search: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    width: 200,
    marginBottom: 5
  }
});
