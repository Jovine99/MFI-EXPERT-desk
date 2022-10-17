// 
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native-gesture-handler'


export default function Open() {
  const [gettickets, setGettickets]= useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
   fetch('http://api.mfiexpert.com/helpdesk/gettickets')
   .then((response)=>response.json())
   .then((response)=>{
     setGettickets(response.gettickets);
     
   })
   .finally(() =>setLoading(false))
  })
  return (
    <View style={styles.container}>
   
     <View style={{height:500, }}>
     <Text style={styles.heading}>Open</Text>
     
    {loading ? (<Text>Loading...</Text> ):(
     
     <FlatList
       keyExtractor={(item, index)=>{return item.TicketNo.toFixed()}}
     renderItem={({item, index}) =>{
      <View style={{height:400}}>
      <Text>{item.TicketNo}</Text>
      </View>
     }}
    
     />
    
    )}
     </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  heading:{
    fontSize:32,
    marginTop:60,
    marginLeft:20,
    fontWeight:'bold'
  }
})