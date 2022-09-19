import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';

export default function Topview() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="ticket" size={60} color="#6495ED" />
        <Text style={styles.Text}>IMS</Text>
        <Text style={styles.text}>desk</Text>
        
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        marginTop:20,
        flexDirection:'row',
        marginHorizontal:20,
       
        
    },
    Text:{
    color:'#6495ED',
    fontSize:40,
    fontWeight:'bold',
    marginTop:14,
    
    },
    text:{
        color:'#6495ED',
        fontSize:40,
        marginTop:14,
       

    },
})