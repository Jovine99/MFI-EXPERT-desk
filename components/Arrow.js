import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Arrow({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow}
      >
      <AntDesign name="arrowleft" size={30}/>
      </TouchableOpacity>
    </View>
  )
}
const styles= StyleSheet.create({
    
//    container:{
//     flex:1,
//    }
arrow:{
    marginTop:40,
    marginHorizontal:20
}
})