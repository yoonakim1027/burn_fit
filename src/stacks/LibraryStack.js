import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LibraryScreen from '../screens/LibraryScreen'

const Stack = createStackNavigator()

function LibraryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Library"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Library" component={LibraryScreen} />
    </Stack.Navigator>
  )
}

export default LibraryStack
