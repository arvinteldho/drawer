import React,{Component} from 'react';
import{
  View,
  StyleSheet,
  Text,
  TouchableHighlight
}from 'react-native';
class Flexcontent extends Component{
  render(){
    return(
  <View>
  <Text style={styles.flextext}>My name is {this.props.name}</Text>
  </View>
  )
  }
}
export default class Flexbox extends Component{
  constructor(){
    super();
    this.state= {
      maintext:'Hello',
      subtext:' React'
    }
  }
  componentDidMount(){
    console.log(this.props.route.params.username)
  }
  updatetext(){
    this.setState({
      maintext:'Hi',
      subtext:'Framework'
    })
  }
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.text}>{this.state.maintext}</Text>
       <Text style={styles.text}>{this.state.subtext}</Text>
        <Text style={styles.text}> Native</Text>
        <TouchableHighlight style={styles.button}
        onPress={()=>this.updatetext()}
        underlayColor={'blue'}>
        <Text style={styles.buttontext}>Update</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}
        onPress={()=>this.props.navigation.navigate('Drawer')}>
        <Text style={styles.buttontext}>Click Here</Text>
        </TouchableHighlight>
        <Flexcontent name={this.props.route.params.username}></Flexcontent>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center'

  },
  text:{
    fontSize:22,
    fontWeight:'bold',
    color:'black'
  },
  button:{
    width:'60%',
    height:55,
    backgroundColor:'green',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20
  },
  buttontext:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'

  },
  flextext:{
    fontSize:20,
    fontWeight:'bold',
    color:'#f5e400'
  }
})
