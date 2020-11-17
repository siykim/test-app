import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';


export default function ExplainPage02({navigation}) {


    const link = () => {
    Linking.openURL("https://endlesspassion.tistory.com/38?category=857478")
    }

    const tip = {
        "idx":9,
        "category":"재테크",
        "title":`S&P 500 (Standard & Poor)`,
        "image": "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fexplain01.jpg?alt=media&token=40e2e4a8-153f-47ee-999f-e07cb9a623d8",
        "desc":`세계적인 신용평가기관인 미국의 Standard and Poor (S&P)에서 작성된 것으로, 현재 가장 많이 사용되고 있는 대표적인 미국 종합주가지수이다. 지수 산정에 포함되는 종목수는 500개로, 다우존스 지수에 사용되는 종목과 비슷한 우량기업주지만, 종목수를 비교하면 월등히 많다. 구체적인 산출방식은 비교시점의 주가에 상장주식수를 곱한 전체 시가총액과 기준시점의 시가총액을 대비하여 계산한다.
        
        500여 개의 전종목을 대상으로 시가총액식 지수를 산출하기 때문에, 시장 전체의 증시 동향 파악에 용이하고, 시장구조에 적절히 대응할 수 있다는 장점이 있다. 반대로, 종목수가 많기 때문에, 실제 투자자가 느끼는 주가의 변동추이와 지수 움직임에서 큰 차이를 느낄 수 있다는 단점 또한 존재한다. 
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
                    <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('Question7')}>
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
