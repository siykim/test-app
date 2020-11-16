import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import Test from './pages/Test';
import Loading from './components/Loading'
import ResultLoading from './components/ResultLoading';

export default function App() {

  return ( 
  <NavigationContainer>
    <StatusBar style="black" />
    <StackNavigator/>
 </NavigationContainer>
  // <Test />
  // <ResultLoading />

 );
}

