import React,{Component} from 'react';
import{View,StyleSheet,Text,Image,TouchableHighlight} from 'react-native';
export default class DrawerContent extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.Profilecontainer}>
          <View  style={styles.Profilepiccon}>
             <Image source={require('../Image/manlogo.jpg') } style={styles.proflepic}/>
             <TouchableHighlight style={styles.invitebutton} onPress={()=>this.props.navigation.navigate("Tab")}>
             <Text style={{color:'white',fontWeight:'bold'}}>Invite</Text>
             </TouchableHighlight>
          </View>
          <View style={styles.inputview}>
             <Text style={styles.nametext}>Shince Chacko</Text>
             <Text style={styles.mailtext}>shince@gmail.com</Text>
             <Text style={styles.mobtext}>Mob: 9999999999</Text>
          </View>
        </View>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Wallet')}>Wallet Balance</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Records')}>Records</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Refund')}>Refund</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Setting')}>Setting</Text>
      <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Aboutus')}>About Us</Text>
    <Text style={styles.input}
       onPress={()=>this.props.navigation.navigate('Help')}>Help</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  input:{
    fontSize:18,
    fontWeight:'bold',
    marginTop:20,
    marginLeft:20,
    color:'black'
  },
  Profilecontainer:{
    height:'25%',
    width:'100%',
    backgroundColor:'#dcdee6',
    flexDirection:'row',
    alignItems:'center'
  },
  Profilepiccon:{
    height:100,
    width:100,
    borderRadius:50,
    marginLeft:20,
    backgroundColor:'red'
  },
  proflepic:{
    height:'100%',
    width:'100%',
    borderRadius:50
  },
  inputview:{
    marginLeft:20
  },
  nametext:{
    color:'green',
    marginBottom:10,
    fontWeight:'bold'
  },
  mailtext:{
  color:'brown',
  marginBottom:10,
  fontWeight:'bold'
  },
  mobtext:{
  color:'brown',
  marginBottom:10,
  fontWeight:'bold'
  },
  invitebutton:{
    backgroundColor:'black',
    marginTop:10,
    height:25,
    width:40,
    borderRadius:2,
    alignItems:'center'
    
  }
    


})