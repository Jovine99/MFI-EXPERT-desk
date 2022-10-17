import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ActivityIndicator,  } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useForm , Controller, useController  } from "react-hook-form";
import Arrow from '../components/Arrow'
import Loader from '../components/Loader';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    const {control,  handleSubmit, formState:{errors},} = useForm({
        defaultValues:{
            userName:'',
            email:'',
            password:'',
        }
    });
    
    
    const onSubmit = (e) => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
            try{
                AsyncStorage.setItem("user", JSON.stringify(name, email, password));
                navigation.navigate('Dashboard')
            }
            catch (error){
                Alert.alert("Error", "Something went wrong")
            }
        }, 3000)

            
        }
        
       
    
    const [loading, setLoading] = React.useState(false)

    const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
        <Loader visible={loading}/>
        <View style={styles.top}>
            <Text style={styles.welcometxt}>Welcome!</Text>
        </View>
     <View style={styles.input}>
     <Controller
           control={control}
           name="userName"
           rules={{required:'Username is required', message:'Username is required'}}
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textInput, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
           onChangeText={onChange}
           onBlur={onBlur}
            placeholder={'Username'} />
            {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
          
          </>
          } 
            />
            <Controller
           control={control}
           name="email"
           rules={{required:'Email is required', message:'Email is required'}}
           
      
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textInput2, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
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
           <TextInput  style={[styles.textInput, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
        //    secureTextEntry={true}
           onChangeText={onChange}
           onBlur={onBlur}
            placeholder={'Password'} />
            {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
          
          </>
          } 
            />
        
        {/* <TextInput placeholder='Username' style={styles.textInput}
         value={name}
         onChangeText={text=>setName(text)}
        
        />
        
        <TextInput placeholder='Email' style={styles.textInput2}
         value={email}
         onChangeText={text=>setEmail(text) }/>
  

    <TextInput placeholder='Password' style={styles.textInput}
     value={password}
     onChangeText={text=>setPassword(text) }
     secureTextEntry
    /> */}
   

    <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btntext}>Signup</Text>
    </TouchableOpacity >
    <TouchableOpacity style={styles.buttonlogin} onPress={()=> navigation.replace('Login')} >
        <Text style={styles.logintxt}>Login</Text>
    </TouchableOpacity>
    {/* <View style={styles.option}>
    <Text style={styles.optiontext}>Already have an account?
    </Text>
    <TouchableOpacity>
        <Text style={styles.link}>Login</Text>
    </TouchableOpacity>
    </View> */}
    <Text style={styles.linktext}>Or Sign Up with</Text>
    <View style={styles.social}>
    <TouchableOpacity>
    <Entypo name="facebook" size={30} color="#6495ED" style={styles.facebook} onPress={()=> navigation.navigate('Newticket')} />
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
export default Signup
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#f2f2f2',
},
top:{
    height:250,
    backgroundColor:'#6495ED',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20 

},
welcometxt:{
    color:'#fff',
    fontSize:32,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:80
},
input:{
    marginTop:-40,
     justifyContent:'center', 
     alignItems:'center',
     borderTopLeftRadius:40,
     backgroundColor:'#f2f2f2',
     borderTopRightRadius:40,
     paddingTop:50
     
     
     
},
textInput:{
    borderWidth:0.5, 
    width:'80%',
    height:50,
    paddingHorizontal:20,
    fontSize:20, 
     borderRadius:20,
     borderColor:'#6495ED'
    
},
textInput2:{
    borderWidth:0.5, 
    width:'80%',
    height:50,
    borderColor:'#6495ED',
    paddingHorizontal:20,
    fontSize:20, 
     borderRadius:20,
    marginVertical:20
},
button:{
    marginTop:40,
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
buttonlogin:{
    marginTop:40,
    borderColor:'#6495ED', 
    borderWidth:1.5,
    width:'80%', 
    height:50, 
    borderRadius:20,
   
},
logintxt:{
    color:'#6495ED',
    fontSize:24, 
   fontWeight:'bold',
   alignSelf:'center',
   paddingTop:10
},

option:{
    flexDirection:'row', 
    marginTop:30
},
optiontext:{
    fontSize:20
},
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

