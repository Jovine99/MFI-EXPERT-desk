import { View, Text , StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';



export default function Tickets({route, navigation}) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true);

  const url = "http://api.mfiexpert.com/helpdesk/gettickets";

  useEffect(() =>{
    fetch(url)
    .then((response) =>response.json())
    .then((json) =>setData(json))
    .catch((error) => console.error(error))
    .finally(() =>setLoading(false))
  }, [])

  

 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.navigate('Tickets')}
      >
      <AntDesign name="arrowleft" size={30} style={styles.arrow}/>
      </TouchableOpacity>
        <Text style={styles.Theader}>View Your Ticket</Text>
      </View>
    
        {/* <Text style={{marginTop:40, marginHorizontal:40, fontSize:30 , color:'#6495ED'}}>View your Ticket Details from our Desk</Text> */}
      
      <ScrollView style={styles.sc}>
    
       
          <View style={{marginHorizontal:20,alignSelf:'center', padding:20, width:'80%', borderColor:'#6495ED', marginTop:60, backgroundColor:'#fff',borderRadius:10, height:400}}>
          <Text style={{fontSize:20, fontWeight:'bold',paddingTop:20, color:'#6495ED'}}>{route.params.Subject}</Text>
        <Text style={{fontSize:18, marginTop:10,paddingTop:10}}>Ticket No: {route.params.TicketNo}</Text>
        <Text style={{fontSize:18, marginTop:10, }}>Priority: {route.params.Priority}</Text>
        <Text style={{fontSize:18, marginTop:10, }}>Ticket Date: {route.params.TicketDate}</Text>
        <Text style={{fontSize:18, marginTop:10, }}>Ticket Status: {route.params.TicketStatus}</Text>
          </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#EAECEE'
},
arrow:{
  marginTop:10,
  color:'#000080'
  // marginHorizontal:20
},
header:{
    marginTop:40,
    // backgroundColor:'#f4f6f6',
    height:50,
    alignSelf:'center',
    width:'85%',
    borderRadius:10,
    // backgroundColor:'#6495ED',
    flexDirection:'row',
     
},
Theader:{
    alignSelf:'center',
    justifyContent:'center',
    paddingTop:10,
    fontSize:28,
    fontWeight:'bold',
    marginHorizontal:60,
    color:'#000080',
    
    // color:'#fff'
},
sc:{
    marginBottom:60,
    marginTop:20
}
})