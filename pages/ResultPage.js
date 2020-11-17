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
// 사용자 id 생성
import Constants from 'expo-constants';


export default function ResultPage( {navigation} ){
  
  // 공유하기 기능
  const share = () => {
    Share.share({
      message:`${state.name}
       ${state.subtitle}
       ${state.type}
       ${state.per}
       ${state.description} 
       ${state.solution}`
    })
  }
// 기본 페이지 로딩
  const [state, setState] = useState({
    name: '',
    image: 'https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fwb.png?alt=media&token=bf1f34fa-c52a-45df-a965-55d53dc87f2b',
    subtitle: '',
    type:'',
    per:'',
    description: '',
    solution:''
  });

  const [isLoading, setIsLoading] = useState(true);

// 사용자가 선택한 답에 따라 결과 리턴.
  const getResult = (r) => {
    // 주신
    if (
      (r[0].idx === 1 || r[0].idx === 2 || r[0].idx === 3 || r[0].idx === 4 ) &&
      (r[1].idx === 1 || r[1].idx === 2 || r[1].idx === 3) &&
      (r[2].idx === 4 ) &&
      (r[3].idx === 3 || r[3].idx === 4) &&
      (r[4].idx === 4 ) &&
      (r[5].idx === 2 ) &&
      (r[6].idx === 1 || r[6].idx === 3) &&
      (r[7].idx === 2 ) &&
      (r[8].idx === 4 ) &&
      (r[9].idx === 4 )  
    ) {return(setState(resultData[0]))}
    // 소프
    else if (
      (r[0].idx === 1 || r[0].idx === 2) &&
      (r[1].idx === 2 || r[1].idx === 3) &&
      (r[2].idx === 4 ) &&
      (r[3].idx === 3 || r[3].idx === 4) &&
      (r[4].idx === 3 ) &&
      (r[5].idx === 2 ) &&
      (r[6].idx === 1 || r[6].idx === 3) &&
      (r[7].idx === 1 || r[7].idx === 2) &&
      (r[8].idx === 4 ) &&
      (r[9].idx === 2 || r[9].idx == 4)
    ) {return(setState(resultData[1]))}
    // 고니
    else if (
      (r[0].idx === 1 || r[0].idx === 2) &&
      (r[1].idx === 1 || r[1].idx === 2) &&
      (r[2].idx === 1 ) &&
      (r[3].idx === 2 || r[3].idx === 4) &&
      (r[4].idx === 3 ) &&
      (r[5].idx === 4 ) &&
      (r[6].idx === 3 ) &&
      (r[7].idx === 1 ) &&
      (r[8].idx === 4 ) &&
      (r[9].idx === 1 )
    ) {return(setState(resultData[2]))}
    // 워렌버핏
    else if (
      (r[0].idx === 3 || r[0].idx === 4) &&
      (r[1].idx === 3 ) &&
      (r[2].idx === 4 ) &&
      (r[3].idx === 1 || r[3].idx === 3) &&
      (r[4].idx === 4 ) &&
      (r[5].idx === 1 ) &&
      (r[6].idx === 4 ) &&
      (r[7].idx === 2 ) &&
      (r[8].idx === 2 ) &&
      (r[9].idx === 3 )
    ) {return(setState(resultData[3]))}
    // 주린이
    else if (
      (r[0].idx === 1 ) &&
      (r[1].idx === 4 ) &&
      (r[2].idx === 1 || r[2].idx === 2 || r[2].idx === 3 ) &&
      (r[3].idx === 2 ) &&
      (r[4].idx === 1 ) &&
      (r[5].idx === 3 ) &&
      (r[6].idx === 3 ) &&
      (r[7].idx === 3 || r[7].idx === 4 ) &&
      (r[8].idx === 1 || r[8].idx === 3 ) &&
      (r[9].idx === 1 || r[9].idx === 3 )
    ) {return(setState(resultData[4]))}
    // 개미
    else if (
      (r[0].idx === 2 ) &&
      (r[1].idx === 4 ) &&
      (r[2].idx === 1 || r[2].idx === 2 || r[2].idx === 3 ) &&
      (r[3].idx === 2 ) &&
      (r[4].idx === 2 ) &&
      (r[5].idx === 3 || r[5].idx === 4 ) &&
      (r[6].idx === 2 || r[6].idx === 3 ) &&
      (r[7].idx === 1 || r[7].idx === 2 || r[7].idx === 3 || r[7].idx === 4 ) &&
      (r[8].idx === 1 || r[8].idx === 2 || r[8].idx === 3 ) &&
      (r[9].idx === 1 || r[9].idx === 3 || r[9].idx === 4 )
    ) {return(setState(resultData[5]))}
    // 해당 안되는 경우 개미 return
    else {
      return(setState(resultData[5]))
    }
  }


  useEffect(() => {
    // 사용자id 입수.
    const user_id = Constants.installationId;
    // 질문들 답안 가져오기.
    firebase_db.ref('/history/'+user_id).once('value').then((snapshot) => {
      let history = snapshot.val();
      
      getResult(history)
      setTimeout(() => {
        setIsLoading(false)
      }, 5000)
    })
  })

  return isLoading ? <ResultLoading/>: (
  <View style={styles.container}>
    {/* StatusBar 추가. */}
      <StatusBar style="light" /> 
      {/* 타이틀 콘테이너 */}
      <View style={styles.titleContainer}>
          <Text style={styles.title}> 당신의 투자유형은 </Text>
          <Text style={styles.nameTitle}> [ {state.name} ] </Text>
      </View>

      {/* 텍스트 콘테이너 */}
      <View style={styles.textContainer}>
      {/* 이미지, 수익률, 투자유형, 비율 부분 */}
          <View style={styles.imageContainer}>
            <Image style={styles.aboutImage} source={{uri:state.image}} resizeMode={"stretch"}/>
            <View>
               <Text style={styles.subTitle}>{state.subtitle}</Text>
               <Text style={styles.type}>{state.type}</Text>
               <Text style={styles.per}>{state.per}</Text>
            </View>
          </View>

          {/* 설명부분 */}
          <ScrollView>
              <Text style={styles.desc00}>{state.description}</Text>
          </ScrollView>

          <Dash style={styles.blockLine} dashColor="black" />
          {/* 솔루션 부분 */}
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
      marginTop: 10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "black",
      width: 500
  },
  title: {
      textAlign: "center",
      fontSize: 18,
      fontWeight:"600",
      color:"#fff",
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
      marginTop: 18,
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