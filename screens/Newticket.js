import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import * as ImagePicker from 'expo-image-picker';
import Topview from '../components/Topview';
import Arrow from '../components/Arrow';



const ticketGroup = ["Free", "Paid", "Donation"];
const assignPriority = ["Not urgent", "Urgent", "Very urgent"];




export default function Newticket({navigation}) {
 
    const [image, setImage] = useState('');
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          orderedSelection:true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Arrow
        />
        {/* <MaterialCommunityIcons name="ticket" size={60} color="#6495ED" />
        <Text style={styles.Text}>IMS</Text>
        <Text style={styles.text}>desk</Text> */}
        <Topview/>
     </View>
     

     <View style={styles.headline}>
        <Text style={styles.txt}>ADD NEW TICKET</Text>
     </View>
     <View style={styles.inputfield}>
        <TextInput style={styles.textinput}
        placeholder='Subject'
        />
         <TextInput
         style={styles.textinput}
        placeholder='Description'
        multiline={true}
        />

    
       
       <TouchableOpacity style={styles.upload} onPress={pickImage}>
       <Text style={styles.t}>Upload File</Text>
       <EvilIcons  name="arrow-up" size={24} color="#6495ED" style={{paddingHorizontal:120, alignSelf:'center'}}/>
        </TouchableOpacity>
        
       
        <SelectDropdown
	data={ticketGroup}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
       
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
    defaultButtonText={('Select ticket group')}
    buttonTextStyle={{fontSize:16, marginRight:100}}
 
    buttonStyle={{marginTop:30, borderWidth:0.5,width:'80%',borderColor:'#6495ED', marginHorizontal:20, height:50, borderRadius:20}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}

    
/>
<SelectDropdown
	data={assignPriority}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
        
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
    defaultButtonText={('Select priority')}
    buttonTextStyle={{fontSize:16, marginRight:120}}
 
    buttonStyle={{marginTop:30, borderWidth:0.5,width:'80%',borderColor:'#6495ED', marginHorizontal:20, height:50, borderRadius:20}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
    
    
        
        
/>
<TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Tickets')}>
        <Text style={styles.btntext}>ADD NEW</Text>
    </TouchableOpacity>
   
     </View>
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
    upload:{
        flexDirection:'row',
        marginHorizontal:20,
        // paddingHorizontal:20,
        height:50,
        borderColor:'#6495ED',
        borderWidth:0.5,
        marginTop:40,
        width:'80%',
        borderRadius:20
        
    },
    inputfield:{
        marginTop:20,
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:'#f4f6f6',
        height:550,
        borderRadius:50,
        width:'80%',
        elevation:5
        // paddingBottom:200
    },
    textinput:{
      paddingHorizontal:20,
      borderBottomWidth:0.5,
      height:80,
      width:'80%',
      marginHorizontal:20,
      borderColor:'#6495ED',  
    },
    t:{
      paddingLeft:20,
      fontSize:18,
      alignSelf:'center', 
      justifyContent:'center',

    },
    button:{
        marginTop:40,
        backgroundColor:'#6495ED', 
        width:'50%', 
        height:50, 
        borderRadius:10,
        elevation:3,
        justifyContent:'center',
        alignSelf:'center'
    
    },
    btntext:{
        color:'#fff',
         fontSize:24, 
        fontWeight:'bold',
        alignSelf:'center',
        
    },
})