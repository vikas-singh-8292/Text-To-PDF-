import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PdfForm from './Component/PdfForm';
import Selectmarital from './Component/Selectmarital';



const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PdfForm' component={PdfForm} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
const styles = StyleSheet.create({})
