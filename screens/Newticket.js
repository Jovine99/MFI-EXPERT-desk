import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useState, Component, memo} from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import * as ImagePicker from 'expo-image-picker';
import Topview from '../components/Topview';
import Arrow from '../components/Arrow';
import {Picker} from '@react-native-picker/picker';
import PropTypes from 'prop-types';
// import { Formik } from 'formik';
import { useForm , Controller, useController  } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import Loader from '../components/Loader'


const validationSchema = yup.object().shape({
  priority: yup.string().required('This field is required.'),
  subject: yup.string().required('This field is required.'),
  description: yup.string().required('This field is required.'),
  ticketGroup: yup.string().required('This field is required.'),
  upload: yup.string().required('This field is required.')
})



const ticketGroup = ["Free", "Paid", "Donation"];
const assignPriority = ["Not urgent", "Urgent", "Very urgent"];


export default function Newticket({navigation}) {
 
 
    const [selectedPriority, setSelectedPriority] = useState(); 
    const [open, setOpen] = React.useState(false);
  const [selectedGroup, setSelectedGroup] = useState();  
  const [ticket, setTicket] = React.useState("");
    const [image, setImage] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [upload, setUpload] = useState('');
    const [select, setSelect] = useState('');
    const {control,  handleSubmit, formState:{errors},setValue} = useForm({
      defaultValues:{
          subject:'',
          description:'',
          upload:'',
          select:'',
      },
      resolver: yupResolver(validationSchema),
      

  });
  // const onSubmit = (data) => {
  //   setLoading(true);
  //   setTimeout(() =>{
  //       setLoading(false);
  //       try{
  //           AsyncStorage.setItem("user", JSON.stringify(subject, description));
  //           navigation.navigate('Newticket')
  //       }
  //       catch (error){
  //           Alert.alert("Error", "Something went wrong")
  //       }
  //   }, 1000)

        
  //   }
  const onSubmit = data => {
    console.log(data)
    

  }
    
    const [loading, setLoading] = React.useState(false)
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          orderedSelection:true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
        if (selectedImage !== null) {
          return (
            <View style={styles.container}>
              <Image
                source={{ uri: image  }}
                style={{ width: 150, height: 150,alignSelf:'center', resizeMode:'contain'}}
              />
            </View>
          );
        }
        
        // const formdata = new formData()
        // formdata.append('file', {
        //     uri:images.assets[0].uri,
        //     type:images.assets[0].type,
        //     name:images.assets[0].fileName
        // })
        
       
      };
      
      
  return (
    <View style={styles.container}>
     <View style={styles.header}>
     <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.replace('Dashboard')}
      >
      <AntDesign name="arrowleft" size={30}/>
      </TouchableOpacity>
        {/* <MaterialCommunityIcons name="ticket" size={60} color="#6495ED" />
        <Text style={styles.Text}>IMS</Text>
        <Text style={styles.text}>desk</Text> */}
        {/* <Topview/> */}
     </View>
     

     <View style={styles.headline}>
        <Text style={styles.txt}>ADD NEW TICKET</Text>
     </View>
     <ScrollView style={{ marginVertical:60, height:600}} showsVerticalScrollIndicator={false} vertical={true}>
     <View style={styles.inputfield}>
        {/* <TextInput style={styles.textinput}
        placeholder='Subject'
        /> */}
         <Loader visible={loading}/>
    
        <Controller
           control={control}
           name="subject"
           rules={{required:'Field is required', message:'Field is required'}}
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textinput, {borderColor : error ? 'red':'#6495ED'}]} 
           value={value} 
           subject={subject}
           setSubject={setSubject}
          //  onChangeText={onChange}
          onChangeText={value => {
            // console.log(value)
            onChange(value)
         }}
           onBlur={onBlur}
            placeholder={'Subject'} />
            {error && <Text style={{color:'red', fontSize:14,marginTop:10,paddingTop:2}}>{error.message ||'error'}</Text>}
          
          </>
          } 
            />
            <Controller
           control={control}
           name="description"
           rules={{required:'Field is required', message:'Field is required'}}
           render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
           <TextInput  style={[styles.textinput2, {borderColor : error ? 'red':'#6495ED'}]} 
           multiline={true}
           value={value} 
           description={description}
           setDescription={setDescription}
          //  onChangeText={onChange}
          onChangeText={value => {
            // console.log(value)
            onChange(value)
         }}
           onBlur={onBlur}
            placeholder={'Description'} />
            {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
          
          </>
          } 
            />
         {/* <TextInput
         style={styles.textinput2}
        placeholder='Description'
        
        /> */}

    {/* <Controller
    control={control}
    name="upload"
    rules={{required:'Field is required', message:'Field is required'}}
    render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
    <TouchableOpacity style={styles.upload} onPress={pickImage} mode="contained">
       <Text style={styles.t}>Upload File</Text>
       <EvilIcons  name="arrow-up" size={24} color="#6495ED" style={{paddingHorizontal:120, alignSelf:'center'}}/>
        </TouchableOpacity>
     {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
   
   </>
   } 

    /> */}
    
    <TouchableOpacity style={styles.upload} onPress={pickImage} mode="contained">
      {image && <Image source={{ uri: image }} style={{ width:150, height: 150,alignSelf:'center', resizeMode:'contain'}} />}
       <Text style={styles.t}>Upload File</Text>
       <EvilIcons  name="arrow-up" size={24} color="#6495ED" style={{paddingLeft:10, alignSelf:'center'}}/>
        </TouchableOpacity>
       

     <Controller
      defaultValue=""
     control={control}
     name="ticketGroup"
     rules={{required:'Field is required', message:'Field is required'}}
     render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
     <View style={[styles.picker,{borderColor : error ? 'red':'#6495ED'}]}>
    <Picker style={styles.pick}
    // placeholder="Assign Priority"
    value={value}
    onBlur={onBlur}
    setValue={setValue}
  selectedGroup={selectedGroup}
  onValueChange={value => {
    // console.log(value)
    onChange(value)
 }}>
    
    <Picker.Item label="Select ticket group" value="0"  style={{fontSize:20, color:"#000",fontWeight:'bold' }}/>
  <Picker.Item label="Free" value="Free" style={{fontSize:18}}  />
  <Picker.Item label="Paid" value="Paid" style={{fontSize:18}} />
  <Picker.Item label="Donation" value="Donation" style={{fontSize:18}} />
