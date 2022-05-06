import React from 'react'
import {SafeAreaView,View,Text,TextInput,StyleSheet,Image,} from 'react-native'

export default function StartPage(){
      return (
        <SafeAreaView style={styles.home}>
        <View style={styles.title}><Text>땅부자들</Text></View>
        <View style={styles.nicknameCon}>
          <TextInput style={styles.input}
            onChangeText = {onChangeText}
            value={playername}
          />
          <TextInput style={styles.input}
            onChangeText = {onChangeText}
            value={playername}
          />
          <TextInput style={styles.input}
            onChangeText = {onChangeText}
            value={playername}
          />
        </View>
        <Button
        title = 'Game Start!'
        onPress = {()=>this.props.navigation.navigate('Game')}/>
        </SafeAreaView>
    
      );
}

const styles = StyleSheet.create({
    home : { flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        margin : 0,
        padding: 0,
        height : '100%',
        backgroundColor: rgb(165, 155, 255),
      },
    input : {
        textAlign : 'center',
        borderRadius : 15,
        borderWidth : 15
      },
    
})