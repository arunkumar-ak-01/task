import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MyText= (props) => {
    return(
        // <View>
        //      {/* <Text  style={{color:'black',fontFamily:'serif',textAlign:'justify'}}>{props.myNameIs}{props.myPhoneNumber}</Text> */}
        //      {props.children}
        // </View>
        <View style={styles.box}>
            <Text  style={{color:'black',fontFamily:'serif',fontSize:15}}>{props.myNameIs}{props.myPhoneNum}</Text>
          {props.children}
       </View>
    )
}




export default MyText;

const styles = StyleSheet.create({
    box:{
      backgroundColor:'white',
      height:500,
      width:350,
      borderWidth:5,
      borderColor:'yellow',
      alignItems:'center',
      justifyContent:'center',
      
    }
     
   });