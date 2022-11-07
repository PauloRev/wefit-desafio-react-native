import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from '../screens/Details';

import BottomTab from './bottomTab';

const Stack = createNativeStackNavigator();

export default function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Repositórios'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Repositórios' component={BottomTab} />
      <Stack.Screen name='Favoritos' component={BottomTab} />
      <Stack.Screen name='Detalhes' component={Details} />
    </Stack.Navigator>
  )
}
