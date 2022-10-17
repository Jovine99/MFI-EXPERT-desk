import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
 
import Swiper from 'react-native-swiper'
import { Ionicons, FontAwesome, Zocial} from '@expo/vector-icons';


export default function About() {
  return (
    <View style={styles.container}>
   
      <View style={styles.imageview}>
      <View style={styles.headline}>
     <Text style={{fontSize:40, fontWeight:'bold', textTransform:'uppercase', color:'#000080'}}>About Us</Text>
      </View>
        
        
        <Image source={require('../assets/about.png')} style={styles.image}/>
        
     
        
      </View>
      <Swiper style={styles.wrapper} showsButtons={false}  autoplayTimeout={3}>
        <ScrollView style={{flex:1, marginVertical:50}}>
        <View style={styles.slide1}>
          <Text style={styles.text}>MFI EXPERT DESK is a software developed by IMS GURU</Text>
          <View style={styles.content}>
          <Text style={styles.texts}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <Text style={styles.texts}> vehicula et libero. Aenean ac libero mattis, suscipit diam non, </Text>
          <Text style={styles.texts}>Donec molestie imperdiet urna eget eleifend. Proin ac porttitor dolor. </Text>
          <Text style={styles.texts}> Praesent aliquet sapien vitae eros imperdiet, id luctus mi dapibus</Text>
          <Text style={styles.texts}>Sed pulvinar mollis iaculis. Suspendisse potenti. Nulla facilisi. </Text>
          <Text style={styles.texts}>Maecenas sagittis luctus cursus. </Text>
          <View style={styles.services}>
            <Text style={{fontSize:30, color:'#fff'}}>
            Why Choose Us?
            </Text>
            <View style={{backgroundColor:'#fff', height:220, width:'96%', marginTop:20}}>
                <Text style={{fontSize:22, paddingTop:20, marginLeft:20, color:'#000080', }}>Anywhere Access</Text>
                <Text style={{paddingLeft:20,fontSize:18, paddingTop:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={{paddingLeft:20,fontSize:18}}>vehicula et libero. Aenean ac libero mattis, suscipit diam non,</Text>
                <Text style={{paddingLeft:20,fontSize:18}}>Praesent aliquet sapien vitae eros imperdiet, id luctus mi dapibus</Text>
                <Text style={{paddingLeft:20,fontSize:18}}>Praesent aliquet sapien vitae eros imperdiet, id luctus mi dapibus</Text>
                
            </View>
          
            
          </View>
          
          </View>
        
        </View>
        </ScrollView>
        <View style={styles.slide2}>
          <Text style={styles.text}>Our Services</Text>
          <View style={{
        justifyContent:'space-evenly', marginTop:20, alignSelf:'center', width:'80%'}}>
           <View style={{backgroundColor:'#fff', height:200, borderRadius:5,paddingHorizontal:20 }}>
            <Text style={{fontSize:22,textTransform:'uppercase', alignSelf:'center', paddingTop:20, fontWeight:'bold',color:'#000080'}}>Assign New Ticket</Text>
           <Text style={{fontSize:18, paddingTop:10, paddingHorizontal:10}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit
           </Text>
           <Text style={{fontSize:18, paddingHorizontal:10}}>Morbi eget lectus elit. In nunc dui, feugiat in tempus sed, </Text>
           <Text style={{fontSize:18, paddingHorizontal:10}}>tincidunt et ipsum. Nunc ac leo luctus purus rutrum auctor. </Text>
           </View>
            <View style={{backgroundColor:'#fff', height:200, borderRadius:5,paddingHorizontal:20, marginTop:20 }}>
                <Text style={{fontSize:22,textTransform:'uppercase', alignSelf:'center', paddingTop:20, fontWeight:'bold',color:'#000080'}}>List of Tickets</Text>
            <Text style={{fontSize:18, paddingTop:10, paddingHorizontal:10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
           </Text>
           <Text style={{fontSize:18, paddingHorizontal:10}}>Morbi eget lectus elit. In nunc dui, feugiat in tempus sed,</Text>
           <Text style={{fontSize:18, paddingHorizontal:10}}>tincidunt et ipsum. Nunc ac leo luctus purus rutrum auctor. </Text>
            </View>
           </View>
        </View>
        <View style={styles.slide3}>
          <Text style={{ fontSize: 30,fontWeight: 'bold',marginTop:20,marginHorizontal:20,textTransform:'uppercase', }}>Contact Us</Text>
          <Text style={{fontSize:24, color:'#92BBD9', fontWeight:'bold', alignSelf:'center', marginTop:20}}>_Get in Touch With Us_</Text>
            <View style={styles.location}>
          <View style={styles.address}>
            <Ionicons name="ios-location-sharp" size={40} color="#fff" style={{alignSelf:'center', paddingTop:15}} />
            </View>
            <View>
                <Text style={{fontSize:24, marginTop:10, paddingLeft:10,color:'#000080', fontWeight:'bold'}}>Location</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>6th, Floor, Maruti Heights</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>Langata, Nairobi</Text>
            </View>
          </View>
          <View style={styles.location}>
            <View style={styles.address}>
            <FontAwesome name="phone" size={40} color="#fff" style={{alignSelf:'center', paddingTop:15}}/>
            </View>
            <View>
                <Text style={{fontSize:24, marginTop:10, paddingLeft:10,color:'#000080', fontWeight:'bold'}}>Phone</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>+254 722 55 44 55</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>+254 705 96 79 18</Text>
            </View>
          </View>
          <View style={styles.location}>
            <View style={styles.address}>
            <Zocial name="email" size={30} color="#fff" style={{alignSelf:'center', paddingTop:15}} />
            </View>
            <View>
                <Text style={{fontSize:24, marginTop:10, paddingLeft:10,color:'#000080', fontWeight:'bold'}}>Email</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>info@imsguru.com</Text>
                <Text style={{fontSize:18, paddingLeft:10}}>support@imsguru.com</Text>
            </View>
          </View>
        </View>
      </Swiper>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex:1
},
imageview:{
    marginTop:40,
    marginHorizontal:2,
    height:300
},
image:{
    height:250,
    width:'100%',
    marginTop:20,
    opacity:0.3
},
headline:{
    position:'absolute',
    top:100,
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold'
},
wrapper: {},
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    marginBottom:40
    
   
    
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
    
  },
  slide3: {
    flex: 1,
    // backgroundColor: '#92BBD9'
    backgroundColor: '#f2f2f2'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:20,
    marginHorizontal:20,
    textTransform:'uppercase'
  },
  content:{
    marginHorizontal:20,
    marginTop:20,
    flex:1
 
  },
  texts:{
    fontSize:18,
    letterSpacing:1.5
    
  },
  services:{
    marginTop:20,
    marginHorizontal:20
  },
  location:{
    flexDirection:'row',
    marginTop:40,
    marginHorizontal:30
  },
  address:{
    backgroundColor: '#92BBD9',
    width:'25%',
    height:80,
    borderRadius:10
  }

})