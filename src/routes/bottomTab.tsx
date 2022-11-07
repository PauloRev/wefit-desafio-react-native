import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/FontAwesome';

import Home from '../screens/Home';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 2,
          paddingTop: 2,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({ size, color }) => {
          switch (route.name) {
            case 'Repositórios':
              return <Icon name="github" size={size} color={color} />
            case 'Favoritos':
              return <Icon name="star" size={size} color={color} />
            default:
              return;
          }
        },
        tabBarActiveTintColor: '#1976D2'
      })}
    >
      <Tab.Screen name="Repositórios" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favoritos" component={Favorites} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
