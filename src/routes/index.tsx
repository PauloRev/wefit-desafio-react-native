import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import BottomTab from './bottomTab';
import StackScreens from './stackScreens';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackScreens />
    </NavigationContainer>
  );
}
