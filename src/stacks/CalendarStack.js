import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import CalendarScreen from '../screens/CalendarScreen'

const Stack = createStackNavigator()

function CalendarStack() {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      activeColor="#e91e63"
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
