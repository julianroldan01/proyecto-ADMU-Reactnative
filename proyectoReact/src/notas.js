import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image } from 'react-native'

export default class login extends React.Component {

  render() {
    return (
       <View style = {styles.container}>
          <Image source={require('../assets/smiley-153977_640.png')}/>
          <Text style = {styles.texto}>Notas</Text>
          
       </View>
    )
 }
}



const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent:"center",
   alignItems:"center",
   //backgroundColor:'red'
 },
 texto:{
    color:'blue'
 }
 
})