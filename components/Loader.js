import { View, Text, StyleSheet, useWindowDimensions, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = ({visible=false})=>{
    const {height, width} = useWindowDimensions();
  return visible && <View style={[styles.container, {height, width}]}>
    <View style={styles.loader}>
        <ActivityIndicator size="large" color="#6495ED"/>
        <Text style={{fontSize:16, marginRight:20}}>Loading...</Text>
    </View>
  </View>

}
export default Loader
const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent:'center'
    },
    loader:{
       height:70,
       backgroundColor:'#f2f2f2',
       marginHorizontal:50,
       borderRadius:5,
       flexDirection:'row',
       alignItems:'center',
       paddingHorizontal:20 
    }
})