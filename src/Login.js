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
export default class Login extends Component{
  constructor(){
    super();
    this.state={
      name:null
    }
  }
  updateValue(username){
    this.setState({name : username})
  }
  render(){
    return(
      <View style={styles.container}>
      <ImageBackground source={require('../Image/bluebg.jpg')} style={styles.imgbackground}>
      <Image source={require('../Image/manlogo.jpg')} style={styles.img}/>
      <Text style={styles.text}>Welcome</Text>
      <TextInput style={styles.input} placeholder='username' placeholderTextColor='green'
      onChangeText={(username)=>this.updateValue(username)}>
      </TextInput>
      <TextInput style={styles.input} placeholder='password' placeholderTextColor='green'
      secureTextEntry={true}>
      </TextInput>
      <TouchableHighlight style={styles.buttonview}
      onPress={()=>this.props.navigation.navigate('Flexbox',{username:this.state.name})}>
      <Text style={styles.buttontext}>Login
      </Text>
      </TouchableHighlight>
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
  imgbackground:{
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    height:100,
    width:100,
    marginBottom:10
  },
  text:{
    fontSize:35,
    fontWeight:'bold',
    color:'white',
    marginBottom:20
  },
  input:{
    borderWidth:2,
    borderColor:'black',
    height:55,
    width:'70%',
    paddingLeft:10,
    marginBottom:20
  },
  buttonview:{
    width:'40%',
    backgroundColor:'green',
    height:47,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    fontsize:35,
    fontWeight:'bold',
    color:'white'
  }
})