import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { RepositoriesProvider } from './src/hooks/repositories';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <RepositoriesProvider>
      <StatusBar backgroundColor='#fff' style='dark' />
      <Routes />
      <Toast
        topOffset={70}
        visibilityTime={3000}
      />
    </RepositoriesProvider>
  );
}

