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
  {data.map((gettickets)=>(
    <Text>{gettickets.TicketDate}</Text>
    
  ))}
  {data.map((gettickets)=>(
    <Text>{gettickets.TicketStatus}</Text>
    
  ))}
  {data.map((gettickets)=>(
    <Text>{gettickets.Priority}</Text>
    
  ))}

  

 
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.replace('Dashboard')}
      >
      <AntDesign name="arrowleft" size={30}/>
      </TouchableOpacity>
        <Text style={styles.Theader}>List Of Tickets</Text>
      </View>
      <ScrollView style={styles.sc}>
      <View style={{marginTop:40}}>
       
          <View style={{justifyContent:'space-between', marginHorizontal:20, paddingVertical:10,marginTop:30,paddingHorizontal:10}}>
          </View>

           
            {/* <Text>Priority: {gettickets.Priority}</Text> */}
            {/* <Text>TicketStatus: {gettickets.TicketStatus}</Text> */}
            {loading ? (<Text style={{fontSize:18, justifyContent:'center', alignSelf:'center', marginTop:300,}}>Loading....</Text>) : (
            data.map((gettickets, TicketNo)=>(
           <TouchableOpacity style={{borderColor:'#6495ED',elevation:2, backgroundColor:'#fff', height:100, borderWidth:1, paddingHorizontal:20, paddingTop:20, justifyContent:'space-evenly', borderRadius:20, marginHorizontal:20, paddingVertical:10,marginTop:30,paddingHorizontal:10}} key={TicketNo}
            onPress={()=> navigation.navigate('Viewticket',{TicketNo:gettickets.TicketNo,Subject:gettickets.Subject, TicketStatus:gettickets.TicketStatus, Priority:gettickets.Priority, TicketType:gettickets.TicketType, TicketDate:gettickets.TicketDate})}> 
            <Text style={{fontWeight:'bold'}} key={gettickets.TicketNo}>{gettickets.Subject}</Text>
            <Text style={{fontSize:18}}>TicketType: {gettickets.TicketType}</Text>
            </TouchableOpacity>
           
           
          
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