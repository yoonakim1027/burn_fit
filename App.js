import React, { useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppState } from 'react-native'
import { navigationRef } from './src/utils/Navigation/RootNavigation'
import HomeScreen from './src/screens/HomeScreen'
import CalendarScreen from './src/screens/CalendarScreen'
import LibraryScreen from './src/screens/LibraryScreen'
import MyPageScreen from './src/screens/MyPageScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  const appState = useRef(AppState.currentState)
  const config = {
    animation: 'timing',
    config: {
      duration: 2000,
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.001,
    },
  }
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  })

  return (
    <SafeAreaView>
      <NavigationContainer
        theme={{ colors: { background: 'white' } }}
        ref={navigationRef}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            transitionSpec: {
              open: config,
              close: config,
            },
            gestureEnabled: false,

            cardStyleInterpolator: forFade,
            // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: { backgroundColor: 'red' },
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyleInterpolator: forFade,
            }}
          />
          <Stack.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: { backgroundColor: 'red' },
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyleInterpolator: forFade,
            }}
          />

          <Stack.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: { backgroundColor: 'red' },
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyleInterpolator: forFade,
            }}
          />
          <Stack.Screen
            name="MyPage"
            component={MyPageScreen}
            options={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
              headerStyle: { backgroundColor: 'red' },
              transitionSpec: {
                open: config,
                close: config,
              },
              cardStyleInterpolator: forFade,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
  },
})



export default App
