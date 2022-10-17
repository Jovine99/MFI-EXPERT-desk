import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';


export default function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Imageview}>
        <View style={{marginTop:40, marginHorizontal:30}}>
          <Image source={require('../assets/logo.png')}/>
        </View>
        <Image source={ require('../assets/g.png')} style={styles.img}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.maintext}>WELCOME TO MFI EXPERT DESK</Text>
        <Text style={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
        <Text style={styles.text1}>Lorem ipsum dolor sit amet, </Text>
        <Text style={styles.text1}>Lorem consectetur . </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.replace('Signup')}>
        <Text style={styles.btntext}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#ffff'
},
ImageView:{
    height:500,
    marginTop:40,
   
},
img:{
    marginTop:40,
    height:400,
    width:'90%',
    marginHorizontal:10,
    borderBottomLeftRadius:100,
    borderBottomRightRadius:100,
    alignSelf:'center'
    
},
content:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:40
},
maintext:{
    fontSize:28,
    fontWeight:'bold',
    marginHorizontal:20,
    color:'#000080',
    

},
Text:{
    marginTop:20,
    fontSize:18,
    marginHorizontal:10,
    color:'#808B9',
 
    
},
text:{
    fontSize:18,
    marginTop:20,
    marginHorizontal:10,
    color:'#808B96 '
},
text1:{
  fontSize:18,
  marginTop:4,
    marginHorizontal:10,
    alignSelf:'center',
    // color:'#808B96'

},
button:{
    marginTop:40,
    backgroundColor:'#6495ED', 
    width:'50%', 
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