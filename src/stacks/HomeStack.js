import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Main" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