</Picker>

    </View>
      {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
    
    </>
    } 
    />
     <Controller
      defaultValue=""
     control={control}
     name="priority"
     rules={{required:'Field is required', message:'Field is required'}}
     render ={({field:{value, onChange, onBlur}, fieldState:{error}}) => <>
     <View style={[styles.picker,{borderColor : error ? 'red':'#6495ED'}]}>
    <Picker style={styles.pick}
    // placeholder="Assign Priority"
    value={value}
    onBlur={onBlur}
  selectedPriority={setSelectedPriority}
  onValueChange={value => {
    // console.log(value)
    onChange(value)
 }}>
    
    <Picker.Item label="Assign priority" value="0"  style={{fontSize:20, color:"#000",fontWeight:'bold' }}/>
  <Picker.Item label="Not Urgent" value="Not Urgent" style={{fontSize:18}}  />
  <Picker.Item label="Urgent" value="Urgent" style={{fontSize:18}} />
  <Picker.Item label="Very Urgent" value="Very urgent" style={{fontSize:18}} />
</Picker>

    </View>
      {error && <Text style={{color:'red', fontSize:14,marginTop:10}}>{error.message ||'error'}</Text>}
    
    </>
    } 
    /> 
   
    
<TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btntext}>ADD NEW</Text>
    </TouchableOpacity>
   
     </View>
     </ScrollView>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        // marginTop:40,
        flexDirection:'row',
        
        
    },
    Text:{
    color:'#6495ED',
    fontSize:40,
    fontWeight:'bold',
    marginTop:14,
    
    },
    text:{
        color:'#6495ED',
        fontSize:40,
        marginTop:14,
       

    },
    headline:{
        marginTop:20,
        justifyContent:'center',
        alignSelf:'center'
    },
    txt:{
        fontSize:28,
        fontWeight:'bold'
    },
    arrow:{
      marginTop:40,
      marginHorizontal:20
  },
    upload:{
        flexDirection:'row',
        marginHorizontal:20,
        height:170,
        borderColor:'#6495ED',
        borderWidth:0.5,
        marginTop:30,
        width:'90%',
        borderRadius:5,
        alignSelf:'center'  
    },

    inputfield:{
        marginTop:20,
        justifyContent:'center',
        alignSelf:'center',
        height:700,
        borderRadius:50,
        width:'80%',
        // paddingTop:30,
        marginBottom:40
         
    },

    textinput:{
      paddingHorizontal:20,
      borderBottomWidth:0.5,
      height:80,
      width:'90%',
      marginHorizontal:20,
      borderColor:'#6495ED', 
      fontSize:22,
      color:'#000',
     
      
    },

    textinput2:{
        paddingHorizontal:20,
        borderWidth:0.5,
        height:80,
        width:'90%',
        marginHorizontal:20,
        borderColor:'#6495ED', 
        fontSize:22,
        color:'#000',
        borderRadius:5,
        marginTop:30 
      },

    t:{
      // paddingLeft:20,
      fontSize:22,
      alignSelf:'center', 
      justifyContent:'center',
    },

    button:{
        marginTop:20,
        backgroundColor:'#6495ED', 
        width:'50%', 
        height:50, 
        borderRadius:10,
        elevation:3,
        justifyContent:'center',
        alignSelf:'center', 
        // marginBottom:120
        marginBottom:20
    },

    btntext:{
        color:'#fff',
         fontSize:24, 
        fontWeight:'bold',
        alignSelf:'center',   
    },
    picker:{
      marginTop:30, 
      borderWidth:0.5,
      width:'90%',
      borderColor:'#6495ED',
       marginHorizontal:20, 
       height:50, 
       borderRadius:5,
       
       
    },
    pick:{
      marginHorizontal:20
    }
})