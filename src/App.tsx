import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { navigationRef } from "./Utils";
import {store} from './Store'
import HomeScreen from './components/HomeScreen'
import ShowDetailsScreen from './components/ShowDetailsScreen'
import SearchScreen from './components/SearchScreen'
import EpisodeDetailScreen from './components/EpisodeDetailScreen'
import { Provider } from 'react-redux'

export const screens = {
  Home: 'Home',
  ShowDetails: 'ShowDetails',
  EpisodeDetails: 'EpisodeDetails',
  Search: 'Search',
}

const Stack = createStackNavigator()

export default function App() {

  const stack = (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={screens.Home} component={HomeScreen} />
        <Stack.Screen name={screens.ShowDetails} component={ShowDetailsScreen} />
        <Stack.Screen name={screens.Search} component={SearchScreen} />
        <Stack.Screen
          name={screens.EpisodeDetails}
          component={EpisodeDetailScreen}
        />
      </Stack.Navigator>
  )

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef} children={stack} />
    </Provider>
    )
}
