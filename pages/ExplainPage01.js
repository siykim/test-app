import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,TouchableOpacity,Alert } from 'react-native';
import * as Linking from 'expo-linking';
import { StatusBar } from 'expo-status-bar';


  

export default function ExplainPage01({navigation}) {


    const link = () => {
    Linking.openURL("https://endlesspassion.tistory.com/38?category=857478")
    }

    const tip = {
        "idx":9,
        "category":"재테크",
        "title":`다우 존스 지수 (DJIA)`,
        "image": "https://firebasestorage.googleapis.com/v0/b/test-app-81395.appspot.com/o/images%2Fexplain01.jpg?alt=media&token=40e2e4a8-153f-47ee-999f-e07cb9a623d8",
        "desc":`Dow Jones라는 회사에서 미국을 대표하는 우량주식 30개 종목의 시장 가격을 평균하여 산출하는 종합주가지수로, 
        대한민국의 코스피, 코스닥과 같이 미국의 증권시장 동향 및 시세를 알려준다. 기존에는 12개의 종목이었지만, 편입종목이 늘면서 30개가 되었다. 
        
        다우지수는 장점보다 단점이 더 많다고 지적되고 있다. 먼저, 30개의 우량기업을 표본으로 시가총액을 고려하지 않고 단순 주가의 평균값만을 계산하기 때문에, 시장 전체의 흐름을 반영한다고 하기에는 조금 무리가 있다고 판단된다. 또한, 주로 우량 기업에 중점을 두기 때문에, 주가가 큰 회사의 추세에 따라 다우 존스 지수가 결정된다.`
    }

    const popup = () => {
        Alert.alert("팝업!!")
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
                    <TouchableOpacity style={styles.button01} onPress={() => navigation.navigate('Question4')}>
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
