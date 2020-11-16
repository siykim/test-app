import * as React from 'react';
import { View, Text, Image } from 'react-native';
// 스택 네비게이션 라이브러리.
import { createStackNavigator } from '@react-navigation/stack';
// 페이지로 만든 컴포넌트.
import ResultPage from '../pages/ResultPage';
import AboutPage from '../pages/AboutPage';
import Question from '../pages/Question';
import Question2 from '../pages/Question2';
import Question3 from '../pages/Question3';
import Question4 from '../pages/Question4';
import Question5 from '../pages/Question5';
import Question6 from '../pages/Question6';
import Question7 from '../pages/Question7';
import Question8 from '../pages/Question8';
import Question9 from '../pages/Question9';
import Question10 from '../pages/Question10';


import splash from '../assets/splash.png';

// 스택 네비게이션 라이브러리가 제공해주는 여러 기능을 담고 있는 객체 생성.
const Stack = createStackNavigator();

const StackNavigator = () => {

  return (

    <Stack.Navigator
    initialRouteName="AboutPage"
    screenOptions={{
        headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: "black",
            shadowColor: "black",
            height:49
        },
        headerTintColor: "black", // header and back button color.
        headerBackTitleVisible: false
      }}   
    >

    {/* 컴토넌트들을 페이지로 만들어주는 기능. */}
    <Stack.Screen name="AboutPage" component={AboutPage} options={{ title: 'OverView'}}/>
    <Stack.Screen name="ResultPage" component={ResultPage}/>
    <Stack.Screen name="Question" component={Question} />
    <Stack.Screen name="Question2" component={Question2}/>
    <Stack.Screen name="Question3" component={Question3}/>
    <Stack.Screen name="Question4" component={Question4}/>
    <Stack.Screen name="Question5" component={Question5}/>
    <Stack.Screen name="Question6" component={Question6}/>
    <Stack.Screen name="Question7" component={Question7}/>
    <Stack.Screen name="Question8" component={Question8}/>
    <Stack.Screen name="Question9" component={Question9}/>
    <Stack.Screen name="Question10" component={Question10}/>

    </Stack.Navigator>
  )
}

export default StackNavigator;
