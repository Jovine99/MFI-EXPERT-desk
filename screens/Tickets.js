import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Topview from '../components/Topview'
import Arrow from '../components/Arrow'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';




function Tickets(){
    const [counter, updateCounter] = useState(0);
  const [randomText, updaterandomText] = useState('This is random Text');

function handleIncrement() {
    updateCounter(counter + 1);
  }


  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  function handleReset() {
    updateCounter(0);
    updaterandomText(`Random text is updated`);
  }

  useEffect(() => {
    console.log(handleIncrement);
    // updaterandomText(`Random text is updated`);
  }, [counter]);

  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

    <View style={styles.header}>
        <Arrow/>
        <Topview/>
    </View>

    <View style={styles.Textview} >
        <Text style={styles.t1}>Skip the Line</Text>
        <Text style={styles.t1}>Purchase Tickets</Text>
       

    </View>
   
    <View style={styles.Txt}>
        <Text style={styles.txt}>Ticket</Text>
        <Text style={styles.txt}>Price</Text>
        <Text style={styles.txt}>Quantity</Text>
        
    </View>
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false} style={styles.sc}>
    <View style={styles.list}>
        <View style={styles.details}>
            <Text style={styles.dt1}>Students</Text>
            <Text style={styles.p1}>$150.00</Text>
            <View style={styles.counter}>
        <TouchableOpacity  onPress={handleDecrement} style={styles.counter}>
        <AntDesign name="minus" size={24} color="#6495ED" />
        </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.counter}>
        <AntDesign name="plus" size={24} color="#6495ED" />
        
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Children</Text>
            <Text style={styles.p2}>$50.00</Text>
        <View style={styles.counter}>
        <TouchableOpacity  onPress={handleDecrement} style={styles.counter2} >
        <AntDesign name="minus" size={24} color="#6495ED" />
        </TouchableOpacity>
        <Text style={styles.counter2}>{counter}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
        <AntDesign name="plus" size={24} color="#6495ED" />
        
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt3}>Adults</Text>
            <Text style={styles.p3}>$120.00</Text>   
        <TouchableOpacity  onPress={handleDecrement} style={styles.counter2}>
        <AntDesign name="minus" size={24} color="#6495ED" style={{paddingRight:-20}} />
        </TouchableOpacity>
        <Text style={styles.counter2}>{counter}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
        <AntDesign name="plus" size={24} color="#6495ED"  />
        
        </TouchableOpacity>
        </View>
        

        {/* <View style={styles.details}>
            <Text style={styles.dt3}>VIPs</Text>
            <Text style={styles.p2}>$80.00</Text>
            
        <TouchableOpacity  onPress={handleDecrement}style={styles.counter3}>
        <AntDesign name="minus" size={24} color="#6495ED" />
        </TouchableOpacity>
        <Text style={styles.counter3}>{counter}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.counter3}>
        <AntDesign name="plus" size={24} color="#6495ED" />
        
        </TouchableOpacity>
        
        </View> */}
         <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.details}>
            <Text style={styles.dt2}>Seniors</Text>
            <Text style={styles.p2}>$100.00</Text>
            <View style={styles.counter}>
            <TouchableOpacity  onPress={handleDecrement}style={styles.counter2}>
            <AntDesign name="minus" size={24} color="#6495ED" />
            </TouchableOpacity>
            <Text style={styles.counter2}>{counter}</Text>
            <TouchableOpacity onPress={handleIncrement} style={styles.counter2}>
            <AntDesign name="plus" size={24} color="#6495ED" />
        
            </TouchableOpacity>
        </View>
        </View>
    </View>
    </ScrollView>
    
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Dashboard')}>
        <Text style={styles.btntext}>PURCHASE</Text>
    </TouchableOpacity>

    </View>
  )
  }
export default Tickets
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flexDirection:'row',
    },
    Textview:{
      marginTop:40,
      marginHorizontal:20,
        
    },
    t1:{
        fontSize:30,
        color:'#000080',
        fontWeight:'bold'
    },
    Txt:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:40,
        width:'96%',
        alignSelf:'center'
    },
    txt:{
        fontSize:18,
        textTransform:'uppercase',
        fontWeight:'bold',
      
    },
    sc:{
        height:50,
        marginVertical:40,
      
    },
    list:{
        
        marginHorizontal:20,
        justifyContent:'center',
        alignSelf:'center',
        width:'90%',
        elevation:2,
        backgroundColor:'#f4f6f6',
        height:550,
        borderRadius:10,
        paddingBottom:40,
        paddingTop:60,


    },
    details:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'96%',
        alignSelf:'center',
        marginHorizontal:40,
        alignSelf:'center'
       
    },
    dt1:{
        fontSize:20,
        textTransform:'uppercase',
        marginRight:20,
        // color:'#909497',
        borderColor:'#6495ED',
        justifyContent:'center',
        
    }, 
    p1:{
        fontSize:20,
        textTransform:'uppercase',
        marginRight:20,
        // color:'#6495ED',
    },
    dt2:{
        fontSize:20,
        textTransform:'uppercase',
        marginRight:40,
        marginTop:20,
        // color:'#909497'
    },
    p2:{
        fontSize:20,
        textTransform:'uppercase',
        marginRight:20,
        marginTop:20,
        
    },
    dt3:{
        fontSize:20,
        textTransform:'uppercase',
        // marginRight:10,
        marginLeft:10,
        marginTop:20 ,
        // color:'#909497'
    },
    p3:{
        fontSize:20,
        textTransform:'uppercase',
        // marginRight:-20,
        marginTop:20,
        marginLeft:60  
    },
    counter:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:2,
        
        
    },
    counter2:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:2,
        marginTop:20,
       

    },
     button:{
        marginBottom:60,
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