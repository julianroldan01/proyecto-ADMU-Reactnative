import React, { useRef, useEffect} from 'react';
///import React, { Component } from 'react'
import { Animated, Text, View, Image, Button, ScrollView, StyleSheet} from 'react-native';
import { render } from 'react-dom';


  
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class home extends React.Component {
  render(){
  return (
   
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <text><h1>ADMU</h1></text>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2013/07/12/18/54/smiley-153977_640.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <p>
      <FadeInView style={{width: 350, height: 290, backgroundColor: '#90ee90'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 5}}>Bienvenidos a ADMU, 
        una aplicacion para el uso estudiantil en el cual puedas ver las actividades de la universidad, 
        su horario de estudios y sus notas.</Text>
      </FadeInView>
      </p>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 150, height: 50}}>
        <Button color="gray"
      title="Actividades"
      onPress={() =>
        this.props.navigation.navigate('actividades',{name:'actividades'})}
        />
            </View>
        <View style={{width: 150, height: 50}}>
        <Button color="gray"
      title="Horario"
      onPress={() =>
        this.props.navigation.navigate('horario',{name:'horario'})}
        />
            </View>
        <View style={{width: 150, height: 50}}>
        <Button color="gray"
      title="Notas"
      onPress={() =>
        this.props.navigation.navigate('notas',{name:'notas'})}
        />
            </View>
   </View>
   </View>
    )
  }
}
