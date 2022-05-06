import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, } from 'react-native';
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";

import * as ScreenOrientation from "expo-screen-orientation";


export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true);
  const [time, setTime] = useState(10);
  const [problem, setProblem] = useState(1);

  useEffect(() => {  
    const timer = setTimeout(() => {
      if (time > 0) {        
        setTime((prevTime) => prevTime - 1);      
      }    
    }, 1000);    
    if (time === 0) {
      clearTimeout(timer);    
    }  
  }, [time]);

  
  useEffect(() => {
    
  });  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.semiContainer1}>
        <View style = {styles.consolbar}>
          <View style = {styles.consoleItem}><Text>서울특별시</Text></View>
          <View style = {styles.consoleItem}><Text style = {styles.text}>{time}</Text></View>
          <View style = {styles.consoleItem}><Image style = {{width : 150, height : 50}}source = {{uri : ''}}></Image></View>
        </View>

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
      <View style={styles.semiContainer2}><Text>WHERE ARE THERE?</Text>
        <View style = {styles.playContainer}></View>
      </View>
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    flexDirection : 'row',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semiContainer1: {
    flex : 0.7,
    backgroundColor:'red',
    padding :5,
  },
  semiContainer2: {
    flex : 0.3,
    backgroundColor:'green',
    height: '100%'
  },
  playContainer : {
    flex :1,
    borderWidth : 3,
    borderColor: 'black',
    alignItems : 'center',
    flexGrow : 2,
    
  },
  consolbar: {
    flex : 0.2,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor : 'yellow',
    marginBottom : 15 

  },
  mapContainer : {
    flex: 0.8,
  }, 
  map:{
    flex: 1,
    borderRadius : 15
  },
  consoleItem: {
    backgroundColor:'pink',    
    borderWidth : 1,    
    justifyContent : 'space-around', 
    textAlign : 'center'  }, 
  text: {    flex : 0.7,    fontSize: 40,    textAlign : 'center',    textAlignVertical : 'center',    backgroundColor: 'yellow',    justifyContent: 'center',    alignItems: 'center'
  }
});
