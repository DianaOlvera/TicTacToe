import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MaterialCommunityIcons as Icon}  from 'react-native-vector-icons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={{flexDirection: "row"}}>
        <View style={[styles.title, {borderLeftWidth: 0, borderTopWidth: 0}]}></View>
        <View style={[styles.title, {borderTopWidth:0}]}></View>
        <View style={[styles.title, {borderTopWidth:0, borderRightWidth: 0,}]}></View>      
      </View>

      <View style={{flexDirection: "row"}}>
        <View style={[styles.title, {borderLeftWidth: 0, }]}></View>
        <View style={[styles.title, {}]}></View>
        <View style={[styles.title, {borderRightWidth: 0,}]}></View>      
      </View>

      <View style={{flexDirection: "row"}}>
        <View style={[styles.title, {borderBottomWidth:0, borderLeftWidth: 0, }]}></View>
        <View style={[styles.title, {borderBottomWidth:0}]}></View>
        <View style={[styles.title, {borderBottomWidth:0, borderRightWidth: 0,}]}></View>      
      </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    borderWidth:10,
    width:100,
    height:100,
    borderColor: "#f70093",
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  titleX: {
    color: "pink",
    fontSize: 60,
    flex: 1,
    justifyContent:"center",

  },
  titleO: {
    color: "green",
    fontSize: 60,
    justifyContent:"center",
  },
});
