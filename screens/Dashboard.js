import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, View , StyleSheet, Image, SafeAreaView, Footer,TouchableOpacity, Text, Alert, ActivityIndicator} from 'react-native';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { SimpleLineIcons,MaterialIcons, Fontisto, FontAwesome, Ionicons, Feather} from '@expo/vector-icons';

import Newticket from './Newticket';
import Tickets from './Tickets';
import Viewticket from './Viewticket';
import Homescreen from './Homescreen';
import Logout from './Logout';
import About from './About';
import Open from './Open'
import { AuthContext } from '../components/Context'; 
import { useNavigation } from '@react-navigation/core'


const Drawer = createDrawerNavigator();


  const handleAlert = () =>{
    AsyncStorage.setItem("user", JSON.stringify({...userDetails, loggedIn:false}));
    
  }
  
  
  const CustomDrawer = props => {
    const navigation = useNavigation();
    

    return(
      <DrawerContentScrollView {...props}>
         <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginBottom:30
              
            }}
          >
            <Image
              source={require("../assets/logo.png")}
              width={50}
              height={50}
            />
           
          </View>
        <DrawerItemList {...props}/>
        <TouchableOpacity style={{flexDirection:'row', marginTop:350, marginHorizontal:20}} onPress={()=> navigation.replace('Logout')}>
        <SimpleLineIcons name="logout" size={28} color="black"  style={{marginHorizontal:10}} />
          <Text style={{fontSize:22, fontWeight:'bold', marginHorizontal:10}}>Log Out</Text>
        </TouchableOpacity>

      </DrawerContentScrollView>
    )
  }
  

function Dashboard() {
 const [isLoading, setIsLoading] = React.useState(true);
 const [userToken, setUserToken] = React.useState(null);
 
 useEffect(()=>{
setTimeout(() =>{
  setIsLoading(false)
}, 1000)
 }, []);
 if(isLoading){
  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  )
 }
 

  return (
  
      <Drawer.Navigator initialRouteName="Homescreen"
     screenOptions={{
      drawerStyle: {
      //   backgroundColor: '#c6cbef',
        width: 300,
        paddingTop:50,
        justifyContent:'space-between'
      },
     
    }}
     drawerContent={(props) => <CustomDrawer {...props}/> }
      
      
     >
      
      <Drawer.Screen
        name="Homescreen"
        component={Homescreen}
        options={{ drawerLabel: 'Homescreen',
        drawerLabelStyle:{
            fontSize:22,  
        },
        drawerIcon: ({focused, size}) => (
            <MaterialIcons name="home" size={30} color="black" style={{marginHorizontal:10}}/>
         ),
        }}
        
      />
      
     
      <Drawer.Screen
        name="Newticket"
        component={Newticket}
        options={{ drawerLabel: 'Add New ticket',
        headerShown:false,
        drawerLabelStyle:{
            fontSize:22,
            marginHorizontal:10
        },
        drawerIcon: ({focused, size}) => (
            <Fontisto name="ticket-alt" size={30} color="black" style={{marginHorizontal:10}} />
         ),
       
    }}
     
      />
      
      
      <Drawer.Screen
      
        name="Tickets"
        component={Tickets}
        options={{ 
          headerShown: false,
            drawerLabel: 'List of Tickets',
            drawerLabelStyle:{
                fontSize:22,   
                marginHorizontal:10
            },
            drawerIcon: ({focused, size}) => (
                <FontAwesome name="list-alt" size={24} color="black"  style={{marginHorizontal:10}} />
             ),
             
            
        }}
      />
  
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerLabel: 'About Us',
        headerShown:false,
        drawerLabelStyle:{
            fontSize:22,
            marginHorizontal:10
        },
        drawerIcon: ({focused, size}) => (
          <Feather name="info" size={30} color="black"  style={{marginHorizontal:10}} />
         )
    }}
     
      />
       
    </Drawer.Navigator>
  
   
  
  );
}
export default Dashboard

// const styles= StyleSheet.create({
//     screens:{
//         marginHorizontal:20,
//         fontSize:20
//     }
// })