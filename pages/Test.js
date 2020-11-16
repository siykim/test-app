import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
// 상태바
import { StatusBar } from 'expo-status-bar';
// 결과 데이터
import resultData from '../resultData';
// 중간 선
import Dash from 'react-native-dash';
// 공유하기 기능
import { Share } from 'react-native';
// 파이어베이스 연결
import {firebase_db} from '../firebaseConfig';
// 로딩페이지
import ResultLoading from "../components/ResultLoading";
// import Loading from "../components/Loading";
// 사용자 id 생성
import Constants from 'expo-constants';


export default function ResultPage( {navigation} ){
  
  const share = () => {
    Share.share({
      message:`${state.name}
       ${state.image}
       ${state.subtitle}
       ${state.type}
       ${state.per}
       ${state.description} 
       ${state.solution}`
    })
  }
// 기본 페이지 로딩
  const [state, setState] = useState(resultData[5]);



  return  (
  <View style={styles.container}>
    {/* StatusBar 추가. */}
      <StatusBar style="light" /> 
      <View style={styles.titleContainer}>
          <Text style={styles.title}> 당신의 투자유형은 </Text>
          <Text style={styles.nameTitle}> [ {state.name} ] </Text>
      </View>
      
      <View style={styles.textContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.aboutImage} source={{uri:state.image}} resizeMode={"stretch"}/>
            <View>
               <Text style={styles.subTitle}>{state.subtitle}</Text>
               <Text style={styles.type}>{state.type}</Text>
               <Text style={styles.per}>{state.per}</Text>
            </View>
          </View>

          <ScrollView>
              <Text style={styles.desc00}>{state.description}</Text>
          </ScrollView>

          <Dash style={styles.blockLine} dashColor="black" />
          <Text style={styles.solution}>{state.solution}</Text>
          {/* 버튼 컨테이너 */}
          <View style={styles.buttonGroup}>
             <TouchableOpacity style={styles.button01} onPress={()=>navigation.popToTop()}>
                 <Text style={styles.buttonText}>메인으로</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button02} onPress={()=>share()}>
                 <Text style={styles.buttonText}>공유하기</Text>
             </TouchableOpacity>
          </View>
          
      </View>

  </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor:"#1F266A",
      alignItems:"center"
  },
  titleContainer: {
      marginTop: 32,
      paddingTop: 13,
      paddingBottom: 13,
      backgroundColor: "black",
      width: 500
  },
  title: {
      textAlign: "center",
      fontSize: 18,
      fontWeight:"600",
      color:"#fff",
      // padding을 쓴 이유는 컨테이너 내부에 있는 title이고, 내부 여백을 위해서는 padding.
      paddingLeft:30,
      paddingRight:30
  },
  nameTitle: {
    textAlign: "center",
    fontSize: 34,
    fontWeight:"700",
    color:"#fff"
  },
  textContainer: {
      width: 375,
      height:600,
      backgroundColor:"#fff",
      marginTop: 24,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center"
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
    width: 380,
    borderRadius: 5,
    margin: 10,
    marginBottom: 20
  },
  aboutImage:{
    height: 180,
    width: 150,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 18
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    color: "red"
  },
  type: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    color: "red"
  },
  per: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    color: "red"
  },
  desc00: {
      textAlign:"center",
      fontSize: 15,
      fontWeight:"600"
  },
  blockLine: {
    width: 360,
    height: 1,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20
  },
  solution: {
    textAlign:"center",
    fontSize: 15,
    fontWeight:"bold"
},
  buttonGroup: {
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 6 
  },
  button01:{
      backgroundColor:"rgb(76, 55, 232)",
      padding:20,
      borderRadius:15,
      margin: 8,
      marginRight: 12,
      width: 130
  },
  button02:{
    backgroundColor:"rgb(76, 55, 232)",
    padding:20,
    borderRadius:15,
    margin: 8,
    width: 130
  },
  buttonText: {
      color:"#fff",
      fontSize:15,
      fontWeight:"700",
      textAlign: "center"
  }
})