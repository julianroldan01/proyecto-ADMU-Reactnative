import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Image, ScrollView, Button } from 'react-native'

export default class login extends React.Component {

  render() {
    return (

        <ScrollView>
      <p>
      <center><Image
      source={require('../assets/smiley-153977_640.png')} style={{
          height: 80,
          width: 80
      }}/>
      </center>
      </p>
  
      <text><center><h3>Ingrese su usuario:</h3></center></text>
    <TextInput
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
    
  />
  
  <text><center><h3>Ingrese su Contraseña:</h3></center></text>
   <TextInput  
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 2
    }}
   
  />
  <p>
    <Button color="green"
      title="Enter"
      onPress={() =>
        this.props.navigation.navigate('home',{name:'home'})}
      
    />
  </p>
    </ScrollView>
          
    )
 }
}

