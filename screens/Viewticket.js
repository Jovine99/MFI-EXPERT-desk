import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Viewticket() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.Theader}>MY TICKET</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1,
},
header:{
    marginTop:40,
    backgroundColor:'#f4f6f6',
    height:50,
    elevation:5,
    alignSelf:'center',
    width:'95%',
    borderRadius:10,
    backgroundColor:'#6495ED', 
},
Theader:{
    alignSelf:'center',
    justifyContent:'center',
    paddingTop:10,
    fontSize:28,
    fontWeight:'bold',
    color:'#fff'
}
})