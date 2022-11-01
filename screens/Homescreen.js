import { View, Text , StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';



export default function Tickets({navigation}) {
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
  
      <ScrollView style={styles.sc}>
      <View style={{marginTop:-40}}>
       
          <View style={{justifyContent:'space-between', marginHorizontal:20, paddingVertical:10,marginTop:30,paddingHorizontal:10}}>
          </View>

           
            {/* <Text>Priority: {gettickets.Priority}</Text> */}
            {/* <Text>TicketStatus: {gettickets.TicketStatus}</Text> */}
            {loading ? (<Text style={{fontSize:18, justifyContent:'center', alignSelf:'center', marginTop:300,}}>Loading....</Text>) : (
            data.slice(0,7).map((gettickets, TicketNo)=>(
           <View style={{borderColor:'#6495ED',elevation:2, backgroundColor:'#fff', height:100, borderWidth:1, paddingHorizontal:20, paddingTop:20, justifyContent:'space-evenly', borderRadius:20, marginHorizontal:20, paddingVertical:10,marginTop:30,paddingHorizontal:10}} key={TicketNo}> 
            <Text style={{fontWeight:'bold'}} key={gettickets.TicketNo}>{gettickets.Subject}</Text>
            <Text style={{fontSize:18}}>TicketType: {gettickets.TicketType}</Text>
            </View>
           
           
          
        ))
       )

       }
       {/* <TouchableOpacity >
        <Text>View List of tickets</Text>
       </TouchableOpacity> */}
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
  marginTop:20,
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
  flexDirection:'row' 
},
Theader:{
  alignSelf:'center',
  justifyContent:'center',
  paddingTop:20,
  fontSize:28,
  fontWeight:'bold',
  marginHorizontal:40,
 
  color:'#000080',
  // color:'#fff'
},
sc:{
    marginBottom:60,
    marginTop:20
}
})