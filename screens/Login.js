import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core'
import { useForm , Controller, useController  } from "react-hook-form";
import Arrow from '../components/Arrow'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const navigation = useNavigation();
const { register, handleSubmit, control, formState:{errors}, } = useForm({
    defaultValues:{
        email:'',
        password:''
    }

});
const onSubmit = data => console.log(data);



goToForgotPassword = () => navigation.navigate('Forgetpwd')


  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <Arrow/>
        <Text style={styles.welcometxt}>Welcome!</Text>
        </View>
       
      <View style={styles.input}>

    
        <TextInput 
        placeholder='Email' 
        style={styles.textInput}
        value={email}
        onChangeText={text=>setEmail(text) }
        />
    

        <TextInput
         placeholder='Password' 
        style={styles.textInput2}
        value={password}
        onChangeText={text=>setPassword(text) }
        secureTextEntry
        />


    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Dashboard')}>
        <Text style={styles.btntext}>Login</Text>
    </TouchableOpacity>

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
    <TouchableOpacity onPress={goToForgotPassword} style={{marginTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'#6495ED'}}>Forgot Password?</Text>
    </TouchableOpacity>
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
        paddingTop:10
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
    }
    });