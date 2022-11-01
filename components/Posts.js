import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';


 function Posts({posts, loading, navigation, route, }) {
  if (loading){
    return <Text>Loading...</Text>
  }
  return (
    <View>
       <View style={styles.header}>
      <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.replace('Dashboard')}
      >
      <AntDesign name="arrowleft" size={30}/>
      </TouchableOpacity>
        <Text style={styles.Theader}>List Of Tickets</Text>
      </View>
      <ScrollView vertical={true}>
      <View >
    {posts.map(gettickets => (
      <TouchableOpacity
      onPress={()=> navigation.navigate('Viewticket',{TicketNo:gettickets.TicketNo,Subject:gettickets.Subject, TicketStatus:gettickets.TicketStatus, Priority:gettickets.Priority, TicketType:gettickets.TicketType, TicketDate:gettickets.TicketDate})}>
        <Text key={gettickets.TicketNo}  style={{fontWeight:'bold'}} >{gettickets.Subject}</Text>
        <Text>{gettickets.TicketNo}</Text>
      </TouchableOpacity>
    ))}
    </View>
      </ScrollView>
   
    </View>
  )
}
export default Posts
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  sc:{
    marginBottom:60,
    marginTop:20,


},
contentview:{
  // justifyContent:'space-between', 
  // marginHorizontal:20, 
  // paddingVertical:10,
  // marginTop:30,
  // paddingHorizontal:10
  marginTop:40,
  width:'95%',
  marginHorizontal:10
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
})