import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native' 
import React, { useEffect, useState } from "react";




function Pagination({ postsPerPage, totalPosts, paginate, }) {
 
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
   
  return (
    <View style={{flexDirection:'row', marginTop:4, }}>
      {pageNumbers.map(number => (
          <View key={number} style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => paginate(number)} renderPageNumbers={renderPageNumbers} style={{flexDirection:'row'}}>
             <Text> {number}</Text>
            </TouchableOpacity>
          </View>
        ))}
        </View>
      
   
   
  );
}

export default Pagination;