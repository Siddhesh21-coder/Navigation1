// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNav from './navg/RootStackNav';
import BotTabNav from './src/TabNavigator';
import DrawNav from './src/drawer';


export default function App( {navigation} ) {
  return (
    <NavigationContainer>
      <DrawNav />
      
    </NavigationContainer>
  );
}

