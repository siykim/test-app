import React,{useEffect,useState} from 'react';
import {View,Text,ImageBackground,ScrollView,StyleSheet, TouchableOpacity, ProgressBarAndroid} from 'react-native'
import Loading from '../components/Loading';
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';

const Question = ( {navigation} ) => {

  // 질문 이미지
    const image = { uri: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fback1.png?alt=media&token=03f3549f-f003-4398-a617-5a4a45d4323b" };
  
  // 데이터 상태 변경
    const [questionState, setQuestionState] = useState();

  // 준비 페이지
    const [ready, setReady] = useState(true);


    useEffect(() => {
        // 파이어베이스에서 질문 데이터 입수
        firebase_db.ref('/question').once('value').then((snapshot) => {
          console.log("파이어베이스에서 Q1 데이터 입수")
          let question =snapshot.val();
          setQuestionState(question[0])
          setReady(false)
        })
    }, [])

      // 사용자가 답 클릭하면 파이어베이스에 데이터 저장.
        const user_id = Constants.installationId;
        const goResult = (data) => {

          const new_history = {
            idx: data.idx,
            question: data.answer_title
          }

          if (data.idx == 1) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question2')
          } else if (data.idx == 2) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question2')
          } else if (data.idx == 3) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question2')
          } else if (data.idx == 4) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question2')
          } 
        }

    
    return ready ? <Loading/> : (
     
        <View style={styles.container}>
            {/* 질문과 질문 이미지 */}
            <ImageBackground 
            source={image} 
            style={{
              resizeMode: "cover",
              justifyContent: "center",
              borderRadius: 20,
              height: 85
            }} 
            imageStyle={{opacity:0.3}}>
              <Text style={styles.questionTitle}>{questionState.title + ' / 10'}</Text>
            </ImageBackground>
    
            <Text style={styles.question}>{questionState.question}</Text>
            {/* 보기 콘테이너 */}
            <View style={styles.answerList}>
            {/* 보기 정보 */}
                <ScrollView>
                    {questionState.answer.map((data,i)=>{
                        return (
                        <TouchableOpacity key={i} style={styles.answerView} onPress={()=> goResult(data)}>
                            <Text style={styles.answerText} >{data.idx + ') ' + data.answer_title}</Text>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
                {/* 진행상태바 */}
                <ProgressBarAndroid
                  style={styles.progressBar}
                  styleAttr="Horizontal"
                  color="#2196F3"
                  indeterminate={false}
                  progress={0.1}
                />
                {/* 버튼 그룹 */}
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button02} onPress={() => navigation.goBack()}>
                       <Text style={styles.buttonText}>Back</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.popToTop()}>
                       <Text style={styles.buttonText}>Home</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.navigate('Question2')}>
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
      marginVertical: 20
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
      padding: 10,
      paddingLeft: 40,
      paddingRight: 40
    },
    buttonText: {
        color:"#fff",
        fontSize:14,
        fontWeight:"700",
        textAlign: "center"
    }
})