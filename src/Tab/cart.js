import React,{Component,useState} from 'react';
import{
  View,
  StyleSheet,
  Text
}from 'react-native';
export default class Cart extends Component{
  render(){
    const Count="0";
    return(
      <View style={styles.container}>
      <Text style={styles.hometxt}>This is React Home</Text>
      <Text>{Count}</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  },
  hometxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
})