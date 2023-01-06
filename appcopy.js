import React from 'react';
import React from 'react';
import React,{Component} from 'react';
import{
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight
}from 'react-native';
export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground source={require('./Image/1.JPG')}
      style={styles.bgimage}>
      <Image source={require('./Image/1_2_.JPEG')}
      style={styles.logo}>
      </Image>
      <Text style={styles.text}>Welcome to My  react</Text>
      <TextInput style={styles.inputview}
      placeholder='Username'
      placeholderTextColor='green'
      maxLength={10}></TextInput>
      <TextInput style={styles.inputview}
      placeholder='password'
      placeholderTextColor="green"
      secureTextEntry={true}>
      </TextInput>
      <TouchableHighlight style={styles.buttonview}>
      <Text style={styles.textins}>Login</Text></TouchableHighlight>
      </ImageBackground>
      </View>
    )
  }
} 
const styles=StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'white'
  },
  bgimage:{
    height:"100%",
    width:"100%",
    alignItems:'center',
    justifyContent:'center'
  },
  logo:{
    height:100,
    width:100,
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:20
  },
  inputview:{
    width:"80%",
    height:20,
    borderWidth:1,
    borderColor:'green',
    marginTop:20
  },
  buttonview:{
    height:30,
    width:70,
    backgroundColor:'green',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  textins:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }

})