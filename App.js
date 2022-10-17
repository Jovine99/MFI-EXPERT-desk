import 'react-native-gesture-handler';
import React, {useState} from 'react'

import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './screens/Signup'
import Login from './screens/Login'
import Onboarding from './screens/Onboarding';
import Drawer from './screens/Drawer'
import Open from './screens/Open'
import Homescreen from './screens/Homescreen';
import Newticket from './screens/Newticket';
import Viewticket from './screens/Viewticket';
import Tickets from './screens/Tickets';
// import Menu from './screens/Menu'
import Dashboard from './screens/Dashboard'
import Logout from './screens/Logout'
import Forgetpwd from './screens/Forgetpwd'
import Resetpwd from './screens/Resetpwd'
import About from './screens/About'

import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from './components/Loader';

const Stack = createStackNavigator();


export default function App() {
  
  const [initialRouteName, setInitialRouteName] = React.useState('');
  React.useEffect(() =>{
    setTimeout(authUser, 2000)
  }, [])
  const authUser = async ()=>{
    try{
      let userData= await AsyncStorage.getItem('user')
      if(userData){
        userData = JSON.parse(userData);
        if(userData?.loggedIn){
        setInitialRouteName('Dashboard')
        }
        else{
          setInitialRouteName('Login')
        }
      }
      else{
        setInitialRouteName('Signup')
      }
    }
    catch (error){
      setInitialRouteName('Signup')
    }
  }; 
  return (
   
<NavigationContainer>
    {initialRouteName == '' ? ( <Loader visible={true}/> ) : (
     <>
     <Stack.Navigator initialRouteName='Onboarding'>
    
       <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
       <Stack.Screen options={{headerShown: false}}name="Signup" component={Signup} />
       <Stack.Screen options={{headerShown: false}}name="Onboarding" component={Onboarding} />
       <Stack.Screen options={{headerShown: false}}name="Drawer" component={Drawer} />
       <Stack.Screen options={{headerShown: false}}name="Open" component={Open} />
       <Stack.Screen options={{headerShown: false}}name="Homescreen" component={Homescreen} />
       <Stack.Screen options={{headerShown: false}}name="Newticket" component={Newticket} />
       <Stack.Screen options={{headerShown: false}}name="Viewticket" component={Viewticket} />
       <Stack.Screen options={{headerShown: false}}name="Tickets" component={Tickets} />
       {/* <Stack.Screen options={{headerShown: false}}name="Menu" component={Menu} /> */}
       <Stack.Screen options={{headerShown: false}}name="Dashboard" component={Dashboard} />
       <Stack.Screen options={{headerShown: false}}name="Logout" component={Logout} />
       <Stack.Screen options={{headerShown: false}}name="Forgetpwd" component={Forgetpwd} />
       <Stack.Screen options={{headerShown: false}}name="Resetpwd" component={Resetpwd} />
       <Stack.Screen options={{headerShown: false}}name="About" component={About} />
     </Stack.Navigator>
     </>)
     }
  </NavigationContainer>
   
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
