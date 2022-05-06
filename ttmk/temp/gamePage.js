import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import React, { useState } from "react";
import MapView from "react-native-maps";

export default function GamePage(){
    return (
    <SafeAreaView style={styles.container}>
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
      flex : 0.8,
      backgroundColor:'red',
      padding :5,
    },
    semiContainer2: {
      flex : 0.2,
      flexDirection : 'colu',
      backgroundColor:'green',
      height: '100%'
    },
    playContainer : {
      flex :0.3,
      borderWidth : 3,
      borderColor: 'black',
      alignItems : 'center',
      flexGrow : 2
      
    },
    consolbar: {
      flex : 0.2,
      backgroundColor : 'yellow',
      marginBottom : 10
    },
    mapContainer : {
      flex: 0.8,
    }, 
    map:{
      flex: 1,
      borderRadius : 15
    }
  });
  
