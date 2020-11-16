import React,{useEffect,useState} from 'react';
import {View,Text,Image,ScrollView,StyleSheet, Button, TouchableOpacity, ProgressBarAndroid} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import questionnaire from '../questionData';

const Question = ( {navigation} ) => {

    // const [questionState, setQuestionState] = useState({
    //   id: 2,
    //   previousId: 1,
    //   nextId: 3,
    //   type: 'question',
    //   content: {
    //     title: 'Question 1',
    //     question: '현재 수중에 1000만원이 있다. 최고의 수익률을 낼 수 있는 방법은?',
    //     options: [
    //       { id: 1, title: '스캘핑- 초단위 거래로 1~3% 띄기를 하며 회전율을 높인다.' },
    //       { id: 2, title: '단타- 최대 1주일을 예상하며, 10%이상을 목표로 한다.' },
    //       { id: 3, title: '스윙- 최대 3개월까지 보유하며, 저점에 있는 종목을 골라 30% 이상의 수익을 목표로 한다.' },
    //       { id: 4, title: '장투- 미래에 유망한 종목을 타겟으로, 최소 6개월 이상 보유하며 수익을 극대화한다.' },
    //     ],
    //   },
    // });

    const [questionState, setQuestionState] = useState(questionnaire[9])
    
    return (
     
        <View style={styles.container}>
            
            {/* <Image source={{uri:questionState.image}} resizeMode="cover" style={styles.questionImage}/> */}
            <Text style={styles.questionTitle}>{questionState.content.title}</Text>
            <Text style={styles.question}>{questionState.content.question}</Text>
            <View style={styles.answerList}>
                <ScrollView>
                    {/* 문제에 딸린 답들을 나열 */}
                    {questionState.content.options.map((a,i)=>{
                        //결과 화면에선 문제, 문제 이미지, 답, 해설 그리고 히스토리에 저장 할 문제 번호와 답안 번호를 goResult 함수에 넘겨줍니다.
                        return (
                        <TouchableOpacity key={i} style={styles.answerView}>
                            <Text style={styles.answerText} >{a.id + ') ' + a.title}</Text>
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
                       <Text style={styles.buttonText}>결과 보기</Text>
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