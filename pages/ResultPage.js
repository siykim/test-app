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
    // 거지
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
    else {
      return(setState(resultData[0]))
    }
  }


  useEffect(() => {
    const user_id = Constants.installationId;
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
      <Text style={styles.title}> _당신의_투자유형은_ </Text>
      <Text style={styles.nameTitle}> [ {state.name} ] </Text>

      
      <View style={styles.textContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.aboutImage} source={{uri:state.image}} resizeMode={"stretch"}/>
            <View>
               <Text style={styles.desc00}>{state.subtitle}</Text>
               <Text style={styles.desc00}>{state.type}</Text>
               <Text style={styles.desc00}>{state.per}</Text>
            </View>
          </View>

          <ScrollView>
              <Text style={styles.desc01}>{state.description}</Text>
          </ScrollView>
          <Dash style={styles.blockLine} dashColor="black" />
          <Text style={styles.desc02}>{state.solution}</Text>
          <View style={styles.buttonGroup}>
             <TouchableOpacity style={styles.button01} onPress={()=>navigation.popToTop()}>
                 <Text style={styles.buttonText}>메인으로</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.button02} onPress={()=>share()}>
                 <Text style={styles.buttonText}>공유하기</Text>
             </TouchableOpacity>
          </View>
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
      fontSize: 18,
      fontWeight:"600",
      color:"#fff",
      // padding을 쓴 이유는 컨테이너 내부에 있는 title이고, 내부 여백을 위해서는 padding.
      paddingLeft:30,
      paddingTop:16,
      paddingRight:30
  },
  nameTitle: {
    textAlign: "center",
    fontSize: 34,
    fontWeight:"700",
    color:"#fff"
  },
  textContainer: {
      width: 380,
      height:620,
      backgroundColor:"#fff",
      marginTop:15, // 바깥여백이므로 margin
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
    height: 200,
    width: 150,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 20
  },
  desc00: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "left",
    color: "red"
  },
  desc01: {
      textAlign:"left",
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
  desc02: {
    textAlign:"center",
    fontSize: 18,
    fontWeight:"bold"
},
  buttonGroup: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30 
  },
  button01:{
      backgroundColor:"rgb(76, 55, 232)",
      padding:20,
      borderRadius:15,
      margin: 5,
      width: 130
  },
  button02:{
    backgroundColor:"rgb(76, 55, 232)",
    padding:20,
    borderRadius:15,
    margin: 5,
    width: 130
  },
  buttonText: {
      color:"#fff",
      fontSize:15,
      fontWeight:"700",
      textAlign: "center"
  }
})