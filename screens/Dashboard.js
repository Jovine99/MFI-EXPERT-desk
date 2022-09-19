import React from 'react'

import { Button, View , StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons,MaterialIcons, Fontisto, FontAwesome, Ionicons   } from '@expo/vector-icons';
import Newticket from './Newticket';
import Tickets from './Tickets';
import Viewticket from './Viewticket';
import Homescreen from './Homescreen';
import Logout from './Logout';

const Drawer = createDrawerNavigator();
function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
        <SimpleLineIcons name="logout" size={24} color="black" />
      </View>
    );
  }
  

function Dashboard() {
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
        name="Viewticket"
        component={Viewticket}
        options={{ drawerLabel: 'View ticket',
        drawerLabelStyle:{
            fontSize:22,
            marginHorizontal:10
        },
        drawerIcon: ({focused, size}) => (
            <MaterialIcons name="preview" size={30} color="black"  style={{marginHorizontal:10}}/>
         ),
    }}
      />
      <Drawer.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{ drawerLabel: 'Notifications',
        drawerLabelStyle:{
            fontSize:22,
            marginHorizontal:10
        },
        drawerIcon: ({focused, size}) => (
            <Ionicons name="ios-notifications-outline" size={30} color="black"  style={{marginHorizontal:10}} />
         )
    }}
     
      />
       <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{ drawerLabel: "Log Out",
        drawerLabelStyle:{
            fontSize:22,
            marginHorizontal:10,   
        },
        drawerIcon: ({focused, size}) => (
            <SimpleLineIcons name="logout" size={24} color="black"  style={{marginHorizontal:10}} />
         ),
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