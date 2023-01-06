import React,{Component} from 'react';
import{
  View,
  StyleSheet,
  Text
}from 'react-native';
export default class Call extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.hometxt}>This is Call</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'cyan'
  },
  hometxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
})