import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CalendarScreen from '../screens/CalendarScreen'

const Stack = createStackNavigator()

function CalendarStack() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      activeColor="black"
      labelStyle={{ fontSize: 12 }}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  )
}

export default CalendarStack
