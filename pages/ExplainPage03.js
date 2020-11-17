import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';


export default function ExplainPage03({navigation}) {


    const link = () => {
    Linking.openURL("https://endlesspassion.tistory.com/38?category=857478")
    }

    const tip = {
        "idx":9,
        "category":"재테크",
        "title":`나스닥 (Nasdaq)`,
        "image": "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fexplain01.jpg?alt=media&token=40e2e4a8-153f-47ee-999f-e07cb9a623d8",
        "desc":`나스닥은 증권거래소의 이름으로, 이 증권거래소에서 상장되는 모든 기업 종목을 대상으로 시가총액에 따라 가중치를 부여해 산출되는 지수이다. 주로 미국 주식시장의 기술주 흐름을 파악하는 데 사용되는 대표적인 지수이다. 우리나라의 코스닥과 같은 장외시장으로 벤처기업, 중소기업, 그리고 글로벌 IT 기업들까지 대략 3,000여 개의 기업들이 상장되어 있다.
  
        
        나스닥의 특이한 점은 중개인의 호가에 의한 매매가 아닌 컴퓨터에 의해 시세가 결정된다. 예를 들어, 다수의 매도호가와 매수호가가 있다면, 그 중 가장 낮은 매도 가격과 가장 높은 매수 가격을 컴퓨터가 자동적으로 결정하여 거래를 성사시킨다. 다우존스 지수와 비교하여 상장종목 전체를 대상으로 지수가 산출되므로 주식 시장 전체의 흐름 파악이 보다 수월하다.하지만 시가총액에 기반한 주가지수이므로, 애플이나 구글 같은 대형 IT 기업들의 영향을 많이 받는다. 
        `
    }

    return ( 
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다. 
        <ScrollView style={styles.container}>
          <StatusBar style="light" /> 
            <Image style={styles.image} source={{uri:tip.image}}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tip.title}</Text>
                <Text style={styles.desc}>{tip.desc}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>link()}>
                   <Text style={styles.buttonText}>출처: [EndlessPassion]</Text>
                </TouchableOpacity>

                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button01} onPress={() => navigation.goBack()}>
                       <Text style={styles.buttonText01}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('Question10')}>
                       <Text style={styles.buttonText01}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#000"
    },
    image:{
        height:300,
        margin:10,
        marginTop:40,
        borderRadius:20
    },
    textContainer:{
        padding:20,
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontSize:23,
        fontWeight:'700',
        color:"#E53935"
    },
    desc:{
        marginTop:30,
        color:"#eee",
        textAlign:"center",
        fontSize: 14
    },
    button:{
        width:200,
        marginLeft: 20,
        marginRight: 20,
        padding:20,
        borderWidth:1,
        borderColor:'black',
        borderRadius:7
    },
    buttonText:{
        color:'#1590FF',
        textAlign:'center',
        borderColor: "#1590FF",
        borderBottomWidth: 1
    },
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    button01:{
      backgroundColor:"black",
      borderColor: "#E53935",
      borderWidth: 1,
      borderRadius:10,
      padding: 10,
      paddingLeft: 40,
      paddingRight: 40,
      marginLeft: 20,
      marginRight: 20
    },
    buttonText01:{
      color:'#E53935',
      textAlign:'center',
      borderColor: "red"
  }
})
