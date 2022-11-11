import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'
import { useNavigation } from '@react-navigation/core'
import { Foundation,MaterialCommunityIcons, AntDesign, EvilIcons   } from '@expo/vector-icons';


const renderData = (data) => {
  const navigation = useNavigation()
  return (
 
 <View style={styles.renderView}>
      {data.map((gettickets, index) => {
        return (
        <TouchableOpacity style={styles.miniview} key={index} onPress={()=> navigation.navigate('Viewticket',{TicketNo:gettickets.TicketNo,Subject:gettickets.Subject, TicketStatus:gettickets.TicketStatus, Priority:gettickets.Priority, TicketType:gettickets.TicketType, TicketDate:gettickets.TicketDate})}>
          <Text style={{fontWeight:'bold'}}>{gettickets.Subject}</Text> 
          <Text style={{fontSize:18}}>{gettickets.TicketNo}</Text> 
          </TouchableOpacity>);
             
      })}
      
    </View>
    
   
    
  );
    }
    
function Open() {
  

const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <Text
          key={number}
          id={number}
          onPress={handleClick}
          // className={currentPage == number ? "active" : null}
        >
          {number}
        </Text>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch("http://api.mfiexpert.com/helpdesk/gettickets?")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <Text onClick={handleNextbtn}> &hellip; </Text>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <Text onClick={handlePrevbtn}> &hellip; </Text>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 10);
  };


  const navigation = useNavigation()


return (
  <>
      {/* <h1>Todo List</h1> <br /> */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.arrow}
     onPress={()=> navigation.replace('Dashboard')}
      >
      <AntDesign name="arrowleft" size={30} style={styles.arrow}/>
      </TouchableOpacity>
        <Text style={styles.Theader}>List Of Tickets</Text>
      </View>
      <ScrollView style={styles.sc}>
      {renderData(currentItems)}
      <View style={styles.bottomview}>
        <View >
          <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#6495ED',fontWeight:'bold',  width:'120%', height:40, }}
            onPress={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
             <AntDesign name="arrowleft" size={20} style={{color:'#fff', paddingTop:10, paddingLeft:5}}/>
          <Text style={{fontSize:18, color:'#fff', fontWeight:'bold', alignSelf:'center',  paddingTop:2, paddingHorizontal:10}}>Prev</Text>
          </TouchableOpacity>
        </View>
        {/* {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn} */}

        <View>
          <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#6495ED', width:'100%', height:40, }}
            onPress={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
           
            <Text style={{fontSize:18, color:'#fff', fontWeight:'bold', alignSelf:'center', paddingHorizontal:10, paddingTop:2}}> Next</Text>
            <AntDesign name="arrowright" size={20} color="#fff" style={{color:'#fff', paddingTop:10, paddingRight:10}}/>
          </TouchableOpacity>
        </View>
        </View>
      
    
      </ScrollView>
    </>
);
}
export default Open
const styles = StyleSheet.create({
  renderView:{
    marginTop:10,
    marginHorizontal:20
  },
  miniview:{
    borderColor:'#6495ED',
    elevation:2, 
    backgroundColor:'#fff',
     height:100,
     borderWidth:1, 
    paddingHorizontal:20, 
    paddingTop:20, 
    justifyContent:'space-evenly',
     borderRadius:20,
     marginHorizontal:20,
     paddingVertical:10,
    marginTop:30,
    paddingHorizontal:10
  },
  sc:{
    marginBottom:40,
    marginTop:40,
    
},
arrow:{
  marginTop:10,
  color:'#000080',
  // marginHorizontal:20
},
header:{
  marginTop:40,
  // backgroundColor:'#f4f6f6',
  height:50,
  alignSelf:'center',
  width:'85%',
  borderRadius:10,
  // backgroundColor:'#6495ED',
  flexDirection:'row' 
},
Theader:{
  alignSelf:'center',
  justifyContent:'center',
  paddingTop:20,
  fontSize:28,
  fontWeight:'bold',
  marginHorizontal:40,

  color:'#000080',
  // color:'#fff'
},
bottomview:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginTop:20,
  paddingBottom:20
}
})