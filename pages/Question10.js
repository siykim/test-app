import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView,StyleSheet, Button, TouchableOpacity, ProgressBarAndroid} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import questionData from '../questionData.json';
import Loading from '../components/Loading';
import {firebase_db} from "../firebaseConfig";
import resultData from '../resultData';
import Constants from 'expo-constants';

const Question = ( {navigation} ) => {

    const [questionState, setQuestionState] = useState();
    // 로딩화면
    const [ready, setReady] = useState(true);
    // 결과데이터
    const [resultState, setResultState] = useState();

    useEffect(() => {
        // 파이어베이스에 있는 question 데이터 연결.
        firebase_db.ref('/question').once('value').then((snapshot) => {
          console.log("파이어베이스에서 데이터 입수")
          let question =snapshot.val();
          setQuestionState(question[9])
          setReady(false)
        })

    }, [])
        // 사용자 고유 아이디 추출.
        const user_id = Constants.installationId;
        // 결과페이지로 결과 데이터와 함께 이동하는 함수.
        const goResult = (data) => {

          // 파이어베이스에 json형태로 저장할 수 있게 변수 생성.
          const new_history = {
            idx: data.idx,
            question: data.answer_title
          }

          // 사용자가 각 보기 클릭 시 파이어베이스에 저장
          if (data.idx == 1) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            // 저장 후 결과페이지로 이동.
            navigation.navigate("ResultPage")
          } else if (data.idx == 2) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate("ResultPage")
          } else if (data.idx == 3) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate("ResultPage")
          } else if (data.idx == 4) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate("ResultPage")
          } 
        }

    
    return ready ? <Loading/> : (
     
        <View style={styles.container}>
            
            {/* <Image source={{uri:questionState.image}} resizeMode="cover" style={styles.questionImage}/> */}
            <Text style={styles.questionTitle}>{questionState.title + ' / 10'}</Text>
            <Text style={styles.question}>{questionState.question}</Text>
            <View style={styles.answerList}>
                <ScrollView>
                    {questionState.answer.map((data,i)=>{
                        return (
                        <TouchableOpacity key={i} style={styles.answerView} onPress={()=>goResult(data)}>
                            <Text style={styles.answerText} >{data.idx + ') ' + data.answer_title}</Text>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
                <ProgressBarAndroid
                  style={styles.progressBar}
                  styleAttr="Horizontal"
                  color="#2196F3"
                  indeterminate={false}
                  progress={1.0}
                />
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button02} onPress={() => navigation.goBack()}>
                       <Text style={styles.buttonText}>Back</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.popToTop()}>
                       <Text style={styles.buttonText}>Home</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.navigate('ResultPage')}>
                       <Text style={styles.buttonText}>Next</Text>
                   </TouchableOpacity>
                </View>
            </View>
            
        </View>

    )
}

export default Question

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor:"black"
    },
    questionImage: {
        height:100
    },
    questionTitle: {
        padding:20,
        color:'#1590FF',
        fontSize: 18
    },
    question: {
        padding:20,
        fontSize:18,
        color:'#fff',
    },
    answerList: {
        flex:1,
        padding:20
    },
    answerView: {
        borderRadius:10,
        borderStyle:'solid',
        borderColor:"#fff",
        borderWidth:1,
        padding:30,
        marginBottom:10
    },
    answerText: {
        color:"#fff"
    },
    progressBar: {
      marginVertical: 10
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button01:{
        backgroundColor:"#1590FF",
        borderRadius:10,
        padding: 4,
        paddingLeft: 40,
        paddingRight: 40
    },
    button02:{
      backgroundColor:"#1590FF",
      borderRadius:10,
      padding: 5,
      paddingLeft: 38,
      paddingRight: 38
    },
    buttonText: {
        color:"#fff",
        fontSize:14,
        fontWeight:"700",
        textAlign: "center"
    }
})