import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ActivityIndicator, ProgressViewIOSComponent, Alert, Keyboard } from 'react-native'
import React, {useState} from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'

import { useForm , Controller, useController  } from "react-hook-form";
import Arrow from '../components/Arrow'
import Loader from '../components/Loader';



const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [Errors, setError] = React.useState(false);
    const [errorname, setErrorName] = React.useState("");

const navigation = useNavigation();
const {handleSubmit, control, formState:{errors}, } = useForm({
    defaultValues:{
        email:'',
        password:''
    }
});
  // This function will be triggered when the button is pressed
  const [loading, setLoading] = useState(false);
  const login = () => {
   
    Keyboard.dismiss();
    setLoading(true);
    setTimeout(async () => {
        setLoading(false);
        let userData = await AsyncStorage.getItem('user')
        if(userData) {
            userData = JSON.parse(userData);
            if(email == userData.Email && password == userData.Password){
                AsyncStorage.setItem("user", JSON.stringify({...userData, loggedIn:true})
                );
                navigation.navigate('Homescreen')
            }
            else{
                Alert.alert("Error", "Invalid details")
            }
        }else{
            Alert.alert("Error", "User does not exist")
        }
    },3000)
    // async storeToken(user) {
    //     try {
    //        await AsyncStorage.setItem("userData", JSON.stringify(user));
    //     } catch (error) {
    //       console.log("Something went wrong", error);
    //     }
    //   }
    //   async getToken(user) {
    //     try {
    //       let userData = await AsyncStorage.getItem("userData");
    //       let data = JSON.parse(userData);
    //       console.log(data);
    //     } catch (error) {
    //       console.log("Something went wrong", error);
    //     }
    //   }
    

} 

   
 
  
 
//   goToForgotPassword = () => navigation.navigate('Forgetpwd')


  return (
    
    <View style={styles.container}>
        <Loader visible={loading}/>
        <View style={styles.top}>
        <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.replace('Signup')}
      >
      <AntDesign name="arrowleft" size={30}/>
      </TouchableOpacity>
        <Text style={styles.welcometxt}>Welcome!</Text>
        </View>
       
      <View style={styles.input}>
      <Controller
           control={control}
           name="email"
           rules={{required:'Email is required', message:'Email is required'}}
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textInput2, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
        //    secureTextEntry={true}
           onChangeText={onChange}
           onBlur={onBlur}
            placeholder={'Email'} />
            {error && <Text style={{color:'red', fontSize:14, paddingBottom:15}}>{error.message ||'error'}</Text>}
          
          </>
          } 
         />

        <Controller
           control={control}
           name="password"
           rules={{required:'Password is required', message:'Password is required'}}
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textInput2, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
        //    secureTextEntry={true}
           onChangeText={onChange}
           onBlur={onBlur}
            placeholder={'Password'} />
            {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
          
          </>
          } 
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit(login)}>
        <Text style={styles.btntext}>Login</Text>
    </TouchableOpacity >
      


    

    {/* <View style={styles.option}>
    <Text style={styles.optiontext}>Don't have an account?
    </Text>
    <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
        <Text style={styles.link}>Sign up</Text>
    </TouchableOpacity>
    </View> */}
    
  
    <TouchableOpacity style={styles.buttonsignup} onPress={()=> navigation.replace('Signup')} >
        <Text style={styles.signuptxt}>Signup</Text>
    </TouchableOpacity>
    {/*<TouchableOpacity  style={{marginTop:20}} onPress={goToForgotPassword}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#6495ED'}}>Forgot Password?</Text>
    </TouchableOpacity> */}
    <Text style={styles.linktext}>Or Login with</Text>
    <View style={styles.social}>
    <TouchableOpacity onPress={()=> navigation.navigate('Drawer')}>
    <Entypo name="facebook" size={30} color="#6495ED" style={styles.facebook} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Entypo name="twitter" size={36} color="#6495ED" style={styles.twitter} />
    </TouchableOpacity>
   <TouchableOpacity>
   <AntDesign name="linkedin-square" size={30} color="#6495ED"  style={styles.linkdn}/>
   </TouchableOpacity>
    </View>
    
  
     </View>
    </View>
  )
}
export default Login
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        height:250,
        backgroundColor:'#6495ED',
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        flexDirection:'row' 
    
    },
    welcometxt:{
        color:'#fff',
        fontSize:32,
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center',
        marginHorizontal:60
        // marginTop:80
    },
    input:{
        // marginTop:80,
         marginTop:-40,
         paddingTop:50,
         justifyContent:'center', 
         alignItems:'center',
         borderTopLeftRadius:40,
         backgroundColor:'#f2f2f2',
         borderTopRightRadius:40,
         
    },
    textInput:{
        borderWidth:0.5, 
        width:'80%',
        height:50,
        borderColor:'#f2f2f2',
        paddingHorizontal:20,
        fontSize:20, 
         borderRadius:20,
        backgroundColor:'#E5E8E8 ',
        borderColor:'#6495ED'
    },
    textInput2:{
        borderWidth:0.5, 
        width:'80%',
        height:50,
        borderColor:'#f2f2f2',
        paddingHorizontal:20,
        fontSize:20, 
         borderRadius:20,
        marginTop:30,
        borderColor:'#6495ED'
    },
    button:{
        marginTop:30,
        backgroundColor:'#6495ED', 
        width:'80%', 
        height:50, 
        borderRadius:20,
        elevation:3

    },
    btntext:{
        color:'#fff',
         fontSize:24, 
        fontWeight:'bold',
        alignSelf:'center',
        paddingTop:10,
        position:'absolute'
    },
    buttonsignup:{
        marginTop:30,
        borderColor:'#6495ED', 
        borderWidth:1.5,
        width:'80%', 
        height:50, 
        borderRadius:20,
       
    },
    signuptxt:{
        color:'#6495ED',
        fontSize:24, 
       fontWeight:'bold',
       alignSelf:'center',
       paddingTop:10
    },
    // option:{
    //     flexDirection:'row', 
    //     marginTop:30
    // },
    // optiontext:{
    //     fontSize:20
    // },
    link:{
        fontSize:22,
        color:'#6495ED',
        fontWeight:'bold'
    },
    linktext:{
        marginTop:30, 
        fontSize:18, 
        fontWeight:'bold'
    },
    social:{
        flexDirection:'row', 
        marginTop:40, 
        // padding:20
        justifyContent:'space-evenly'
    },
    facebook:{
        paddingRight:80
    },
    twitter:{
        paddingRight:40
    },
    linkdn:{
        paddingLeft:40
    },
    arrow:{
        marginTop:40,
        marginHorizontal:20
    },
    });