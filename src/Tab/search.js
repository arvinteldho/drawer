import React,{Component} from 'react';
import{
  View,
  StyleSheet,
  Text,
  TouchableHighlight
}from 'react-native';
export default class Search extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.hometxt} >This is React Home</Text>
      <TouchableHighlight onPress={()=>this.props.navigation.navigate("BottomTab")}>
       <Text>Next</Text>
       </TouchableHighlight>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green'
  },
  hometxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
})