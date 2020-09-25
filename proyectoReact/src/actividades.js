import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Button
} from "react-native";

export default class activity extends React.Component {
  render() {
    return (
     <ScrollView>
       <p>
            <center><Text style={styles.texto}>ACTIVIDADES</Text></center>
       </p>
        <View style={styles.activitys}>
          <View style={[styles.flex, styles.activityLeft]}>
          <Text>
         Paro estudiantil!!
         </Text>
         <Image
          source={{
            uri: 'https://corpsur.b-cdn.net/wp-content/uploads/2019/12/587202_1.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
          </View>
          
          <View style={[styles.flex, styles.activityRight]}>
          <Text>
          Dia del maestro 
          </Text>
          <Image
          source={{
            uri: 'https://i1.wp.com/www.golsystems.mx/wp-content/uploads/2019/05/dia_maestro_gols.png?fit=1350%2C846&ssl=1',
          }}
          style={{ width: 200, height: 200 }}
        />
          </View>

        </View>
        <View style={styles.activitys}>
          <View style={[styles.flex, styles.activityLeft]}>
          <Text>
         Pruebas TYT
         </Text>
         <Image
          source={{
            uri: 'https://www.opinioncaribe.com/wp-content/uploads/2019/06/icfes.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
          </View>
          
          <View style={[styles.flex, styles.activityRight]}>
          <Text>
          Fin de semestre 
          </Text>
          <Image
          source={{
            uri: 'https://cdn.memegenerator.es/imagenes/memes/full/1/92/1926538.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
          </View>

        </View>
       
        
      </ScrollView>
    )

  }

}

const styles = StyleSheet.create({
  
     texto: {
        color: "#008000",
        fontSize: 50,
        padding: 10,
        alignContent:"center",
        justifyContent:"center"
      },
      
  activitys : {
    flex : 0.6,
    flexDirection : 'row'
  },
  activityLeft : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  activityCenter : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  activityRight : {
    alignItems : 'center',
    justifyContent : 'center'
},
flex : {
    flex : 1
  },
  
});