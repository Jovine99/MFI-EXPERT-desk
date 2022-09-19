import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

export default function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.Imageview}>
        <Image source={ require('../assets/Hello.png')} style={styles.img}/>
      </View>
      <View style={styles.content}>
        <Text style={styles.maintext}>WELCOME TO OUR PLATFORM</Text>
        <Text style={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing eli</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Signup')}>
        <Text style={styles.btntext}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1
},
ImageView:{
    height:500,
    marginTop:40
},
img:{
    marginTop:40,
    height:400,
    width:'95%',
    marginHorizontal:10,
    borderBottomLeftRadius:200,
    borderBottomRightRadius:200,
    backgroundColor:'#f2f2f2'
    
},
content:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:70
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
    color:'#808B96 ',
 
    
},
text:{
    fontSize:18,
    marginTop:2,
    marginHorizontal:10,
    color:'#808B96 '
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