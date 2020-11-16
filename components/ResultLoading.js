import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { CirclesLoader, TextLoader, EatBeanLoader, ColorDotsLoader, LineDotsLoader } from 'react-native-indicator';

export default function ResultLoading(){

    return(
    <View style={styles.container}>
      <TextLoader text="계산중입니다" textStyle={styles.textStyle} />
      {/* <CirclesLoader color="1590FF" size={80} dotRadius={15} /> */}
      <EatBeanLoader color="1590FF" size={80} />
      {/* <ColorDotsLoader size={15} betweenSpace={7} color="#ff4500" color2="#ffd700" color3="#9acd32" /> */}
      {/* <LineDotsLoader size={12} dotsNumber={5} betweenSpace={6} /> */}
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
    },
    textStyle: {
      color: '#1590FF',
      fontSize: 25,
      fontWeight: '700',
      marginBottom: 30
    }

})