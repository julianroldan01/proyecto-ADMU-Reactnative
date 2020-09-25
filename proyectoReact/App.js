import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import login  from './src/login';
import actividades from './src/actividades';
import admin from './src/admin';
import horario from './src/horario';
import notas from './src/notas';
import home  from './src/home';
//import registro  from './src/views/login/registro';
//import ejercicio2  from './src/ejercicio2';

const proyectoNavigator = createStackNavigator({
  login:{
      screen:login
   },
   home:
    {
      screen: home ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    actividades:
    {
      screen: actividades ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    admin:
    {
      screen: admin ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    horario:
    {
      screen: horario ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
    notas:
    {
      screen: notas ,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.getParam('name'),
      })
    },
})

export default createAppContainer(proyectoNavigator);