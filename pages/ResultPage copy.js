import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import resultData from '../resultData';
import Dash from 'react-native-dash';
import { Share } from 'react-native';


export default function ResultPage( {navigation, route} ){
  
  const share = () => {
    Share.share({
      message:`${resultData[0].name}
       ${resultData[0].description} 
       ${resultData[0].solution}`
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

  useEffect(() => {
    const { name, image, subtitle, type, per, description, solution } = route.params;
    setState({
      name: name,
      image: image,
      subtitle: subtitle,
      type: type,
      per: per,
      description: description,
      solution: solution
    })
  }, [])

  return (
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