import React,{useEffect,useState} from 'react';
import {View,Text,ImageBackground,ScrollView,StyleSheet, TouchableOpacity, ProgressBarAndroid} from 'react-native'
import Loading from '../components/Loading';
import {firebase_db} from "../firebaseConfig";
import Constants from 'expo-constants';

const Question = ( {navigation} ) => {

    const image = { uri: "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fback4.jpg?alt=media&token=a7ebee2a-9ad4-4a5c-877b-07406f8f777b" };
    const [questionState, setQuestionState] = useState();
    const [ready, setReady] = useState(true);


    useEffect(() => {

        firebase_db.ref('/question').once('value').then((snapshot) => {
          console.log("파이어베이스에서 Q4 데이터 입수")
          let question =snapshot.val();
          setQuestionState(question[3])
          setReady(false)
        })
    }, [])

        const user_id = Constants.installationId;
        const goResult = (data) => {

          const new_history = {
            idx: data.idx,
            question: data.answer_title
          }

          if (data.idx == 1) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question5')
          } else if (data.idx == 2) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question5')
          } else if (data.idx == 3) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question5')
          } else if (data.idx == 4) {
            firebase_db.ref('history/'+ user_id +'/' + questionState.idx).set(new_history)
            navigation.navigate('Question5')
          } 
        }

    
    return ready ? <Loading/> : (
     
        <View style={styles.container}>
            
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
            <View style={styles.answerList}>
                <ScrollView>
                    {questionState.answer.map((data,i)=>{
                        return (
                        <TouchableOpacity key={i} style={styles.answerView} onPress={()=> goResult(data)}>
                            <Text style={styles.answerText} >{data.idx + ') ' + data.answer_title}</Text>
                        </TouchableOpacity>)
                    })}
                </ScrollView>
                <ProgressBarAndroid
                  style={styles.progressBar}
                  styleAttr="Horizontal"
                  color="#2196F3"
                  indeterminate={false}
                  progress={0.4}
                />
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button02} onPress={() => navigation.goBack()}>
                       <Text style={styles.buttonText}>Back</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.popToTop()}>
                       <Text style={styles.buttonText}>Home</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.button02} onPress={() => navigation.navigate('Question5')}>
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