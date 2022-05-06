import React, { useState } from "react";
import MapView from "react-native-maps";
import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, Text, View, Dimensions } from "react-native";
export default function App() {
  const [orientationIsLandscape, setOrientation] = useState(true);
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
