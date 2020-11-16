import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import aboutpage from '../assets/aboutpage.png';
import { createStackNavigator } from '@react-navigation/stack';


//  <Stack.Screen name="꿀팁 찜" component={LikePage}/>을 통해 페이지 기능을 갖추면 navigation이라는 기능 사용 가능.
export default function AboutPage({ navigation }){
  
  //   const link = () => {
  //     Linking.openURL("https://naver.com")
  // }
    return (
    <View style={styles.container}>
      {/* StatusBar 추가. */}
        <StatusBar style="light" /> 
        <Text style={styles.title}> 주식매매 적성검사 </Text>
       
        
        <View style={styles.textContainer}>
            <Image style={styles.aboutImage} source={aboutpage} resizeMode={"cover"}/>
            <Text style={styles.desc01}>자신만의 투자습관을 통해 투자유형 파악하기!</Text>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Question')}>
                <Text style={styles.buttonText01}>테스트 시작하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Question')}>
                <Text style={styles.buttonText02}>다른 테스트 하러가기</Text>
            </TouchableOpacity>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#1F266A",
        alignItems:"center"
    },
    title: {
        textAlign: "center",
        fontSize:30,
        fontWeight:"600",
        color:"#fff",
        // padding을 쓴 이유는 컨테이너 내부에 있는 title이고, 내부 여백을 위해서는 padding.
        paddingLeft:30,
        paddingTop:60,
        paddingRight:30
    },
    textContainer: {
        width:350,
        height:550,
        backgroundColor:"#fff",
        marginTop:50, // 바깥여백이므로 margin
        borderRadius:30,
        justifyContent:"center",
        alignItems:"center"
    },
    aboutImage:{
        width:250,
        height:150,
        borderRadius:30
    },
    desc01: {
        textAlign:"center",
        fontSize:20,
        fontWeight:"700",
        paddingLeft:22,
        paddingRight:22,
        paddingTop: 40,
        paddingBottom: 40

    },
    button:{
        backgroundColor:"rgb(76, 55, 232)",
        padding:20,
        borderRadius:15,
        margin: 5,
        width: 200
    },
    buttonText01: {
        color:"#fff",
        fontSize:15,
        fontWeight:"700",
        textAlign: "center"
    },
    buttonText02: {
      color:"#fff",
      fontSize:15,
      fontWeight:"700",
      textAlign: "center"
  },
})