import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from "react";
import MapView from "react-native-maps";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.semiContainer1}>
        <View style = {styles.consolbar}></View>
        <View style = {styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.489361620873,
            longitude: 127.05489077402,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        </View>
      </View>
      <View style={styles.semiContainer2}><Text>PLAYERBAR</Text>
        <View style = {styles.playContainer}></View>
        <View style = {styles.playContainer}></View>
        <View style = {styles.playContainer}></View>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 5,
  },
  semiContainer1: {
    flex : 0.8,
    backgroundColor:'red',
    padding :5,
  },
  semiContainer2: {
    flex : 0.2,
    flexDirection : 'colu',
    backgroundColor:'green'
  },
  playContainer : {
    flex :0.3,
    borderWidth : 3,
    borderColor: 'black',
  },
  consolbar: {
    flex : 0.2,
    backgroundColor : 'yellow',
  },
  mapContainer : {
    flex: 0.8,
    backgroundColor : 'blue',
  }, 
  map:{
    flex: 1,
  }
});
