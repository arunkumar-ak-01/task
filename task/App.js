import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Dimensions, ImageBackground } from 'react-native';
import {useDeviceOrientation, useDimensions} from '@react-native-community/hooks';
import color from './screens/config'
import MyText from './screens/text';
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default function App() {

   
  return (
    <SafeAreaView style={styles.container}>
       
     
       <MaterialCommunityIcons name="email" size={100} color='white ' justifyContent='center'></MaterialCommunityIcons>
       

       <MyText myNameIs="my name is arun" myPhoneNum=" my phno:8778079***">
      
         <View style={styles.inside}></View>
       </MyText>
  
    

      
       
    
       <StatusBar style="auto" />
       

  </SafeAreaView>
    );
  }
    
   
//styles for components
const styles = StyleSheet.create({
 container:{
   flex:1,
   backgroundColor:color.primary,
   alignItems:'flex-start',
   justifyContent:'center',
   padding: Platform.OS==='android'?5:0
 },
 inside:{
   backgroundColor:color.secondary,
   height:100,
   width:100,
   borderWidth:5,
   
   alignItems:'flex-start',
   justifyContent:'center'
 }
  
});
