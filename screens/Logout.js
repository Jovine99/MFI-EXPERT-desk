import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Logout({navigation}) {
  return (
    // <View>
    //   <TouchableOpacity onPress={()=>{
            
    //         navigation.replace("Login");
    //     }} >
    //     <Text>LOGOUT</Text>
    //   </TouchableOpacity>
    // </View>
    Alert.alert(
        "Logout",
       "Are you sure? You want to logout?",
        [
         {
           text: "Cancel",
          onPress: () => {
              return null;
            },
         },
          {
           text: "Confirm",
          onPress: () => {
            //  AsyncStorage.clear();
             navigation.replace("Login");
           },
         },
       ],
       { cancelable: false }
      )
  )
}