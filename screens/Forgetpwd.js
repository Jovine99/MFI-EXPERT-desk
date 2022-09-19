import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'



function Forgetpwd() {
  const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1}}>
        <View style={styles.miniview}>
        <MaterialCommunityIcons name="key" size={36} color="#6495ED" style={{alignSelf:'center'}} />
        </View>
        <View style={styles.main}>
        <Text style={styles.headline}>Please enter your email address to reset your password</Text>
        <View style={styles.input}>
        <Feather name="mail" size={24} color="#999" style={{paddingHorizontal:20}} />
        <TextInput style={styles.textinput}
        placeholder='Email Address'
        />
        </View>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Resetpwd')}>
        <Text style={styles.btntext}>Submit</Text>
      </TouchableOpacity>
        </View>

        
      </View>
    )
  
}

export default Forgetpwd
const styles = StyleSheet.create({
  miniview:{
    marginTop:80,
    height:100,
    width:100,
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:100,
    backgroundColor:'#D4E6F1', 
  },
  main:{
    marginTop:30,
    marginHorizontal:20
  },
  headline:{
    fontSize:18,
    justifyContent:'space-between'
  },
  input:{
    flexDirection:'row',
    marginTop:20,
    alignSelf:'center',
    alignItems:'center',
    marginHorizontal:10,
    borderWidth:0.8,
    height:50,
    borderRadius:10,
    borderColor:'#6495ED',
    width:'80%'
  },
  textinput:{
    fontSize:18,

  },
  button:{
    marginTop:40,
    backgroundColor:'#6495ED', 
    width:'80%', 
    height:50, 
    borderRadius:10,
    alignSelf:'center',
    elevation:3
},
btntext:{
    color:'#fff',
     fontSize:24, 
    fontWeight:'bold',
    alignSelf:'center',
    paddingTop:10
},
})