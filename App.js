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
import HomeStack from './src/stacks/HomeStack'
import CalendarStack from './src/stacks/CalendarStack'
import LibraryStack from './src/stacks/LibraryStack'
import MyPageStack from './src/stacks/MyPageStack'
import TabNavigation from './src/stacks/Tab'

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
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
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
