import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };
  const navigation = useNavigation();

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
      
  
      
    </View>
  );
  function Conference({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Conference Details</Text>
        <Pressable
          onPress={() => navigation.navigate('Story')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Go to Story</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Open Drawer</Text>
        </Pressable>
      </View>
    );
  }


  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      
    >
      
      <View style={styles.container}>
        {/* <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text> */}
        
        {/* <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text> */}
        
        <TouchableOpacity onPress={() => drawer.current.openDrawer()} style={styles.menu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>
      </View>
    </DrawerLayoutAndroid>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    // textAlign: "center"
  },
  menu:{
    marginTop:40,
    marginHorizontal:20
  }
});

export default App;